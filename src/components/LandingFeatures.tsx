import { motion } from "framer-motion";
import { Layers, CalendarClock, LineChart } from "lucide-react";

const features = [
  {
    icon: <Layers size={22} />,
    eyebrow: "01 / subscriptions",
    title: "Subscription Tracking Software",
    body: "Track digital subscriptions across streaming, SaaS, and software platforms with automatic subscription detection and multi-currency tracking.",
  },
  {
    icon: <CalendarClock size={22} />,
    eyebrow: "02 / bills & alerts",
    title: "Smart Bill Tracking App",
    body: "Track recurring bills and utilities on a clear billing cycle calendar view. Get customized renewal reminders and bill due date alerts before a free trial ends.",
  },
  {
    icon: <LineChart size={22} />,
    eyebrow: "03 / analytics",
    title: "Hidden Fee Detector & Analytics",
    body: "Access a rich subscription analytics dashboard to detect price hikes, identify forgotten recurring charges, and optimize your fixed expense budget.",
  },
];

const LandingFeatures = () => {
  return (
    <section id="features" className="bg-ink text-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">
            + what saveiy does
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
            Everything you need to stop <span className="text-primary">subscription creep</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-primary">{f.icon}</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                  {f.eyebrow}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl leading-tight">{f.title}</h3>
              <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">{f.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;
