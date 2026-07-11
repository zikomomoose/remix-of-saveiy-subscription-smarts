import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Bell, TrendingDown, Sparkles } from "lucide-react";

const phoneRows = [
  { name: "Netflix Premium", meta: "Renews Jun 22", amount: "₹649" },
  { name: "Spotify Family", meta: "Renews Jun 25", amount: "₹179" },
  { name: "Adobe CC", meta: "Renews Jun 28", amount: "₹1,162" },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const phoneCenterY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -60]);
  const phoneLeftY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -30]);
  const phoneRightY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -45]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative bg-ink text-white overflow-hidden pt-32 md:pt-40 pb-20"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, hsla(164,55%,40%,0.18), transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] md:text-xs font-mono uppercase tracking-[0.35em] text-white/60 mb-8"
        >
          + made in india · privacy first · app coming soon
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-white tracking-tight leading-[1.02] font-semibold
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl mx-auto text-center"
        >
          Know what's <span className="text-primary">renewing.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 text-base md:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed text-center"
        >
          The intelligent subscription manager and bill tracker that helps you track app
          subscriptions, manage recurring expenses, and stop subscription creep before it charges you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <Link
            to="/waitlist"
            className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-ink transition-colors"
          >
            Join the waitlist <ArrowRight size={14} />
          </Link>
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            free · early access · app coming soon
          </p>
        </motion.div>

        <div className="relative mt-20 md:mt-24 h-[460px] md:h-[560px] flex items-end justify-center">
          <motion.div
            style={{ y: phoneLeftY }}
            initial={{ opacity: 0, y: 60, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -10 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block absolute bottom-0 left-[8%] md:left-[14%] w-[180px] md:w-[230px] origin-bottom"
          >
            <PhoneFrame variant="cream" />
          </motion.div>

          <motion.div
            style={{ y: phoneRightY }}
            initial={{ opacity: 0, y: 60, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: 10 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block absolute bottom-0 right-[8%] md:right-[14%] w-[180px] md:w-[230px] origin-bottom"
          >
            <PhoneFrame variant="teal" />
          </motion.div>

          <motion.div
            style={{ y: phoneCenterY }}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[230px] sm:w-[260px] md:w-[300px] z-10"
          >
            <PhoneFrame variant="main" rows={phoneRows} />
          </motion.div>
        </div>
      </div>

    </section>
  );
};

const PhoneFrame = ({
  variant,
  rows,
}: {
  variant: "main" | "cream" | "teal";
  rows?: { name: string; meta: string; amount: string }[];
}) => {
  if (variant === "cream") {
    return (
      <div className="aspect-[9/19] rounded-[2rem] border-[8px] border-black bg-black shadow-2xl overflow-hidden">
        <div className="w-full h-full bg-cream text-cream-ink p-4 flex flex-col">
          <div className="text-[8px] font-mono uppercase tracking-widest opacity-60">9:41</div>
          <div className="mt-4 text-[9px] font-mono uppercase tracking-widest opacity-70">monthly leak</div>
          <div className="font-serif-display text-3xl mt-1 leading-none">₹4,820</div>
          <div className="mt-1 text-[9px] font-mono opacity-60">3 forgotten trials</div>
          <div className="mt-4 space-y-1.5">
            {["Disney+", "Hotstar", "Audible"].map((s) => (
              <div key={s} className="text-[10px] flex justify-between border-b border-black/10 pb-1">
                <span>{s}</span><span className="font-mono">×</span>
              </div>
            ))}
          </div>
          <div className="mt-auto bg-black text-white text-[9px] uppercase tracking-widest font-bold text-center py-2 rounded">
            cancel all
          </div>
        </div>
      </div>
    );
  }
  if (variant === "teal") {
    return (
      <div className="aspect-[9/19] rounded-[2rem] border-[8px] border-black bg-black shadow-2xl overflow-hidden">
        <div className="w-full h-full bg-teal-deep text-white p-4 flex flex-col">
          <div className="text-[8px] font-mono uppercase tracking-widest opacity-60">9:41</div>
          <div className="mt-4 text-[9px] font-mono uppercase tracking-widest opacity-70">saved ytd</div>
          <div className="font-serif-display text-3xl mt-1 leading-none">₹18,420</div>
          <div className="mt-1 inline-flex items-center gap-1 text-[9px] font-mono opacity-80">
            <TrendingDown size={10} /> 14 leaks killed
          </div>
          <div className="mt-4 h-20 flex items-end gap-1">
            {[40, 65, 30, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/70 rounded-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-auto bg-white text-ink text-[9px] uppercase tracking-widest font-bold text-center py-2 rounded">
            view report
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="aspect-[9/19] rounded-[2.4rem] border-[10px] border-black bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
      <div className="w-full h-full bg-primary text-white p-4 flex flex-col">
        <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest opacity-80">
          <span>9:41</span><span>saveiy</span>
        </div>
        <div className="mt-4">
          <div className="text-[9px] font-mono uppercase tracking-widest opacity-70">renewing this month</div>
          <div className="font-serif-display text-[2.6rem] leading-[0.9] mt-1">₹1,990</div>
          <div className="mt-1 inline-flex items-center gap-1 text-[10px] font-mono opacity-90">
            <TrendingDown size={11} /> ₹420 saved
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {rows?.map((r) => (
            <div key={r.name} className="bg-white/10 backdrop-blur rounded-lg px-3 py-2 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold leading-tight">{r.name}</div>
                <div className="text-[9px] font-mono opacity-70 mt-0.5">{r.meta}</div>
              </div>
              <div className="text-[11px] font-mono font-bold">{r.amount}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 bg-white/95 text-ink rounded-lg px-3 py-2 flex items-start gap-2">
          <Bell size={12} className="text-primary mt-0.5 shrink-0" />
          <div>
            <div className="text-[10px] font-bold">Netflix renews in 7 days</div>
            <div className="text-[9px] opacity-60">Cheaper alternative found</div>
          </div>
        </div>
        <div className="mt-auto bg-black text-white rounded-md py-2.5 text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-1.5">
          <Sparkles size={11} /> review &amp; cancel
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
