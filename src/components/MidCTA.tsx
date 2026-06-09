import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MidCTA = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-28 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]"
        >
          Ready to stop the leaks in <span className="text-primary">your bank account?</span>
        </motion.h3>
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onClick={() => scrollTo("early-access")}
          className="group mt-10 inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-xl"
        >
          Secure Early Access
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
};

export default MidCTA;
