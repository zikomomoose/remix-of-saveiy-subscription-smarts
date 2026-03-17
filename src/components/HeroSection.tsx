import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

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
      animate={{ y: [0, -5, 0] }}
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
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-primary/3 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-5"
        >
          Know what is renewing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1] tracking-tight"
        >
          Your Subscriptions.
          <br />
          <span className="text-gradient">Finally Under Control.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto"
        >
          Saveiy detects every subscription you're paying for, uncovers ghost charges, 
          and helps you save — so your money stays where it belongs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollTo("early-access")}
            className="group px-7 py-3.5 bg-primary text-primary-foreground font-medium text-xs uppercase tracking-[0.12em] hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2.5 rounded-lg shadow-lg shadow-primary/20"
          >
            Get Early Access
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("how-it-works")}
            className="px-7 py-3.5 border border-border text-foreground font-medium text-xs uppercase tracking-[0.12em] hover:border-primary/40 hover:text-primary transition-all duration-300 rounded-lg"
          >
            See How It Works
          </button>
        </motion.div>

        {/* Dashboard mockup with floating cards */}
        <div className="relative mt-14 max-w-2xl mx-auto">
          <FloatingCard className="absolute -top-4 left-0 z-20" delay={0.5}>
            <div className="px-3.5 py-2.5 bg-background border border-border rounded-xl shadow-lg shadow-primary/10" style={{ transform: "perspective(600px) rotateY(8deg)" }}>
              <p className="text-[10px] text-muted-foreground">👻 Ghost charge</p>
              <p className="text-xs font-bold text-destructive mt-0.5">₹499/mo</p>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute -top-2 right-0 z-20" delay={0.7}>
            <div className="px-3.5 py-2.5 bg-background border border-primary/20 rounded-xl shadow-lg shadow-primary/10" style={{ transform: "perspective(600px) rotateY(-6deg)" }}>
              <p className="text-[10px] text-primary font-medium">💰 Savings</p>
              <p className="text-xs font-bold text-primary mt-0.5">₹1,890/mo</p>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute -bottom-3 left-4 z-20" delay={0.9}>
            <div className="px-3.5 py-2.5 bg-background border border-border rounded-xl shadow-lg shadow-primary/10" style={{ transform: "perspective(600px) rotateY(10deg)" }}>
              <p className="text-[10px] text-muted-foreground">🔔 Renewal alert</p>
              <p className="text-xs font-semibold mt-0.5">Netflix · Mar 28</p>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute -bottom-4 right-2 z-20" delay={1.1}>
            <div className="px-3.5 py-2.5 bg-background border border-border rounded-xl shadow-lg shadow-primary/10" style={{ transform: "perspective(600px) rotateY(-12deg)" }}>
              <p className="text-[10px] text-muted-foreground">🪤 Trial ending</p>
              <p className="text-xs font-semibold mt-0.5">Canva Pro · 2 days</p>
            </div>
          </FloatingCard>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10"
          >
            <img
              src={dashboardMockup}
              alt="Saveiy Dashboard"
              className="w-full max-w-md mx-auto drop-shadow-2xl rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
