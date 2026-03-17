import { motion } from "framer-motion";

const problems = [
  { number: "01", title: "ghost subscriptions.", desc: "money silently leaving your account for services you don't recognize. 42% of people have at least one charge they can't identify." },
  { number: "02", title: "free trial traps.", desc: "signed up for a 7-day trial and forgot? you're not alone — 48% of users forget to cancel before being charged." },
  { number: "03", title: "cancellation mazes.", desc: "dark patterns, hidden settings, phone-only cancellations — companies make it deliberately hard to leave." },
  { number: "04", title: "silent renewals.", desc: "auto-renewals at higher prices, with no reminder. the average Indian household loses ₹6,000+/year on forgotten subscriptions." },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[0.95]">
            not everyone <span className="text-muted-foreground">sees the leak.</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Indians waste over ₹32,000 crore/year on unused subscriptions. the system is designed to keep you paying.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <motion.div key={p.number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-6 bg-background border border-border rounded-xl group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <span className="text-[10px] text-primary/50 tracking-[0.2em] uppercase">{p.number}</span>
              <h3 className="font-display text-lg font-bold mt-3 leading-tight group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
