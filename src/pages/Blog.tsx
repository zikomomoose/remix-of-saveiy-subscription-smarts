import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  { title: "Why You're Overpaying for Subscriptions", date: "Mar 10, 2026", excerpt: "The average person spends ₹15,000+/year on subscriptions they've forgotten about. Here's how to fix it." },
  { title: "5 Free Alternatives to Expensive SaaS Tools", date: "Mar 5, 2026", excerpt: "From Photopea to Obsidian — discover pocket-friendly tools that do the same job." },
  { title: "The Subscription Economy in India: 2026 Trends", date: "Feb 28, 2026", excerpt: "India's subscription market is booming. Here's what it means for your wallet." },
];

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
      <Link to="/" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] text-primary hover:text-primary/80 mb-8 transition-colors">
        <ArrowLeft size={14} /> Back
      </Link>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">Blog</h1>
        <div className="space-y-4">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
            >
              <p className="text-[10px] uppercase tracking-[0.1em] text-primary/60 mb-1">{post.date}</p>
              <h2 className="text-base font-semibold">{post.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default Blog;
