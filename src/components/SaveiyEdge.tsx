import { motion } from "framer-motion";
import { Sparkles, Gift, TrendingUp, BookOpen } from "lucide-react";

const cards = [
  {
    icon: BookOpen,
    tag: "Insight",
    title: "The hidden cost of bundles",
    desc: "Why bundled subscriptions often cost more than the services you actually use.",
  },
  {
    icon: Gift,
    tag: "Offer",
    title: "Curated rewards & deals",
    desc: "Hand-picked offers from partners on the services you already use every month.",
  },
  {
    icon: TrendingUp,
    tag: "Tip",
    title: "Smarter renewal timing",
    desc: "Switch annual vs monthly billing at the right moment and save up to 20%.",
  },
];

const SaveiyEdge = () => {
  return (
    <section id="saveiy-edge" className="py-24 md:py-32 relative overflow-hidden bg-foreground text-background">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[160px] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[140px] rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/25 mb-5">
            <Sparkles size={12} className="text-primary" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium">Saveiy Edge</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05]">
            Curated insights that <span className="text-primary">pay you back.</span>
          </h2>
          <p className="mt-5 text-base text-background/70 leading-relaxed">
            Beyond tracking — financial tips, rewards, offers, and money-saving
            opportunities curated for the way you actually spend.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-7 rounded-3xl bg-background/5 backdrop-blur border border-background/10 hover:border-primary/40 hover:bg-background/[0.07] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-2xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                  <c.icon size={18} className="text-primary" strokeWidth={1.75} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-background/50">{c.tag}</span>
              </div>
              <h3 className="font-display text-xl font-bold leading-tight">{c.title}</h3>
              <p className="mt-3 text-sm text-background/65 leading-relaxed">{c.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaveiyEdge;
