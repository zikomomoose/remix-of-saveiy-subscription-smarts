/**
 * Blog SEO audit — static analysis.
 * Verifies every post in src/data/posts.ts has the fields required to
 * render complete <title>, meta description, canonical, OpenGraph,
 * Twitter, Article JSON-LD, and BreadcrumbList JSON-LD via BlogPost.tsx.
 *
 * Run: bunx tsx scripts/audit-blog-seo.ts
 */
import { posts } from "../src/data/posts";
import { readFileSync } from "fs";
import { resolve } from "path";

type Check = { name: string; ok: boolean; detail?: string };

const KEY_LINKS = ["/product", "/how-it-works", "/waitlist"];
const REQUIRED_TAGS = [
  "<title>",
  'name="description"',
  'rel="canonical"',
  'property="og:title"',
  'property="og:description"',
  'property="og:url"',
  'property="og:type"',
  'name="twitter:card"',
  'name="twitter:title"',
  'name="twitter:description"',
  '"@type": "Article"',
  '"@type": "BreadcrumbList"',
];

const blogPostSrc = readFileSync(resolve("src/pages/BlogPost.tsx"), "utf8");

const templateChecks: Check[] = REQUIRED_TAGS.map((t) => ({
  name: `BlogPost.tsx contains ${t}`,
  ok: blogPostSrc.includes(t),
}));

// Internal-link consistency: template must reference all key routes.
KEY_LINKS.forEach((href) => {
  templateChecks.push({
    name: `BlogPost.tsx links to ${href}`,
    ok: blogPostSrc.includes(`to="${href}"`),
  });
});

// Related posts (3) requirement — check the code path exists.
templateChecks.push({
  name: "BlogPost.tsx renders related posts (.slice(0, 3))",
  ok: blogPostSrc.includes(".slice(0, 3)"),
});

let allOk = true;
console.log("\n=== Blog template checks ===");
for (const c of templateChecks) {
  console.log(`${c.ok ? "✅" : "❌"} ${c.name}`);
  if (!c.ok) allOk = false;
}

console.log(`\n=== Per-post field checks (${posts.length} posts) ===`);
const seenSlugs = new Set<string>();
for (const p of posts) {
  const rowChecks: Check[] = [
    { name: "slug", ok: !!p.slug && /^[a-z0-9-]+$/.test(p.slug) },
    { name: "unique slug", ok: !seenSlugs.has(p.slug) },
    { name: "title <= 70 chars", ok: !!p.title && p.title.length <= 70, detail: `${p.title?.length}` },
    { name: "excerpt (meta description) <= 160 chars", ok: !!p.excerpt && p.excerpt.length <= 160, detail: `${p.excerpt?.length}` },
    { name: "date present", ok: !!p.date },
    { name: "readTime present", ok: !!p.readTime },
    { name: "tags >= 1", ok: Array.isArray(p.tags) && p.tags.length >= 1 },
    { name: "body >= 2 paragraphs", ok: Array.isArray(p.body) && p.body.length >= 2 },
  ];
  seenSlugs.add(p.slug);

  const bad = rowChecks.filter((c) => !c.ok);
  if (bad.length === 0) {
    console.log(`✅ ${p.slug}`);
  } else {
    allOk = false;
    console.log(`❌ ${p.slug}`);
    bad.forEach((b) => console.log(`   - ${b.name}${b.detail ? ` (got ${b.detail})` : ""}`));
  }
}

console.log(`\n${allOk ? "✅ All blog SEO checks passed." : "❌ Blog SEO audit failed."}`);
process.exit(allOk ? 0 : 1);
