import { motion } from "framer-motion";
import { ScanSearch, BarChart3, Sparkles, Bell, CalendarClock, XCircle } from "lucide-react";

const features = [
  { icon: ScanSearch, title: "subscription detection", desc: "auto-find every active subscription from your email and SMS." },
  { icon: BarChart3, title: "spending insights", desc: "see exactly where your money goes, every month." },
  { icon: Sparkles, title: "deal discovery", desc: "find better plans and pocket-friendly alternatives." },
  { icon: Bell, title: "smart alerts", desc: "get notified before surprise renewals hit your account." },
  { icon: CalendarClock, title: "renewal calendar", desc: "never miss a trial ending or a price hike again." },
  { icon: XCircle, title: "cancel assist", desc: "one-tap guidance to cancel unused services." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Features</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[0.95]">
            do more with <span className="text-muted-foreground">your money</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }}
              className="p-6 bg-background border border-border rounded-xl group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <f.icon size={20} className="text-primary/60 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
              <h3 className="font-display text-base font-semibold mt-4">{f.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
