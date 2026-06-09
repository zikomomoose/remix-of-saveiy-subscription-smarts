import { motion } from "framer-motion";

const edges = [
  {
    n: "1",
    title: "Precision Alerts",
    body: "Instant notifications the moment a subscription changes its pricing or renews.",
  },
  {
    n: "2",
    title: "Leak Shield",
    body: "Identify phantom charges from services you haven't opened in over 30 days.",
  },
  {
    n: "3",
    title: "Spend Score",
    body: "A dynamic rating based on your subscription-to-income efficiency ratio.",
  },
];

const SaveiyEdge = () => {
  return (
    <section id="saveiy-edge" className="bg-foreground text-background py-28 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="text-primary text-[10px] font-mono tracking-widest uppercase block mb-6">
              Premium Access
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
              THE EDGE <br />
              OF WEALTH.
            </h2>
          </motion.div>
          <div className="hidden md:block">
            <div className="font-display text-[120px] font-bold leading-none text-background/5 tracking-tighter select-none">
              02
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-background/10 pt-12">
          {edges.map((e, i) => (
            <motion.div
              key={e.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="space-y-4"
            >
              <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center text-primary text-xs font-mono">
                {e.n}
              </div>
              <h4 className="font-display text-xl font-bold tracking-tight">{e.title}</h4>
              <p className="text-background/50 text-sm leading-relaxed">{e.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaveiyEdge;
