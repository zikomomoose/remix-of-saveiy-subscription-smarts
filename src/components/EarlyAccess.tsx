import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { WAITLIST_SUCCESS_MESSAGE } from "@/lib/waitlist";
import { z } from "zod";

const waitlistSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name (min 2 chars)." })
    .max(100, { message: "Name must be under 100 characters." })
    .regex(/^[\p{L}\p{M}'\-.\s]+$/u, { message: "Name contains invalid characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email must be under 255 characters." }),
});

const EarlyAccess = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = waitlistSchema.safeParse({ name, email });
    if (!parsed.success) {
      const fieldErrors: { name?: string; email?: string } = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as "name" | "email";
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      toast.error(parsed.error.issues[0].message);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xzddzddb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (res.ok) {
        setSubmitted(true);
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
    <section id="early-access" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-4">Early Access</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05]">
            Be first in line when <span className="text-gradient">Saveiy launches.</span>
          </h2>
          <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
            Join our waitlist and we'll personally notify you the moment Saveiy is ready.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-10 p-8 bg-background border border-primary/20 rounded-2xl shadow-xl shadow-primary/10 flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 size={24} className="text-primary" strokeWidth={1.75} />
              </div>
              <p className="font-display text-2xl font-bold">You're on the list.</p>
              <p className="text-sm text-muted-foreground">
                We'll let you know when Saveiy launches.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-3 max-w-md mx-auto">
              <div className="text-left">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full px-5 py-4 bg-background border border-border text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all rounded-xl"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-destructive px-1">{errors.name}</p>
                )}
              </div>
              <div className="text-left">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  maxLength={255}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full px-5 py-4 bg-background border border-border text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all rounded-xl"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-destructive px-1">{errors.email}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 bg-primary text-primary-foreground font-medium text-xs uppercase tracking-[0.14em] hover:bg-primary/90 transition-all rounded-xl inline-flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-primary/25 hover:shadow-primary/35 hover:-translate-y-0.5"
              >
                {loading ? "Joining..." : "Join Waitlist"}
                {!loading && <ArrowRight size={14} />}
              </button>
              <p className="text-[11px] text-muted-foreground/70 mt-3">
                No spam. We respect your privacy.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EarlyAccess;
