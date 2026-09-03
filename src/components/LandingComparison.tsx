import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Automatic subscription discovery", saveiy: true, manual: false },
  { feature: "UPI AutoPay mandate detection", saveiy: true, manual: false },
  { feature: "Renewal reminders & bill due date alerts", saveiy: true, manual: false },
  { feature: "Multi-currency recurring payment tracking", saveiy: true, manual: false },
  { feature: "Cheaper Indian alternatives suggested", saveiy: true, manual: false },
  { feature: "Stays up to date without manual entry", saveiy: true, manual: false },
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
            Why Saveiy is the Better Than <em className="italic">Manual Trackers</em>.
          </h2>
          <p className="mt-6 text-base md:text-lg opacity-75 leading-relaxed">
            Most people still track renewals in spreadsheets, notes apps or calendar reminders.
            Saveiy is a subscription manager app for India that keeps itself updated across UPI
            AutoPay, cards and net-banking — and stays compliant with the DPDP Act 2023.
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
                <th className="py-4 px-5 md:px-8 font-semibold text-center opacity-70">Manual trackers &amp; spreadsheets</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.feature} className={i % 2 ? "bg-black/[0.02]" : ""}>
                  <td className="py-4 px-5 md:px-8">{r.feature}</td>
                  <td className="py-4 px-5 md:px-8 text-center bg-primary/5"><Cell ok={r.saveiy} /></td>
                  <td className="py-4 px-5 md:px-8 text-center"><Cell ok={r.manual} /></td>
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
