import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, X, TrendingDown, IndianRupee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Alt = {
  name: string;
  price: string;
  monthlyINR: number; // estimated monthly cost in INR for savings math
  pros: string[];
  cons?: string[];
  highlight?: boolean;
};

type AlternativeData = {
  service: string;
  category: string;
  intro: string;
  servicePrice: string;
  serviceMonthlyINR: number;
  alternatives: Alt[];
};

const YEAR = new Date().getFullYear();

const data: Record<string, AlternativeData> = {
  "adobe-photoshop": {
    service: "Adobe Photoshop",
    category: "Creative & Design",
    serviceMonthlyINR: 1675,
    intro:
      "Adobe Photoshop is the industry standard for image editing, but at ₹1,675/month (₹20,100/year) the Creative Cloud subscription is a significant recurring cost for Indian creators, students, and freelancers. Here are the best budget-friendly alternatives in India that match most professional workflows — and how Saveiy helps you switch without losing track of what you're paying for.",
    servicePrice: "₹1,675/mo",
    alternatives: [
      {
        name: "Photopea",
        price: "Free (Web)",
        monthlyINR: 0,
        pros: ["Opens .PSD files natively", "Layers, masks, smart objects", "Works in any browser, no install"],
        cons: ["Ad-supported free tier"],
        highlight: true,
      },
      {
        name: "GIMP",
        price: "Free (Desktop)",
        monthlyINR: 0,
        pros: ["Open-source, full image editor", "Plugin ecosystem", "Available on Windows, Mac, Linux"],
        cons: ["Steeper learning curve"],
      },
      {
        name: "Affinity Photo 2",
        price: "₹6,999 one-time",
        monthlyINR: 58, // ₹6,999 / 120 months
        pros: ["One-time purchase, no subscription", "Pro-grade RAW editing", "Pay once, own forever"],
        cons: ["Higher upfront cost"],
      },
      {
        name: "Krita",
        price: "Free",
        monthlyINR: 0,
        pros: ["Great for digital painting & illustration", "Made by artists, for artists"],
        cons: ["Less suited for photo retouching"],
      },
    ],
  },
  netflix: {
    service: "Netflix",
    category: "Streaming & Entertainment",
    serviceMonthlyINR: 649,
    intro:
      "Netflix Premium in India costs ₹649/month (₹7,788/year) per account. With rising OTT subscriptions, many Indian households are silently paying for 3-4 streaming services they barely use. Here are the best Netflix alternatives in India to help you cut streaming costs without cutting entertainment — and how Saveiy ensures you never forget to cancel one again.",
    servicePrice: "₹649/mo",
    alternatives: [
      {
        name: "JioHotstar",
        price: "₹149-299/mo",
        monthlyINR: 224,
        pros: ["Massive Indian & regional catalogue", "Live cricket & sports", "Bundled with Jio recharges"],
        cons: ["Ads on lower tiers"],
        highlight: true,
      },
      {
        name: "Amazon Prime Video",
        price: "₹299/mo or ₹1,499/yr",
        monthlyINR: 125,
        pros: ["Includes Prime delivery + Music", "Strong Indian originals", "Cheaper annual plan"],
        cons: ["Smaller global library"],
      },
      {
        name: "MX Player",
        price: "Free (ad-supported)",
        monthlyINR: 0,
        pros: ["Free Indian web series & films", "No subscription needed", "Regional content library"],
        cons: ["Ads throughout playback"],
      },
      {
        name: "YouTube + Premium",
        price: "Free / ₹149",
        monthlyINR: 149,
        pros: ["Free creator content", "Premium removes ads & unlocks Music", "Family plan ₹89/user"],
        cons: ["Not all licensed films"],
      },
    ],
  },
};

const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

const AppBanner = ({ variant = "light" }: { variant?: "light" | "dark" }) => (
  <div
    id={variant === "dark" ? "get-app-bottom" : "get-app-mid"}
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
        Saveiy · live on android
      </p>
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter leading-[0.95]">
        Track every renewal. <span className="text-primary">Switch when it's smarter.</span>
      </h2>
      <p className={`mt-4 text-sm md:text-base ${variant === "dark" ? "text-background/70" : "text-muted-foreground"}`}>
        Saveiy spots subscriptions like this one in your UPI &amp; bank statements and reminds
        you before they renew — so you can switch or cancel in seconds.
      </p>
      <DownloadCTA
        location={`alternatives_${variant}`}
        tone={variant === "dark" ? "dark" : "light"}
        className="mt-8"
      />
    </div>
  </div>
);


const AlternativesPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? data[slug] : undefined;

  if (!entry) return <Navigate to="/" replace />;

  const title = `Best Alternatives to ${entry.service} in India (${YEAR})`;
  const description = `Cheaper ${entry.service} alternatives for Indian users. Compare pricing, pros & cons, and yearly savings — plus how Saveiy tracks renewals automatically.`;
  const canonical = `https://saveiy.com/alternatives/${slug}`;

  const topPick = entry.alternatives.find((a) => a.highlight) ?? entry.alternatives[0];
  const monthlySavings = Math.max(entry.serviceMonthlyINR - topPick.monthlyINR, 0);
  const yearlySavings = monthlySavings * 12;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          about: entry.service,
          inLanguage: "en-IN",
          datePublished: `${YEAR}-01-01`,
          author: { "@type": "Organization", name: "Saveiy" },
          publisher: {
            "@type": "Organization",
            name: "Saveiy",
            logo: { "@type": "ImageObject", url: "https://saveiy.com/favicon.ico" },
          },
          mainEntityOfPage: canonical,
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://saveiy.com/" },
            { "@type": "ListItem", position: 2, name: "Alternatives", item: "https://saveiy.com/alternatives/netflix" },
            { "@type": "ListItem", position: 3, name: entry.service, item: canonical },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: title,
          itemListElement: entry.alternatives.map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: a.name,
          })),
        })}</script>
      </Helmet>

      <Navbar />

      <main className="max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-16">
        <nav aria-label="Breadcrumb" className="text-[10px] font-mono uppercase tracking-widest text-primary mb-6">
          <Link to="/" className="hover:underline">Home</Link> / Alternatives / {entry.category}
        </nav>

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

        {/* Savings summary */}
        <div className="mt-10 grid sm:grid-cols-3 gap-px bg-border border border-border">
          <div className="bg-background p-5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">You pay now</p>
            <p className="font-display text-3xl font-bold tracking-tighter mt-2">{entry.servicePrice}</p>
            <p className="text-xs text-muted-foreground mt-1">{formatINR(entry.serviceMonthlyINR * 12)}/year</p>
          </div>
          <div className="bg-background p-5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Top alternative</p>
            <p className="font-display text-3xl font-bold tracking-tighter mt-2">{topPick.name}</p>
            <p className="text-xs text-muted-foreground mt-1">{topPick.price}</p>
          </div>
          <div className="bg-primary/10 p-5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-primary flex items-center gap-1">
              <TrendingDown size={12} /> You could save
            </p>
            <p className="font-display text-3xl font-bold tracking-tighter mt-2 text-primary flex items-center">
              <IndianRupee size={22} className="mt-1" />{yearlySavings.toLocaleString("en-IN")}
            </p>
            <p className="text-xs text-muted-foreground mt-1">per year by switching</p>
          </div>
        </div>

        {/* Comparison grid */}
        <section className="mt-16">
          <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tighter mb-8">
            Top {entry.service} alternatives in India
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {entry.alternatives.map((alt) => {
              const altYearly = alt.monthlyINR * 12;
              const saves = Math.max(entry.serviceMonthlyINR * 12 - altYearly, 0);
              return (
                <article
                  key={alt.name}
                  className={`p-6 md:p-8 bg-background flex flex-col ${alt.highlight ? "ring-2 ring-primary ring-inset" : ""}`}
                >
                  {alt.highlight && (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary mb-3">
                      ★ Top pick
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-bold tracking-tight">{alt.name}</h3>
                  <p className="mt-1 text-sm font-mono text-muted-foreground">{alt.price}</p>

                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-2">Pros</p>
                      <ul className="space-y-1.5 text-xs">
                        {alt.pros.map((p) => (
                          <li key={p} className="flex items-start gap-1.5">
                            <Check size={13} className="text-primary mt-0.5 shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">Cons</p>
                      <ul className="space-y-1.5 text-xs text-muted-foreground">
                        {(alt.cons ?? ["—"]).map((c) => (
                          <li key={c} className="flex items-start gap-1.5">
                            <X size={13} className="mt-0.5 shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      Yearly savings
                    </span>
                    <span className="font-display text-lg font-bold tracking-tighter text-primary">
                      {saves > 0 ? formatINR(saves) : "—"}
                    </span>
                  </div>
                </article>
              );
            })}
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
