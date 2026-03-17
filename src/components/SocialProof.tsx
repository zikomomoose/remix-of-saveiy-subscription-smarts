import { motion } from "framer-motion";
import { TrendingUp, Shield, Star } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "₹32,000 Cr+", label: "wasted yearly on unused subscriptions in India" },
  { icon: Shield, value: "42%", label: "of people have at least one unrecognized charge" },
  { icon: Star, value: "12+", label: "average active subscriptions per person" },
];

const SocialProof = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[0.95]">
            the proof <span className="text-muted-foreground">writes itself.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 bg-card border border-border rounded-xl text-center group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <stat.icon size={20} className="mx-auto text-primary/40 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
              <p className="font-display text-3xl font-bold mt-5 text-gradient-teal">{stat.value}</p>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
