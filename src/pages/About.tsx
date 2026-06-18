import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Award, ShieldCheck, Lock, Users, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>About Saveiy | India's Smart Subscription Manager</title>
      <meta
        name="description"
        content="Saveiy is built by Corewave Innovations to help Indians track subscriptions, stop hidden auto-renewals, and switch to smarter alternatives. Incubated at SCIE Pune, recognised under iStart Rajasthan."
      />
      <link rel="canonical" href="https://saveiy.com/about" />
      <meta property="og:title" content="About Saveiy | India's Smart Subscription Manager" />
      <meta property="og:url" content="https://saveiy.com/about" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Saveiy",
        legalName: "Corewave Innovations Pvt. Ltd.",
        url: "https://saveiy.com",
        logo: "https://saveiy.com/favicon.ico",
        foundingDate: "2026",
        founders: [{ "@type": "Person", name: "Saveiy Founding Team" }],
        address: { "@type": "PostalAddress", addressCountry: "IN" },
        sameAs: ["https://saveiy.com"],
      })}</script>
    </Helmet>

    <Navbar />
    <main className="max-w-4xl mx-auto px-6 pt-24 pb-20">
      <Link to="/" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] text-primary hover:text-primary/80 mb-8 transition-colors">
        <ArrowLeft size={14} /> Back
      </Link>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-4">About / Company</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] mb-8">
          Built in India, <span className="text-primary">for India.</span>
        </h1>

        {/* Mission */}
        <section className="mt-10">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-primary mb-3">
            <Target size={14} /> Our Mission
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Give every Indian household full visibility into recurring spending.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The average urban Indian has 8-12 active digital subscriptions across OTT, music,
            cloud storage, productivity tools, and fintech services — most of them set to auto-renew
            silently through UPI mandates or credit cards. Saveiy was founded to end that quiet drain.
            We combine bank-grade aggregation with AI categorisation so you always know what's renewing,
            when, and whether there's a smarter alternative.
          </p>
        </section>

        {/* Team */}
        <section className="mt-14">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-primary mb-3">
            <Users size={14} /> The Team
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4">
            A small team of fintech &amp; product builders.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Saveiy is built by Corewave Innovations Pvt. Ltd., a registered Indian company.
            Our founding team has shipped consumer fintech and AI products used by hundreds of
            thousands of users, and we're advised by operators from India's leading payments
            and personal-finance companies. We're currently in stealth and onboarding the
            waitlist in batches.
          </p>
        </section>

        {/* Security & Privacy */}
        <section className="mt-14">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-primary mb-3">
            <ShieldCheck size={14} /> Security &amp; Privacy
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-6">
            Your financial data, treated like it's our own.
          </h2>
          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
            {[
              { i: ShieldCheck, t: "Bank-grade encryption", d: "All data encrypted in transit (TLS 1.3) and at rest (AES-256)." },
              { i: Lock, t: "Read-only access", d: "We never initiate transactions. Your accounts stay yours." },
              { i: Award, t: "DPDP Act 2023 compliant", d: "Built to India's Digital Personal Data Protection Act." },
              { i: Users, t: "No data resale", d: "We never sell or rent your data. Ever. No third-party ads." },
            ].map((it) => (
              <div key={it.t} className="bg-background p-5">
                <it.i size={18} className="text-primary" />
                <p className="mt-3 text-sm font-bold tracking-tight">{it.t}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Credibility */}
        <section className="mt-14">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-primary mb-3">
            <Building2 size={14} /> Recognition &amp; Incubation
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="border border-border bg-secondary/40 px-5 py-5">
              <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">Incubation</p>
              <p className="text-sm font-bold tracking-tight leading-snug mb-2">
                Symbiosis Centre for Innovation &amp; Entrepreneurship (SCIE)
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Incubated at SCIE Pune — Symbiosis International University's flagship startup
                incubator, supporting student and graduate founders since 2008.
              </p>
            </div>
            <div className="border border-border bg-secondary/40 px-5 py-5">
              <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">Government recognition</p>
              <p className="text-sm font-bold tracking-tight leading-snug mb-2">
                iStart Rajasthan (Govt. of Rajasthan)
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Recognised under iStart Rajasthan — the state government's flagship startup
                programme supporting registered, vetted Indian startups.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-14 pt-8 border-t border-border">
          <Link
            to="/waitlist"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-foreground transition-colors"
          >
            Join the Saveiy Waitlist
          </Link>
        </div>
      </motion.div>
    </main>
    <Footer />
  </div>
);

export default About;
