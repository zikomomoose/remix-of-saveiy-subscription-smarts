import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Alt = {
  name: string;
  price: string;
  pros: string[];
  cons?: string[];
  highlight?: boolean;
};

type AlternativeData = {
  service: string;
  category: string;
  intro: string;
  servicePrice: string;
  alternatives: Alt[];
};

const YEAR = new Date().getFullYear();

const data: Record<string, AlternativeData> = {
  "adobe-photoshop": {
    service: "Adobe Photoshop",
    category: "Creative & Design",
    intro:
      "Adobe Photoshop is the industry standard for image editing, but at ₹1,675/month (₹20,100/year) the Creative Cloud subscription is a significant recurring cost for Indian creators, students, and freelancers. Here are the best budget-friendly alternatives in India that match most professional workflows — and how Saveiy helps you switch without losing track of what you're paying for.",
    servicePrice: "₹1,675/mo",
    alternatives: [
      {
        name: "Photopea",
        price: "Free (Web)",
        pros: ["Opens .PSD files natively", "Layers, masks, smart objects", "Works in any browser, no install"],
        highlight: true,
      },
      {
        name: "GIMP",
        price: "Free (Desktop)",
        pros: ["Open-source, full image editor", "Plugin ecosystem", "Available on Windows, Mac, Linux"],
        cons: ["Steeper learning curve"],
      },
      {
        name: "Affinity Photo 2",
        price: "₹6,999 one-time",
        pros: ["One-time purchase, no subscription", "Pro-grade RAW editing", "Pay once, own forever"],
      },
      {
        name: "Krita",
        price: "Free",
        pros: ["Great for digital painting & illustration", "Made by artists, for artists"],
        cons: ["Less suited for photo retouching"],
      },
    ],
  },
  netflix: {
    service: "Netflix",
    category: "Streaming & Entertainment",
    intro:
      "Netflix Premium in India costs ₹649/month (₹7,788/year) per account. With rising OTT subscriptions, many Indian households are silently paying for 3-4 streaming services they barely use. Here are the best Netflix alternatives in India to help you cut streaming costs without cutting entertainment — and how Saveiy ensures you never forget to cancel one again.",
    servicePrice: "₹649/mo",
    alternatives: [
      {
        name: "JioHotstar",
        price: "₹149-299/mo",
        pros: ["Massive Indian & regional catalogue", "Live cricket & sports", "Bundled with Jio recharges"],
        highlight: true,
      },
      {
        name: "Amazon Prime Video",
        price: "₹299/mo or ₹1,499/yr",
        pros: ["Includes Prime delivery + Music", "Strong Indian originals", "Cheaper annual plan"],
      },
      {
        name: "MX Player",
        price: "Free (ad-supported)",
        pros: ["Free Indian web series & films", "No subscription needed", "Regional content library"],
      },
      {
        name: "YouTube + Free Trials",
        price: "Free / Premium ₹149",
        pros: ["Free creator content", "Premium removes ads & unlocks Music", "Family plan ₹89/user"],
        cons: ["Not all licensed films"],
      },
    ],
  },
};

const WaitlistBanner = ({ variant = "light" }: { variant?: "light" | "dark" }) => (
  <div
    className={
      variant === "dark"
        ? "bg-foreground text-background p-8 md:p-12 my-12 md:my-16"
        : "bg-secondary border border-border p-8 md:p-12 my-12 md:my-16"
    }
  >
    <div className="max-w-3xl mx-auto text-center">
      <p
        className={`text-[10px] font-mono uppercase tracking-widest mb-4 ${
          variant === "dark" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        Saveiy Waitlist
      </p>
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter leading-[0.95]">
        Track every renewal. <span className="text-primary">Switch when it's smarter.</span>
      </h2>
      <p className={`mt-4 text-sm md:text-base ${variant === "dark" ? "text-background/70" : "text-muted-foreground"}`}>
        Saveiy spots subscriptions like this one in your UPI &amp; bank statements and reminds
        you before they renew — so you can switch or cancel in seconds.
      </p>
      <Link
        to="/#early-access"
        className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
      >
        Join the Saveiy Waitlist <ArrowRight size={14} />
      </Link>
    </div>
  </div>
);

const AlternativesPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? data[slug] : undefined;

  if (!entry) return <Navigate to="/" replace />;

  const title = `Best Alternatives to ${entry.service} in India (${YEAR})`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Inline SEO basics */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            about: entry.service,
            inLanguage: "en-IN",
            datePublished: `${YEAR}-01-01`,
          }),
        }}
      />

      <main className="max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-16">
        <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-6">
          Alternatives / {entry.category}
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95]"
        >
          {title}
        </motion.h1>

        <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          {entry.intro}
        </p>

        <div className="mt-10 inline-flex items-center gap-4 border border-border px-5 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            Original cost
          </span>
          <span className="font-display text-2xl font-bold tracking-tighter">{entry.servicePrice}</span>
        </div>

        {/* Comparison grid */}
        <section className="mt-16">
          <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tighter mb-8">
            Top {entry.service} alternatives in India
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {entry.alternatives.map((alt) => (
              <article
                key={alt.name}
                className={`p-6 md:p-8 bg-background flex flex-col ${alt.highlight ? "ring-2 ring-primary ring-inset" : ""}`}
              >
                {alt.highlight && (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary mb-3">
                    Top pick
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold tracking-tight">{alt.name}</h3>
                <p className="mt-1 text-sm font-mono text-muted-foreground">{alt.price}</p>

                <ul className="mt-5 space-y-2 text-sm">
                  {alt.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                  {alt.cons?.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-muted-foreground">
                      <X size={16} className="mt-0.5 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <WaitlistBanner />

        {/* Saveiy helps switch */}
        <section className="mt-12">
          <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tighter">
            How Saveiy helps you switch &amp; save
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              {
                t: "Detects the subscription",
                d: `Saveiy scans your UPI, card, and bank activity to flag every active ${entry.service} payment automatically.`,
              },
              {
                t: "Reminds before renewal",
                d: "Get a clean nudge days before auto-renewal so you can decide to keep, downgrade, or cancel.",
              },
              {
                t: "Suggests cheaper alternatives",
                d: `We recommend India-ready alternatives like the ones above, with a one-tap switch guide.`,
              },
            ].map((s, i) => (
              <div key={s.t} className="bg-background p-6 md:p-8">
                <div className="font-display text-3xl font-bold text-primary tracking-tighter">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-base font-bold tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        <WaitlistBanner variant="dark" />

        <div className="mt-12 flex flex-wrap gap-4 text-xs uppercase tracking-widest font-bold">
          <Link to="/alternatives/adobe-photoshop" className="hover:text-primary">
            → Photoshop alternatives
          </Link>
          <Link to="/alternatives/netflix" className="hover:text-primary">
            → Netflix alternatives
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AlternativesPage;
