import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";

const featured = posts.filter((p) => p.featured).slice(0, 3);
const rest = posts.filter((p) => !p.featured);

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Saveiy Blog — Subscription Manager Guides (India)</title>
      <meta
        name="description"
        content="Guides on the best expense tracker apps in India 2026, subscription manager apps for UPI AutoPay, and how to stop subscription creep on recurring bills."
      />
      <link rel="canonical" href="https://saveiy.com/blog" />
      <meta property="og:title" content="Best Expense Tracker & Subscription Manager App in India — Saveiy Blog" />
      <meta
        property="og:description"
        content="Ranked guides on the best expense tracker apps in India 2026 and the best subscription manager apps for UPI AutoPay and recurring bills."
      />
      <meta property="og:url" content="https://saveiy.com/blog" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Best Expense Tracker & Subscription Manager App in India — Saveiy Blog" />
      <meta
        name="twitter:description"
        content="Ranked guides on the best expense tracker apps in India 2026 and the best subscription manager apps for UPI AutoPay."
      />
    </Helmet>
    <Navbar />
    <main className="pt-28 md:pt-36">
      {/* SEO landing header */}
      <section className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">+ field notes</p>
        <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02] max-w-4xl">
          Best Expense Tracker &amp; <span className="text-primary">Subscription Manager App</span> Guides for India.
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          Ranked, hands-on guides for 2026: the{" "}
          <Link to="/blog/best-expense-tracker-apps-in-india-2026" className="text-primary underline underline-offset-4 hover:text-primary/80">
            best expense tracker apps in India
          </Link>
          , the{" "}
          <Link to="/blog/subscription-manager-app-in-india" className="text-primary underline underline-offset-4 hover:text-primary/80">
            best subscription manager app in India
          </Link>{" "}
          for UPI AutoPay, and a plain-English explainer on what a{" "}
          <Link to="/blog/subscription-manager-app" className="text-primary underline underline-offset-4 hover:text-primary/80">
            subscription manager app
          </Link>{" "}
          actually does. Stop subscription creep and take control of your recurring bills.
        </p>
      </section>

      {/* Featured India guides — above the fold */}
      {featured.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 md:px-12 mt-12 md:mt-16" aria-labelledby="featured-heading">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles size={14} className="text-primary" />
            <h2 id="featured-heading" className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
              Top guides · India 2026
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-3 md:gap-4">
            {featured.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  to={`/blog/${p.slug}`}
                  className="group block h-full rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/[0.04] to-transparent p-6 md:p-7 hover:border-primary hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-primary">
                    <span>Featured · {p.readTime}</span>
                    <ArrowUpRight size={16} className="opacity-60 group-hover:opacity-100 transition" />
                  </div>
                  <h3 className="mt-4 font-display text-xl md:text-2xl tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.excerpt}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* All posts */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mt-14 md:mt-20 pb-16">
        <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-6">All articles</h2>
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {rest.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
            >
              <Link to={`/blog/${p.slug}`} className="group block h-full rounded-2xl border border-border bg-card p-7 md:p-9 hover:border-primary/40 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  <span>{p.date} · {p.readTime}</span>
                  <ArrowUpRight size={16} className="opacity-40 group-hover:opacity-100 group-hover:text-primary transition" />
                </div>
                <h3 className="mt-5 font-display text-2xl md:text-3xl tracking-tight leading-tight group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <div className="mt-5 flex gap-2 flex-wrap">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-[0.18em] font-semibold border border-border rounded-full px-2.5 py-1">{t}</span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Blog;
