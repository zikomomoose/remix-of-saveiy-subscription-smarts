import { motion } from "framer-motion";

const subscriptions = [
  { name: "Netflix", amount: "₹649", renewal: "Mar 28", status: "active" as const },
  { name: "Spotify", amount: "₹119", renewal: "Apr 2", status: "active" as const },
  { name: "YouTube Premium", amount: "₹149", renewal: "Mar 22", status: "active" as const },
  { name: "Adobe CC", amount: "₹4,230", renewal: "Apr 15", status: "warning" as const },
  { name: "ChatGPT Plus", amount: "₹1,650", renewal: "Mar 30", status: "active" as const },
];

const ProductPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Dashboard Preview</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[0.95]">
            all that you deserve. <span className="text-muted-foreground">and more.</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto border border-border bg-background rounded-2xl overflow-hidden shadow-xl shadow-primary/5"
        >
          <div className="p-5 border-b border-border grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "monthly spend", value: "₹6,797" },
              { label: "active services", value: "12" },
              { label: "renewals soon", value: "5" },
              { label: "potential savings", value: "₹1,890", highlight: true },
            ].map((stat) => (
              <div key={stat.label} className={`p-3.5 rounded-lg ${stat.highlight ? 'bg-primary/5 border border-primary/15' : 'bg-muted/50'}`}>
                <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{stat.label}</p>
                <p className={`text-lg font-display font-bold mt-1 ${stat.highlight ? "text-primary" : ""}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="p-5">
            <p className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-[0.12em] mb-3">Active Subscriptions</p>
            <div className="space-y-1">
              {subscriptions.map((sub, i) => (
                <motion.div key={sub.name} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/40 transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium">{sub.name}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">renews {sub.renewal}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{sub.amount}</p>
                    <span className={`text-[10px] ${sub.status === "warning" ? "text-destructive" : "text-primary/60"}`}>
                      {sub.status === "warning" ? "high cost" : "active"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPreview;
