import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Saveiy Personal Finance & Optimization Blog</title>
      <meta name="description" content="Expert guides, actionable strategies, and tips to help you combat subscription creep, manage fixed monthly expenses, and take control of your recurring bills." />
      <link rel="canonical" href="https://saveiy.com/blog" />
      <meta property="og:title" content="Saveiy Personal Finance & Optimization Blog" />
      <meta property="og:description" content="Expert guides on subscription creep, fixed monthly expenses, and recurring bill optimization." />
      <meta property="og:url" content="https://saveiy.com/blog" />
    </Helmet>
    <Navbar />
    <main className="pt-28 md:pt-36">
      <section className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">+ field notes</p>
        <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02] max-w-4xl">
          Saveiy Personal Finance &amp; <span className="text-primary">Optimization Blog.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          Expert guides, actionable strategies, and tips to help you combat subscription creep, manage fixed monthly expenses, and take control of your recurring bills.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-12 mt-16 md:mt-24">
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {posts.map((p, i) => (
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
                <h2 className="mt-5 font-display text-2xl md:text-3xl tracking-tight leading-tight group-hover:text-primary transition-colors">{p.title}</h2>
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
