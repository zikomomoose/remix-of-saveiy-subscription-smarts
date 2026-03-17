import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const alternatives = [
  { from: "Adobe Photoshop", fromPrice: "₹4,230/mo", to: "Photopea", toPrice: "Free", save: "₹4,230" },
  { from: "Netflix Premium", fromPrice: "₹649/mo", to: "MX Player", toPrice: "Free", save: "₹649" },
  { from: "Notion", fromPrice: "₹650/mo", to: "Obsidian", toPrice: "Free", save: "₹650" },
  { from: "Spotify Premium", fromPrice: "₹119/mo", to: "YouTube Music", toPrice: "₹99/mo", save: "₹20" },
];

const AlternativesSection = () => {
  return (
    <section id="alternatives" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Smart Alternatives</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[0.95]">
            same tools. <span className="text-muted-foreground">better prices.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {alternatives.map((alt, i) => (
            <motion.div key={alt.from} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-6 bg-card border border-border rounded-xl group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <p className="text-sm font-medium">{alt.from}</p>
                  <p className="text-[10px] text-muted-foreground mt-1">{alt.fromPrice}</p>
                </div>
                <ArrowRight size={14} className="text-primary/40 shrink-0" />
                <div className="flex-1 text-right">
                  <p className="text-sm font-medium text-primary">{alt.to}</p>
                  <p className="text-[10px] text-muted-foreground mt-1">{alt.toPrice}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">save <span className="text-primary font-semibold">{alt.save}/mo</span></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlternativesSection;
