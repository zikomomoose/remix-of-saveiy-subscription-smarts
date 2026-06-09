import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
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
      const fe: { name?: string; email?: string } = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as "name" | "email";
        if (k && !fe[k]) fe[k] = i.message;
      });
      setErrors(fe);
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
    <section id="early-access" className="py-28 md:py-32 bg-background border-t border-border">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-6">
            Get Invited
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-8">
            Ready for the <span className="text-primary">Future?</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-12 max-w-xl mx-auto">
            Join early adopters securing their spot in the next generation of subscription tracking.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 p-10 bg-secondary border border-border flex flex-col items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 size={26} className="text-primary" strokeWidth={1.75} />
            </div>
            <p className="font-display text-2xl font-bold tracking-tighter">You're on the list.</p>
            <p className="text-sm text-muted-foreground">
              We'll let you know when Saveiy launches.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="FULL NAME"
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full border-b-2 border-border py-5 px-2 bg-transparent focus:border-primary outline-none transition-all uppercase text-xs tracking-widest font-bold placeholder:text-muted-foreground/60"
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-[10px] uppercase tracking-widest text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="EMAIL ADDRESS"
                  required
                  maxLength={255}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full border-b-2 border-border py-5 px-2 bg-transparent focus:border-primary outline-none transition-all uppercase text-xs tracking-widest font-bold placeholder:text-muted-foreground/60"
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-[10px] uppercase tracking-widest text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-8 bg-foreground text-background py-6 md:py-7 px-12 text-xs md:text-sm font-bold uppercase tracking-[0.3em] hover:bg-primary transition-all disabled:opacity-60"
            >
              {loading ? "Requesting..." : "Request Invitation"}
            </button>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 mt-2">
              No spam · We respect your privacy
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default EarlyAccess;
