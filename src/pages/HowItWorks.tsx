import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  { n: "01", title: "Connect securely", body: "Sign in with Google and (optionally) link your accounts via India's regulated Account Aggregator framework. Read-only, consent-driven — we never store passwords or card numbers." },
  { n: "02", title: "Saveiy finds the recurring stuff", body: "We analyse UPI mandates, card statements, billing emails and SMS confirmations to build a complete map of every recurring charge — paid, free trial, dormant, duplicate." },
  { n: "03", title: "Get alerts before you're billed", body: "Renewal alerts at 7 days, 24 hours and 1 hour. Spend score every Monday. Cheaper Indian alternatives surfaced whenever they exist." },
  { n: "04", title: "Cancel or switch in two taps", body: "One-tap deep links to cancellation flows for India's biggest services. Most users kill three forgotten subscriptions in their first week." },
];

const HowItWorks = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>How It Works — Saveiy</title>
      <meta name="description" content="See how Saveiy detects every recurring charge across UPI, cards and email, predicts renewals, and helps you cancel or switch to cheaper Indian alternatives in two taps." />
      <link rel="canonical" href="https://saveiy.com/how-it-works" />
      <meta property="og:title" content="How Saveiy works" />
      <meta property="og:url" content="https://saveiy.com/how-it-works" />
    </Helmet>
    <Navbar />
    <main className="pt-28 md:pt-36">
      <section className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">+ how it works</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] max-w-4xl">
          Four steps. <span className="text-primary">Total clarity.</span>
        </h1>
        <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Saveiy is privacy-first, read-only, and built around India's regulated consent frameworks. Here's exactly what happens after you join.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-12 mt-20 md:mt-28 space-y-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-12 items-start border-t border-border py-10 md:py-14"
          >
            <div className="font-display text-5xl md:text-6xl text-primary tracking-tight">{s.n}</div>
            <div>
              <h2 className="font-display text-2xl md:text-4xl tracking-tight leading-tight">{s.title}</h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">{s.body}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="bg-ink text-white mt-20 py-24 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight">See it in action.</h2>
          <Link to="/waitlist" className="mt-10 inline-flex items-center gap-2 bg-primary text-white rounded-full px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-bold hover:bg-white hover:text-ink transition-colors">
            Request early access <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default HowItWorks;
