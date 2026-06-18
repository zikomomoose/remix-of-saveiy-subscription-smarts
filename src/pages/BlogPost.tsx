import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;
  const url = `https://saveiy.com/blog/${post.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} — Saveiy Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          datePublished: post.date,
          author: { "@type": "Organization", name: "Saveiy" },
          publisher: { "@type": "Organization", name: "Corewave Innovations Pvt. Ltd." },
          mainEntityOfPage: url,
        })}</script>
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
            <div className="mt-14 border-t border-border pt-8">
              <Link to="/waitlist" className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] font-bold hover:bg-foreground transition-colors">
                Join the Saveiy waitlist
              </Link>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
