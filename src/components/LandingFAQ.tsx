import { motion } from "framer-motion";

export const landingFaqs = [
  {
    q: "How can I find forgotten recurring charges and stop subscription creep?",
    a: "Saveiy acts as a comprehensive subscription tracking software that maps out your digital outgoings, making it easy to identify hidden fees, track app subscriptions, and remove services you no longer use.",
  },
  {
    q: "Can I use Saveiy as a utility bill tracking app with renewal reminders?",
    a: "Yes, Saveiy functions as a complete fixed expense tracker. It sends you automated renewal reminders, bill due date alerts, and provides a clear calendar view for all your recurring bills.",
  },
  {
    q: "How does the app remind me before a free trial ends?",
    a: "Our smart alerts monitor your billing cycle countdown. You will get a notification days before any trial expires, making it the ultimate free trial tracker to protect your wallet.",
  },
];

const LandingFAQ = () => {
  return (
    <section id="faq" className="bg-ink text-white py-24 md:py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">
            + frequently asked
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
            Questions, <em className="italic text-primary">answered.</em>
          </h2>
        </motion.div>

        <div className="space-y-10 md:space-y-12">
          {landingFaqs.map((f, i) => (
            <motion.article
              key={f.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="border-b border-white/10 pb-8 md:pb-10 last:border-b-0"
            >
              <h3 className="font-display text-xl md:text-2xl leading-snug text-white">
                {f.q}
              </h3>
              <p className="mt-4 text-base md:text-lg text-white/75 leading-relaxed">
                {f.a}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingFAQ;
