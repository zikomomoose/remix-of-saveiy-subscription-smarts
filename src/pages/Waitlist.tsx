import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EarlyAccess from "@/components/EarlyAccess";

const Waitlist = () => (
  <div className="min-h-screen bg-ink">
    <Helmet>
      <title>Join the Saveiy Waitlist</title>
      <meta name="description" content="Get early access to Saveiy — India's smart subscription manager. Free, no spam, onboarded in batches." />
      <link rel="canonical" href="https://saveiy.com/waitlist" />
      <meta property="og:title" content="Join the Saveiy Waitlist" />
      <meta property="og:url" content="https://saveiy.com/waitlist" />
    </Helmet>
    <Navbar />
    <main className="pt-24">
      <section className="max-w-3xl mx-auto px-6 pt-12 text-center">
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">+ early access</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-display text-white text-5xl md:text-7xl tracking-tight leading-[0.95]">
          Be first in line.
        </motion.h1>
        <p className="mt-6 text-white/70 text-base md:text-lg max-w-xl mx-auto">
          We're onboarding users in small batches to keep the experience tight. Drop your details and we'll send your invite the moment a spot opens.
        </p>
      </section>
      <EarlyAccess />
    </main>
    <Footer />
  </div>
);

export default Waitlist;
