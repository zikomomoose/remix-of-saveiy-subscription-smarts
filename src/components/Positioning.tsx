import { motion } from "framer-motion";

const Positioning = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30 pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight"
        >
          Built for the moment you realize money left your account for
          <span className="text-gradient"> something you forgot existed.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          Most subscriptions are easy to start and difficult to track. Saveiy helps users
          regain visibility into recurring payments before they become forgotten expenses.
        </motion.p>
      </div>
    </section>
  );
};

export default Positioning;
