import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Lock, Eye } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Privacy First", desc: "Your financial data stays yours. We never sell or share it." },
  { icon: UserCheck, title: "Consent Driven", desc: "Every connection requires your explicit permission. Revoke anytime." },
  { icon: Lock, title: "Secure Handling", desc: "Bank-grade encryption in transit and at rest, end to end." },
  { icon: Eye, title: "Built for Clarity", desc: "Transparent insights, no dark patterns, no hidden upsells." },
];

const TrustSection = () => {
  return (
    <section id="trust" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-4">Trust & Security</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05]">
            Designed around <span className="text-gradient">your trust.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed">
            Saveiy is built on privacy-first principles. You stay in control of every
            piece of data you share.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-6 bg-background border border-border rounded-2xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center"
            >
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 mx-auto">
                <it.icon size={18} className="text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
