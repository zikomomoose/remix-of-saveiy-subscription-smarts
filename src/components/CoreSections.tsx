import { motion } from "framer-motion";
import { Bell, Search, LineChart, Wallet, ShieldCheck, Zap } from "lucide-react";
import CountUp from "./CountUp";

const bento = [
  {
    span: "md:col-span-2 md:row-span-2",
    bg: "bg-cream text-cream-ink",
    icon: <Search size={22} />,
    eyebrow: "01 / detection",
    title: "every recurring charge, surfaced.",
    body: "Saveiy scans your UPI mandates, card statements and bank feeds to flag every subscription — even the ones you forgot existed.",
    visual: (
      <div className="mt-8 space-y-2">
        {["Netflix Premium · ₹649", "Spotify Family · ₹179", "Adobe Creative Cloud · ₹1,162", "Hotstar · ₹299"].map(
          (s, i) => (
            <div
              key={s}
              className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest border-b border-black/10 pb-2"
              style={{ opacity: 1 - i * 0.15 }}
            >
              <span>{s.split(" · ")[0]}</span>
              <span className="opacity-60">{s.split(" · ")[1]}</span>
            </div>
          )
        )}
      </div>
    ),
  },
  {
    span: "",
    bg: "bg-ink-2 text-white",
    icon: <Bell size={22} />,
    eyebrow: "02 / alerts",
    title: "predict every renewal.",
    body: "Know what's renewing 7 days, 24 hours, and 1 hour before. Cancel before the charge clears.",
  },
  {
    span: "",
    bg: "bg-primary text-primary-foreground",
    icon: <Wallet size={22} />,
    eyebrow: "03 / savings",
    title: (
      <>
        <CountUp end={12} prefix="₹" suffix="k" />
        <span className="text-2xl md:text-3xl font-display"> saved/year</span>
      </>
    ),
    body: "Average user kills three forgotten subscriptions in their first week with Saveiy.",
  },
  {
    span: "",
    bg: "bg-plum text-white",
    icon: <Zap size={22} />,
    eyebrow: "04 / alternatives",
    title: "swap to cheaper indian alternatives.",
    body: "We surface budget-friendly substitutes for Netflix, Adobe, Spotify, and more.",
  },
  {
    span: "md:col-span-2",
    bg: "bg-teal-deep text-white",
    icon: <ShieldCheck size={22} />,
    eyebrow: "05 / trust",
    title: "read-only. bank-grade. dpdp ready.",
    body: "AES-256 encryption, zero card storage, fully compliant with India's DPDP Act 2023. We never sell your data.",
    visual: (
      <div className="mt-6 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-widest">
        {["AES-256", "RBI guidelines", "DPDP 2023", "read-only", "no card data"].map((b) => (
          <span key={b} className="border border-white/20 px-3 py-1 rounded-full">{b}</span>
        ))}
      </div>
    ),
  },
  {
    span: "",
    bg: "bg-cream text-cream-ink",
    icon: <LineChart size={22} />,
    eyebrow: "06 / insights",
    title: "your spend score, weekly.",
    body: "A simple score that tells you if your subscriptions are pulling their weight.",
  },
];

const CoreSections = () => {
  return (
    <section id="features" className="bg-ink py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">
              + the product
            </p>
            <h2 className="font-serif-display text-white text-5xl md:text-7xl leading-[0.95]">
              one tracker for <em className="italic text-primary">every rupee</em> that leaves on auto-pay.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white/60 text-base md:text-lg leading-relaxed max-w-md md:justify-self-end"
          >
            From UPI mandates to forgotten free trials, Saveiy gives you a single calm view of
            your recurring spending — and the controls to fix it.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 md:auto-rows-[minmax(220px,auto)] gap-3 md:gap-4">
          {bento.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl p-8 md:p-10 transition-shadow hover:shadow-2xl ${b.bg} ${b.span}`}
            >
              <div className="flex items-center justify-between">
                <span className="opacity-70">{b.icon}</span>
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-60">
                  {b.eyebrow}
                </span>
              </div>
              <h3 className="font-serif-display text-3xl md:text-4xl leading-[1.05] mt-6">
                {b.title}
              </h3>
              <p className="mt-4 text-sm md:text-base opacity-75 leading-relaxed max-w-md">
                {b.body}
              </p>
              {b.visual}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSections;
