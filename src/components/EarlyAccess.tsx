import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xzddzddb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: email.trim(), phone: phone.trim() || undefined }),
      });

      if (res.ok) {
        setSubmitted(true);
        toast.success("You're on the waitlist!");
        setEmail("");
        setPhone("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="early-access" className="py-16 md:py-24 bg-secondary/50 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="max-w-md mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[0.95]">
            not everyone <span className="text-muted-foreground">gets it.</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">early access to Saveiy is limited. join the waitlist and be among the first to take control.</p>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-10 flex flex-col items-center gap-2">
              <CheckCircle2 size={28} className="text-primary" strokeWidth={1.5} />
              <p className="font-display text-xl font-semibold">you're in.</p>
              <p className="text-xs text-muted-foreground">we'll notify you when Saveiy launches.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-3">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your email" required
                className="w-full px-5 py-3.5 bg-background border border-border text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors rounded-lg" />
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="phone number (optional)"
                className="w-full px-5 py-3.5 bg-background border border-border text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors rounded-lg" />
              <button type="submit" disabled={loading}
                className="w-full px-6 py-3.5 bg-primary text-primary-foreground font-medium text-xs uppercase tracking-[0.12em] hover:bg-primary/90 transition-all rounded-lg inline-flex items-center justify-center gap-2 disabled:opacity-40 shadow-lg shadow-primary/20">
                {loading ? "joining..." : "join waitlist"}
                {!loading && <ArrowRight size={14} />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EarlyAccess;
