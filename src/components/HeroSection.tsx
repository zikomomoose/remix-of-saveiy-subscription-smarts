import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { WAITLIST_SUCCESS_MESSAGE } from "@/lib/waitlist";

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

const tickerItems = [
  "MARKET SIGNALS",
  "AUTO-RENEWALS",
  "HIDDEN LEAKS",
  "SMART ALTERNATIVES",
  "BILL TRACKING",
  "UPI INSIGHTS",
];

const cards = [
  {
    n: "01",
    t: "AI Detects Hidden Subscriptions",
    d: "Saveiy analyses your UPI, cards & bank statements to flag every recurring charge — even the ones you forgot.",
  },
  {
    n: "02",
    t: "Predict What's Renewing Next",
    d: "Get alerts days before auto-renewal. Pause, cancel, or downgrade before the money leaves your account.",
  },
  {
    n: "03",
    t: "Switch To Smarter Alternatives",
    d: "We surface cheaper Indian alternatives for your most-used apps so you keep the value, lose the cost.",
  },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -60]);
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 40]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const submit = async (e: React.FormEvent) => {
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
    <section
      ref={sectionRef}
      id="top"
      className="relative pt-28 md:pt-32 pb-20 overflow-hidden bg-background"
    >
      {/* Massive background headline (H1 for SEO, visually huge) */}
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.h1
          style={{ y: bgY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-center font-bold tracking-tighter leading-[0.85] text-foreground select-none
                     text-[16vw] md:text-[12vw] lg:text-[10.5vw]"
        >
          <span className="block">Smart Subscription</span>
          <span className="block">Manager &amp; Bill</span>
          <span className="block">
            Tracker for <span className="text-primary">India</span>
          </span>
        </motion.h1>

        {/* Phone — overlaps the headline */}
        <motion.div
          style={{ y: phoneY }}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[18%] md:top-[15%]
                     w-[55vw] max-w-[260px] md:max-w-[300px] aspect-[9/19]
                     rounded-[2.4rem] border-[8px] border-foreground bg-foreground shadow-2xl z-10"
        >
          <div
            className="w-full h-full rounded-[1.7rem] overflow-hidden flex flex-col items-center justify-between p-4 md:p-5"
            style={{ background: "hsl(var(--primary))" }}
          >
            <div className="w-full flex justify-between text-[8px] font-mono uppercase tracking-widest text-primary-foreground/80">
              <span>9:41</span>
              <span>SAVEIY</span>
            </div>
            <div className="text-center">
              <div className="font-display font-bold leading-[0.85] tracking-tighter text-primary-foreground text-[14vw] md:text-[5.5rem]">
                ₹1,990
              </div>
              <div className="mt-2 text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-primary-foreground/80">
                Renewing this month
              </div>
            </div>
            <button className="w-full bg-foreground text-background py-3 text-[10px] font-bold uppercase tracking-widest rounded-sm pointer-events-auto">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <div className="relative mt-10 md:mt-14 border-y border-border bg-secondary/40 overflow-hidden">
        <motion.div
          aria-hidden
          animate={reduce ? {} : { x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap py-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="px-6 flex items-center gap-6">
              <span className="text-primary">+</span> ( {t} )
            </span>
          ))}
        </motion.div>
      </div>

      {/* Subheadline + Waitlist input */}
      <div className="relative max-w-3xl mx-auto px-6 md:px-12 mt-16 md:mt-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-base md:text-xl text-muted-foreground leading-relaxed"
        >
          Stop losing money to forgotten auto-renewals. Saveiy tracks your digital
          subscriptions, uncovers hidden spending leakage, and suggests smarter alternatives.
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 p-8 bg-secondary border border-border flex flex-col items-center gap-3"
          >
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 size={24} className="text-primary" />
            </div>
            <p className="font-display text-xl font-bold tracking-tight">You're on the list.</p>
            <p className="text-sm text-muted-foreground">
              We'll let you know when Saveiy launches.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={submit}
            noValidate
            className="mt-10 max-w-xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-2 p-2 border-2 border-foreground bg-background">
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
                className="flex-1 px-3 py-3 bg-transparent outline-none text-sm font-medium placeholder:text-muted-foreground/70"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                maxLength={255}
                autoComplete="email"
                aria-invalid={!!errors.email}
                className="flex-1 px-3 py-3 bg-transparent outline-none text-sm font-medium placeholder:text-muted-foreground/70 border-t sm:border-t-0 sm:border-l border-border"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors disabled:opacity-60"
              >
                {loading ? "Joining..." : "Join Waitlist"}
                <ArrowRight size={14} />
              </button>
            </div>
            {(errors.name || errors.email) && (
              <p className="mt-3 text-[11px] uppercase tracking-widest text-destructive">
                {errors.name || errors.email}
              </p>
            )}
            <p className="mt-4 text-[10px] uppercase tracking-widest text-muted-foreground/70">
              Privacy first · Consent driven · Made in India
            </p>
          </motion.form>
        )}
      </div>

      {/* 01 / 02 / 03 cards */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 mt-24 md:mt-32 grid md:grid-cols-3 gap-px bg-border">
        {cards.map((c, i) => (
          <motion.div
            key={c.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-background p-8 md:p-10"
          >
            <div className="font-display text-5xl md:text-6xl font-bold tracking-tighter">{c.n}</div>
            <h3 className="mt-8 text-lg md:text-xl font-bold tracking-tight">{c.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
