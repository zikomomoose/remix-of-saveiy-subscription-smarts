import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LandingFeatures from "@/components/LandingFeatures";
import LandingComparison from "@/components/LandingComparison";
import LandingFAQ, { landingFaqs } from "@/components/LandingFAQ";
import MidCTA from "@/components/MidCTA";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

const Index = () => {
  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Saveiy",
    description:
      "Saveiy is a Subscription Manager and Bill Tracking application that helps users track app subscriptions, monitor recurring expenses, get renewal reminders, detect hidden fees, and cancel forgotten subscriptions.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Android, iOS, Web",
    url: "https://saveiy.com/",
    inLanguage: "en-IN",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    publisher: { "@type": "Organization", name: "Corewave Innovations Pvt. Ltd." },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "126" },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landingFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-ink">
      <Helmet>
        <title>Saveiy | Smart Subscription Manager & Bill Tracking App</title>
        <meta
          name="description"
          content="Saveiy is a smart subscription manager and bill tracker. Spot hidden fees, get renewal alerts, and stop subscription creep before it charges you."
        />
        <meta
          name="keywords"
          content="subscription manager, bill tracking app, subscription tracking software, recurring expense tracker, renewal reminders, hidden fee detector, free trial tracker, fixed expense tracker, Rocket Money alternative, Monarch Money alternative, UPI autopay tracker"
        />
        <link rel="canonical" href="https://saveiy.com/" />
        <meta property="og:title" content="Saveiy | Smart Subscription Manager & Bill Tracking App" />
        <meta
          property="og:description"
          content="Track subscriptions, manage recurring bills, detect hidden fees. Privacy-first alternative to Rocket Money and Monarch Money, built for India."
        />
        <meta property="og:url" content="https://saveiy.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Saveiy | Smart Subscription Manager & Bill Tracking App" />
        <meta
          name="twitter:description"
          content="Track subscriptions, manage recurring bills, detect hidden fees. Built for India — app coming soon."
        />
        <script type="application/ld+json">{JSON.stringify(softwareApp)}</script>
        <script type="application/ld+json">{JSON.stringify(faqPage)}</script>
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <LandingFeatures />
        <LandingComparison />
        <MidCTA />
        <LandingFAQ />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
