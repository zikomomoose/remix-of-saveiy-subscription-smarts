import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, Bell, Sparkles, Wallet } from "lucide-react";

const FloatingCard = ({
  className, delay, children,
}: {
  className: string; delay: number; children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className={className}
  >
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3.5 + delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* soft teal gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-primary/5 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] uppercase tracking-[0.2em] text-primary font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Pre-launch · Join the waitlist
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-[1.02] tracking-tight"
            >
              Control Every Rupee.
              <br />
              <span className="text-gradient">Track Every Subscription.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl lg:mx-0 mx-auto"
            >
              Saveiy helps you identify recurring payments, understand spending patterns,
              discover savings opportunities, and stay in control of your financial commitments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3"
            >
              <button
                onClick={() => scrollTo("early-access")}
                className="group px-7 py-3.5 bg-primary text-primary-foreground font-medium text-xs uppercase tracking-[0.14em] hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2.5 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/35 hover:-translate-y-0.5"
              >
                Join Waitlist
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("how-it-works")}
                className="px-7 py-3.5 border border-border bg-background/60 backdrop-blur text-foreground font-medium text-xs uppercase tracking-[0.14em] hover:border-primary/40 hover:text-primary transition-all duration-300 rounded-xl"
              >
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex items-center lg:justify-start justify-center gap-6 text-[11px] text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary" />Privacy first</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary" />Consent driven</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary" />Made in India</span>
            </motion.div>
          </div>

          {/* Phone mockup */}
          <div className="relative mx-auto w-full max-w-sm">
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative mx-auto w-[270px] h-[540px] rounded-[2.5rem] bg-gradient-to-b from-foreground to-foreground/90 p-2.5 shadow-2xl shadow-primary/20"
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground rounded-b-2xl z-20" />
              <div className="w-full h-full rounded-[2rem] bg-background overflow-hidden relative">
                <div className="p-5 pt-8">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">This month</p>
                  <p className="font-display text-3xl font-bold mt-1">₹2,387</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">recurring across 8 services</p>

                  <div className="mt-5 p-3 rounded-xl bg-primary/8 border border-primary/15">
                    <div className="flex items-center gap-2">
                      <Sparkles size={12} className="text-primary" />
                      <p className="text-[10px] font-medium text-primary uppercase tracking-wider">Insight</p>
                    </div>
                    <p className="text-xs mt-1.5 leading-snug">You could save ₹1,150/mo by cancelling 2 unused services.</p>
                  </div>

                  <p className="mt-5 text-[10px] uppercase tracking-[0.15em] text-muted-foreground/70 mb-2">Upcoming</p>
                  <div className="space-y-2">
                    {[
                      { n: "Netflix", d: "in 4 days", a: "₹649" },
                      { n: "Spotify", d: "in 9 days", a: "₹119" },
                      { n: "Canva Pro", d: "in 14 days", a: "₹499" },
                    ].map((s) => (
                      <div key={s.n} className="flex items-center justify-between p-2.5 rounded-lg bg-muted/60">
                        <div>
                          <p className="text-xs font-medium">{s.n}</p>
                          <p className="text-[9px] text-muted-foreground">{s.d}</p>
                        </div>
                        <p className="text-xs font-semibold">{s.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating cards */}
            <FloatingCard className="absolute -left-6 top-16 z-20 hidden sm:block" delay={0.5}>
              <div className="px-4 py-3 bg-background/90 backdrop-blur border border-border rounded-2xl shadow-xl shadow-primary/10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wallet size={13} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Recurring</p>
                    <p className="text-sm font-bold">₹2,387/mo</p>
                  </div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard className="absolute -right-4 top-32 z-20 hidden sm:block" delay={0.7}>
              <div className="px-4 py-3 bg-background/90 backdrop-blur border border-primary/20 rounded-2xl shadow-xl shadow-primary/15">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
                    <TrendingDown size={13} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] text-primary uppercase tracking-wider font-medium">Savings</p>
                    <p className="text-sm font-bold text-primary">₹1,150/mo</p>
                  </div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard className="absolute -left-4 bottom-24 z-20 hidden sm:block" delay={0.9}>
              <div className="px-4 py-3 bg-background/90 backdrop-blur border border-border rounded-2xl shadow-xl shadow-primary/10">
                <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Found</p>
                <p className="text-xs font-semibold mt-0.5">3 forgotten subs</p>
              </div>
            </FloatingCard>

            <FloatingCard className="absolute -right-6 bottom-10 z-20 hidden sm:block" delay={1.1}>
              <div className="px-4 py-3 bg-background/90 backdrop-blur border border-border rounded-2xl shadow-xl shadow-primary/10">
                <div className="flex items-center gap-2">
                  <Bell size={12} className="text-primary" />
                  <div>
                    <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Renewal</p>
                    <p className="text-xs font-semibold">in 4 days</p>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
