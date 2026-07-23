import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";
import { blogSlugRedirects } from "@/data/blogRedirects";
import { trackBlogRead, trackButtonClick } from "@/lib/analytics";

const BlogPost = () => {
  const { slug } = useParams();
  const redirectTo = slug ? blogSlugRedirects[slug] : undefined;
  if (redirectTo) return <Navigate to={`/blog/${redirectTo}`} replace />;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;
  const url = `https://saveiy.com/blog/${post.slug}`;

  // Related posts: same tag overlap, exclude current, take up to 3
  const related = posts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, overlap: p.tags.filter((t) => post.tags.includes(t)).length }))
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 3)
    .map((x) => x.p);

  useEffect(() => {
    trackBlogRead(post.slug, post.title);
  }, [post.slug, post.title]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          keywords: post.tags.join(", "),
          author: { "@type": "Organization", name: "Saveiy" },
          publisher: { "@type": "Organization", name: "Corewave Innovations Pvt. Ltd." },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          url,
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://saveiy.com/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://saveiy.com/blog" },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        })}</script>
        {post.faqs && post.faqs.length > 0 && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}</script>
        )}
      </Helmet>
      <Navbar />
      <main className="pt-28 md:pt-36 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-primary hover:text-primary/80 mb-8">
            <ArrowLeft size={14} /> All posts
          </Link>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">{post.date} · {post.readTime}</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">{post.title}</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
            <div className="mt-10 space-y-6 text-base leading-[1.75] text-foreground/85">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <aside className="mt-12 rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-4">+ explore saveiy</p>
              <div className="flex flex-wrap gap-2">
                <Link to="/product" className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold hover:border-primary hover:text-primary transition-colors">The Product</Link>
                <Link to="/how-it-works" className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold hover:border-primary hover:text-primary transition-colors">How It Works</Link>
                <Link to="/waitlist" className="inline-flex items-center rounded-full bg-primary text-white px-4 py-2 text-xs font-semibold hover:bg-foreground transition-colors">Join Waitlist</Link>
              </div>
            </aside>

            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-14" aria-labelledby="post-faq-heading">
                <h2 id="post-faq-heading" className="font-display text-2xl md:text-3xl tracking-tight mb-6">Frequently asked questions</h2>
                <div className="space-y-4">
                  {post.faqs.map((f, i) => (
                    <details key={i} className="group rounded-xl border border-border bg-background p-5 md:p-6 open:border-primary/40 transition-colors">
                      <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-display text-base md:text-lg leading-snug">
                        <span>{f.q}</span>
                        <span aria-hidden className="mt-1 text-primary transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}


            {related.length > 0 && (
              <section className="mt-14">
                <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-6">Related reading</h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to={`/blog/${r.slug}`}
                        className="block h-full rounded-xl border border-border bg-background p-5 hover:border-primary/40 transition-colors"
                      >
                        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{r.date} · {r.readTime}</p>
                        <p className="mt-2 font-display text-lg leading-snug">{r.title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="mt-14 border-t border-border pt-8">
              <Link to="/waitlist" className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] font-bold hover:bg-foreground transition-colors">
                Join the Saveiy waitlist
              </Link>
            </div>
          </motion.div>
        </article>
      </main>

      {/* Sticky conversion banner */}
      <div className="sticky bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-3 md:py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs md:text-sm text-foreground/90 text-center sm:text-left">
            Tired of tracking expenses manually? Start optimizing your bills with Saveiy today.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-foreground transition-colors whitespace-nowrap"
          >
            Try Saveiy Free
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;

