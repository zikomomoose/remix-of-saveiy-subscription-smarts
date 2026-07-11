import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Privacy-first, read-only access", saveiy: true, rocket: false, monarch: false },
  { feature: "UPI AutoPay mandate detection", saveiy: true, rocket: false, monarch: false },
  { feature: "Multi-currency subscription tracking", saveiy: true, rocket: false, monarch: true },
  { feature: "Renewal reminders & bill due date alerts", saveiy: true, rocket: true, monarch: true },
  { feature: "Cheaper Indian alternatives suggested", saveiy: true, rocket: false, monarch: false },
  { feature: "No card credentials stored", saveiy: true, rocket: false, monarch: false },
];

const Cell = ({ ok }: { ok: boolean }) =>
  ok ? (
    <Check size={16} className="text-primary inline" />
  ) : (
    <X size={16} className="text-white/25 inline" />
  );

const LandingComparison = () => {
  return (
    <section id="compare" className="bg-cream text-cream-ink py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-60 mb-5">
            + the comparison
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
            Why Saveiy is the Best Alternative to <em className="italic">Traditional Trackers</em>.
          </h2>
          <p className="mt-6 text-base md:text-lg opacity-75 leading-relaxed">
            A privacy-first alternative to Rocket Money and Monarch Money that allows you to track
            subscriptions seamlessly — built for Indian payment rails (UPI, cards, net-banking) and
            compliant with the DPDP Act 2023.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 overflow-x-auto rounded-2xl border border-black/10 bg-white"
        >
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-ink text-white">
              <tr>
                <th className="py-4 px-5 md:px-8 font-semibold">Feature</th>
                <th className="py-4 px-5 md:px-8 font-semibold text-center">Saveiy</th>
                <th className="py-4 px-5 md:px-8 font-semibold text-center opacity-70">Rocket Money</th>
                <th className="py-4 px-5 md:px-8 font-semibold text-center opacity-70">Monarch Money</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.feature} className={i % 2 ? "bg-black/[0.02]" : ""}>
                  <td className="py-4 px-5 md:px-8">{r.feature}</td>
                  <td className="py-4 px-5 md:px-8 text-center bg-primary/5"><Cell ok={r.saveiy} /></td>
                  <td className="py-4 px-5 md:px-8 text-center"><Cell ok={r.rocket} /></td>
                  <td className="py-4 px-5 md:px-8 text-center"><Cell ok={r.monarch} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingComparison;
