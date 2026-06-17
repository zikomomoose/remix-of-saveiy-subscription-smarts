import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bell, Search, LineChart, Wallet, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Search, eyebrow: "01 / detection", title: "Every recurring charge, surfaced.", body: "Saveiy scans UPI mandates, card statements and bank feeds to flag every subscription — even the ones you forgot existed." },
  { icon: Bell, eyebrow: "02 / alerts", title: "Predict every renewal.", body: "Know what's renewing 7 days, 24 hours, and 1 hour before. Cancel before the charge clears." },
  { icon: Wallet, eyebrow: "03 / savings", title: "₹12k saved per year.", body: "Average user kills three forgotten subscriptions in their first week with Saveiy." },
  { icon: Zap, eyebrow: "04 / alternatives", title: "Cheaper Indian alternatives.", body: "Budget-friendly substitutes for Netflix, Adobe, Spotify and more — surfaced when you need them." },
  { icon: ShieldCheck, eyebrow: "05 / trust", title: "Read-only. Bank-grade. DPDP-ready.", body: "AES-256 encryption, zero card storage, fully compliant with India's DPDP Act 2023." },
  { icon: LineChart, eyebrow: "06 / insights", title: "Your spend score, weekly.", body: "A simple score that tells you if your subscriptions are pulling their weight." },
];

const Product = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Product — Saveiy Subscription Manager for India</title>
      <meta name="description" content="Explore Saveiy's product: detect every recurring charge, predict renewals, switch to cheaper Indian alternatives. Built for UPI, cards and bank feeds." />
      <link rel="canonical" href="https://saveiy.com/product" />
      <meta property="og:title" content="Product — Saveiy" />
      <meta property="og:url" content="https://saveiy.com/product" />
    </Helmet>
    <Navbar />
    <main className="pt-28 md:pt-36">
      <section className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">+ the product</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] max-w-4xl">
          One tracker for every rupee that leaves on <span className="text-primary">auto-pay.</span>
        </motion.h1>
        <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          From UPI mandates to forgotten free trials, Saveiy gives you a single calm view of your recurring spending — and the controls to fix it.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-20 md:mt-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-border bg-card p-7 md:p-9 hover:border-primary/40 hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between">
                <f.icon size={20} className="text-primary" />
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">{f.eyebrow}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl md:text-3xl tracking-tight leading-tight">{f.title}</h3>
              <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white mt-28 py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight">Ready to stop the leaks?</h2>
          <Link to="/waitlist" className="mt-10 inline-flex items-center gap-2 bg-white text-ink rounded-full px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-bold hover:bg-primary hover:text-white transition-colors">
            Join the waitlist <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Product;
