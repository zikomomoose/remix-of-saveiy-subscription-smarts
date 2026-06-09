import { motion } from "framer-motion";
import { PieChart, ArrowDownRight, ArrowUpRight, Repeat, TrendingDown, AlertCircle } from "lucide-react";

const CoreSections = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-24 md:space-y-32">
        {/* My Spends */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-4">My Spends</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05]">
              Understand where your money <span className="text-gradient">actually goes.</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-md">
              Automatic spending intelligence and transaction categorization give you a
              clear, honest view of your financial life — without spreadsheets.
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              {["Auto-categorized transactions", "Monthly spend breakdowns", "Trend insights across categories"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-background rounded-3xl border border-border p-6 shadow-2xl shadow-primary/10">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Spend overview</p>
                  <p className="font-display text-3xl font-bold mt-1">₹14,820</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <PieChart size={20} className="text-primary" />
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { cat: "Subscriptions", amt: "₹2,387", pct: 32, color: "bg-primary" },
                  { cat: "Food & Dining", amt: "₹4,210", pct: 56, color: "bg-primary/70" },
                  { cat: "Transport", amt: "₹1,890", pct: 25, color: "bg-primary/50" },
                  { cat: "Shopping", amt: "₹6,333", pct: 85, color: "bg-primary/40" },
                ].map((c) => (
                  <div key={c.cat}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-foreground/80">{c.cat}</span>
                      <span className="font-semibold">{c.amt}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${c.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full ${c.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">vs. last month</span>
                <span className="inline-flex items-center gap-1 text-primary font-semibold">
                  <ArrowDownRight size={12} /> 12.4%
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Save More */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:order-1 order-2"
          >
            <div className="bg-background rounded-3xl border border-border p-6 shadow-2xl shadow-primary/10">
              <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-4">Savings opportunities</p>
              <div className="space-y-3">
                {[
                  { icon: Repeat, title: "Duplicate music streaming", desc: "Spotify + YouTube Music", save: "₹119" },
                  { icon: AlertCircle, title: "Forgotten free trial", desc: "Canva Pro · trial ended", save: "₹499" },
                  { icon: TrendingDown, title: "Unused for 60+ days", desc: "Audible · last opened June", save: "₹199" },
                ].map((s) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-muted/40 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all"
                  >
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <s.icon size={15} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate">{s.title}</p>
                      <p className="text-[10px] text-muted-foreground truncate">{s.desc}</p>
                    </div>
                    <span className="text-xs font-bold text-primary shrink-0">save {s.save}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 p-3.5 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-between">
                <span className="text-xs font-medium">Potential monthly savings</span>
                <span className="font-display font-bold text-lg text-primary">₹1,150</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:order-2 order-1"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-4">Save More</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05]">
              Find the leaks. <span className="text-gradient">Plug them quietly.</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-md">
              Identify subscriptions, recurring payments, duplicate services, and
              opportunities to reduce monthly expenses — all in one place.
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              {["Recurring payment detection", "Duplicate service alerts", "Smart cancellation guidance"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreSections;
