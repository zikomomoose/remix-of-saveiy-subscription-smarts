import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";
import { AppShell } from "../src/App";
import NotFound from "../src/pages/NotFound";
import { publicRoutes } from "../src/data/routes";
import { blogSlugRedirects } from "../src/data/blogRedirects";
import { posts } from "../src/data/posts";

const root = process.cwd();
const template = readFileSync(join(root, "dist/index.html"), "utf8");

type HelmetContext = { helmet?: Record<string, { toString: () => string }> };

const renderPage = (path: string, notFound = false) => {
  const helmetContext: HelmetContext = {};
  const body = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={path}>
        {notFound ? <NotFound /> : <AppShell />}
      </StaticRouter>
    </HelmetProvider>,
  );
  const helmet = helmetContext.helmet;
  const head = ["title", "priority", "meta", "link", "script"]
    .map((key) => helmet?.[key]?.toString() || "")
    .join("\n");
  return template
    .replace("</head>", `${head}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
};

for (const route of publicRoutes) {
  const output = route.path === "/" ? join(root, "dist/index.html") : join(root, "dist", route.path.slice(1), "index.html");
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, renderPage(route.path));
}

writeFileSync(join(root, "dist/404.html"), renderPage("/404", true));

const writeRedirect = (from: string, to: string, label: string) => {
  const dir = join(root, "dist", from.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=${to}"><link rel="canonical" href="https://saveiy.com${to}"><title>Redirecting to ${label} | Saveiy</title></head><body><p>Redirecting to <a href="${to}">${label}</a>.</p></body></html>`);
};
writeRedirect("/privacy-policy", "/privacy", "Privacy Policy");
for (const [from, to] of Object.entries(blogSlugRedirects)) {
  const target = posts.find((p) => p.slug === to);
  writeRedirect(`/blog/${from}`, `/blog/${to}`, target?.title ?? to);
}

const escapeXml = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${publicRoutes
  .filter((route) => route.indexable)
  .map((route) => `  <url><loc>${escapeXml(`https://saveiy.com${route.path === "/" ? "/" : route.path}`)}</loc><lastmod>${route.lastmod}</lastmod></url>`)
  .join("\n")}\n</urlset>\n`;
writeFileSync(join(root, "dist/sitemap.xml"), sitemap);
writeFileSync(join(root, "public/sitemap.xml"), sitemap);

console.log(`Prerendered ${publicRoutes.length} routes plus 404 and privacy redirect.`);