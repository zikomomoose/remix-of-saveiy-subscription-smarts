import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LandingFeatures from "@/components/LandingFeatures";
import LandingComparison from "@/components/LandingComparison";
import LandingFAQ, { landingFaqs } from "@/components/LandingFAQ";
import MidCTA from "@/components/MidCTA";
import TeamSection from "@/components/TeamSection";
import GetTheApp from "@/components/GetTheApp";
import Footer from "@/components/Footer";
import { PLAY_STORE_URL } from "@/lib/app-links";

const Index = () => {
  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Saveiy",
    alternateName: "Saveiy — Subscription Manager & Recurring Payment Tracker",
    description:
      "Saveiy is a subscription manager app for India that tracks recurring payments, UPI AutoPay mandates and bill renewals in one place.",
    url: "https://saveiy.com/",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Android",
    installUrl: PLAY_STORE_URL,
    downloadUrl: PLAY_STORE_URL,
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    inLanguage: "en-IN",
    countriesSupported: "IN",
    publisher: {
      "@type": "Organization",
      name: "Corewave Innovations Pvt. Ltd.",
      url: "https://saveiy.com/",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Corewave Innovations Pvt. Ltd.",
    url: "https://saveiy.com/",
    logo: "https://saveiy.com/favicon.ico",
    brand: { "@type": "Brand", name: "Saveiy" },
    address: { "@type": "PostalAddress", addressCountry: "IN" },
    email: "support@saveiy.com",
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
        <title>Subscription Manager App India | Saveiy Recurring Payments</title>
        <meta
          name="description"
          content="Saveiy is a subscription manager app for India — track recurring payments, UPI AutoPay mandates and bill renewals in one place. Free on Google Play."
        />
        <meta
          name="keywords"
          content="subscription manager app India, recurring payment app, subscription tracker India, UPI AutoPay tracker, bill tracking app, recurring expense tracker, renewal reminders, free trial tracker"
        />
        <link rel="canonical" href="https://saveiy.com/" />
        <meta property="og:title" content="Subscription Manager App India | Saveiy Recurring Payments" />
        <meta
          property="og:description"
          content="Track subscriptions, UPI AutoPay mandates and recurring payments in one app. Saveiy is free on Google Play; iOS coming soon."
        />
        <meta property="og:url" content="https://saveiy.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Subscription Manager App India | Saveiy Recurring Payments" />
        <meta
          name="twitter:description"
          content="Track subscriptions, UPI AutoPay mandates and recurring payments in one app. Free on Google Play."
        />

        <script type="application/ld+json">{JSON.stringify(softwareApp)}</script>
        <script type="application/ld+json">{JSON.stringify(organization)}</script>
        <script type="application/ld+json">{JSON.stringify(faqPage)}</script>

      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <LandingFeatures />
        <LandingComparison />
        <MidCTA />
        <LandingFAQ />
        <TeamSection />
        <GetTheApp />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
