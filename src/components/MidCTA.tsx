import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MidCTA = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="p-10 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-background to-primary/5 border border-primary/15 shadow-xl shadow-primary/5"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-medium mb-4">Limited Early Access</p>
          <h3 className="font-display text-2xl md:text-4xl font-bold leading-[1.1]">
            Ready to take back control of <span className="text-gradient">every rupee?</span>
          </h3>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
            Join the waitlist today and be among the first to experience Saveiy when we launch.
          </p>
          <button
            onClick={() => scrollTo("early-access")}
            className="mt-7 group px-7 py-3.5 bg-primary text-primary-foreground font-medium text-xs uppercase tracking-[0.14em] hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2.5 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/35 hover:-translate-y-0.5"
          >
            Join Waitlist
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MidCTA;
