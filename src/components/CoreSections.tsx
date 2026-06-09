import { motion } from "framer-motion";
import CountUp from "./CountUp";

const CoreSections = () => {
  return (
    <section id="features" className="grid md:grid-cols-2 border-y border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="p-10 md:p-20 border-b md:border-b-0 md:border-r border-border"
      >
        <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-6">My Spends</h3>
        <p className="text-muted-foreground mb-10 max-w-md">
          A brutalist overview of where your money flows. No clutter — just raw transactions
          turned into actionable insights.
        </p>
        <div className="h-64 bg-secondary border border-border p-8">
          <div className="w-full h-full border-b-2 border-l-2 border-border relative flex items-end gap-2">
            <div className="w-full bg-primary/20 h-1/2" />
            <div className="w-full bg-primary/40 h-3/4" />
            <div className="w-full bg-primary h-1/2" />
            <div className="w-full bg-primary/60 h-full" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="p-10 md:p-20"
      >
        <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-6">Save More</h3>
        <p className="text-muted-foreground mb-10 max-w-md">
          Smart detection of duplicates, forgotten trials, and price changes — before they hit your statement.
        </p>
        <div className="bg-primary text-primary-foreground p-12 flex flex-col justify-center items-center text-center">
          <div className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-70">
            Potential Savings
          </div>
          <div className="font-display text-6xl md:text-7xl font-bold tracking-tighter">
            <CountUp end={12} prefix="₹" suffix="k+" />
          </div>
          <div className="mt-4 text-[10px] uppercase tracking-widest font-bold">Annual Average</div>
        </div>
      </motion.div>
    </section>
  );
};

export default CoreSections;
