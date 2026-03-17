import { motion } from "framer-motion";
import { Link2, Search, PiggyBank } from "lucide-react";

const steps = [
  { icon: Link2, number: "01", title: "connect.", description: "securely link your email or accounts. we read billing signals, not your personal messages." },
  { icon: Search, number: "02", title: "discover.", description: "we detect all your active subscriptions — including the ones you forgot existed." },
  { icon: PiggyBank, number: "03", title: "save.", description: "get alerts before renewals, find cheaper alternatives, and cancel what you don't need." },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">How It Works</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[0.95]">
            upgrade your life. <span className="text-muted-foreground">bit by bit.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-7 bg-card border border-border rounded-xl group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 blur-[30px] rounded-full" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon size={18} className="text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] text-primary/40 tracking-[0.2em] uppercase">{step.number}</span>
                <h3 className="font-display text-2xl font-bold mt-2">{step.title}</h3>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
