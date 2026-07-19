import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { WAITLIST_SUCCESS_MESSAGE } from "@/lib/waitlist";
import { trackWaitlistSubmit } from "@/lib/analytics";
import { z } from "zod";

const waitlistSchema = z.object({
  name: z.string().trim().min(2).max(100).regex(/^[\p{L}\p{M}'\-.\s]+$/u),
  email: z.string().trim().email().max(255),
});

const EarlyAccess = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = waitlistSchema.safeParse({ name, email });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xzddzddb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (res.ok) {
        setSubmitted(true);
        trackWaitlistSubmit("early_access_section");
        toast.success(WAITLIST_SUCCESS_MESSAGE);
        setName("");
        setEmail("");
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
    <section id="early-access" className="bg-ink text-white py-28 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 mb-6">
            + get invited
          </p>
          <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] mb-8">
            be first in line.
          </h2>
          <p className="text-white/65 text-base md:text-lg mb-12 max-w-xl mx-auto">
            Join early adopters securing their spot in India's smartest subscription tracker.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
              <CheckCircle2 size={26} className="text-primary" />
            </div>
            <p className="font-serif-display text-3xl">you're on the list.</p>
            <p className="text-sm text-white/60">We'll let you know when Saveiy launches.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 max-w-xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="full name"
                required
                autoComplete="name"
                className="w-full rounded-full bg-white/5 border border-white/15 py-4 px-5 outline-none focus:border-primary text-sm placeholder:text-white/40 text-white transition-colors"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email address"
                required
                autoComplete="email"
                className="w-full rounded-full bg-white/5 border border-white/15 py-4 px-5 outline-none focus:border-primary text-sm placeholder:text-white/40 text-white transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-primary text-white py-4 px-12 text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-ink transition-colors disabled:opacity-60"
            >
              {loading ? "requesting…" : "request invitation"}
            </button>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mt-2">
              no spam · we respect your privacy
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default EarlyAccess;
