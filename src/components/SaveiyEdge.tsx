import { motion } from "framer-motion";

const edges = [
  { n: "01", title: "precision alerts", body: "Instant pings the moment a subscription changes its pricing or auto-renews." },
  { n: "02", title: "leak shield", body: "Identify phantom charges from services you haven't opened in over 30 days." },
  { n: "03", title: "spend score", body: "A weekly score that tells you if your subscriptions are pulling their weight." },
];

const SaveiyEdge = () => {
  return (
    <section id="saveiy-edge" className="relative bg-cream text-cream-ink py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-60 mb-6">
            + the edge
          </p>
          <h2 className="font-serif-display text-6xl md:text-8xl lg:text-9xl leading-[0.92]">
            feel <em className="italic">in control</em><br />
            more often.
          </h2>
          <p className="mt-8 text-base md:text-lg opacity-70 max-w-xl leading-relaxed">
            Most apps tell you what you've spent. Saveiy tells you what you're about to spend —
            and gives you a calm, single-tap way to stop it.
          </p>
        </motion.div>

        <div className="mt-20 md:mt-28 grid md:grid-cols-3 gap-12 md:gap-6 border-t border-black/15 pt-12">
          {edges.map((e, i) => (
            <motion.div
              key={e.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="md:px-2"
            >
              <div className="font-serif-display text-5xl opacity-50">{e.n}</div>
              <h3 className="font-serif-display text-3xl md:text-4xl mt-6">{e.title}</h3>
              <p className="mt-4 text-sm md:text-base opacity-70 leading-relaxed max-w-sm">
                {e.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaveiyEdge;
