import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import CountUp from "./CountUp";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const range = prefersReducedMotion ? [0, 0] : undefined;
  const p1 = useTransform(scrollYProgress, [0, 1], range ?? [0, -50]);
  const p2 = useTransform(scrollYProgress, [0, 1], range ?? [0, -80]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden"
      id="top"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 bg-secondary text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            India's first smart tracker
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-8 text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter"
          >
            Control Every <span className="text-primary">Rupee.</span>
            <br />
            Track Every <span className="text-primary">Subscription.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 max-w-md text-base md:text-lg text-muted-foreground font-light leading-relaxed"
          >
            Saveiy automatically identifies recurring payments, uncovers hidden leaks,
            and helps you reclaim your financial freedom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("early-access")}
              className="group bg-primary text-primary-foreground px-8 md:px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-foreground transition-all shadow-xl inline-flex items-center gap-3"
            >
              Join the waitlist
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("features")}
              className="border border-border px-8 md:px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-secondary transition-all"
            >
              Learn More
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-6 items-center text-[10px] text-muted-foreground/70 uppercase tracking-widest"
          >
            <span>Privacy First</span>
            <span className="w-1 h-1 bg-border rounded-full" />
            <span>Consent Driven</span>
            <span className="w-1 h-1 bg-border rounded-full" />
            <span>Made in India</span>
          </motion.div>
        </div>

        {/* Phone mockup */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-foreground rounded-[3rem] p-3 shadow-2xl border-[8px] border-foreground overflow-hidden"
          >
            <div className="bg-background w-full h-full rounded-[2.2rem] flex flex-col p-6">
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                Total This Month
              </div>
              <div className="font-display text-4xl font-bold mb-8 tracking-tighter">
                <CountUp end={1990} prefix="₹" startOnMount />
              </div>

              <div className="space-y-4">
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest border-b border-border pb-2">
                  Upcoming
                </div>
                {[
                  { n: "Netflix", d: "In 4 days", a: "₹649", c: "bg-red-50" },
                  { n: "Spotify", d: "In 9 days", a: "₹119", c: "bg-green-50" },
                  { n: "Canva Pro", d: "In 14 days", a: "₹499", c: "bg-blue-50" },
                ].map((s) => (
                  <div key={s.n} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 ${s.c} rounded-lg`} />
                      <div>
                        <div className="text-sm font-bold">{s.n}</div>
                        <div className="text-[10px] text-muted-foreground">{s.d}</div>
                      </div>
                    </div>
                    <div className="font-bold">{s.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating cards */}
          <motion.div
            style={{ y: p1 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -left-4 lg:-left-12 top-1/4 bg-background p-4 shadow-2xl border border-border max-w-[180px] hidden md:block"
          >
            <div className="text-[9px] uppercase tracking-widest font-bold text-primary mb-1">New Insight</div>
            <p className="text-[11px] leading-tight font-medium">
              You could save <span className="font-bold">₹1,150/mo</span> by cancelling unused apps.
            </p>
          </motion.div>

          <motion.div
            style={{ y: p2 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="absolute -right-4 lg:-right-8 bottom-1/4 bg-foreground text-background p-4 shadow-2xl max-w-[170px] hidden md:block"
          >
            <div className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground mb-1">
              Safe to spend
            </div>
            <p className="font-display text-xl font-bold tracking-tighter">
              <CountUp end={24500} prefix="₹" startOnMount />
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
