import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LandingFeatures from "@/components/LandingFeatures";
import LandingComparison from "@/components/LandingComparison";
import LandingFAQ, { landingFaqs } from "@/components/LandingFAQ";
import MidCTA from "@/components/MidCTA";
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
    name: "Saveiy",
    legalName: "Corewave Innovations Pvt. Ltd.",
    url: "https://saveiy.com/",
    logo: "https://saveiy.com/favicon.ico",
    brand: { "@type": "Brand", name: "Saveiy" },
    address: { "@type": "PostalAddress", addressCountry: "IN" },
    email: "support@saveiy.com",
    sameAs: [
      "https://www.instagram.com/save_iy/",
      "https://www.linkedin.com/company/saveiy/",
    ],
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
      <Seo
        title="Saveiy – Track Subscriptions & UPI AutoPay in India"
        description="Track subscriptions, recurring payments, UPI AutoPay mandates and bill renewals with Saveiy, India's subscription manager app. Free on Google Play."
        canonical="/"
        keywords="subscription manager app India, recurring payment app, subscription tracker India, UPI AutoPay tracker, bill tracking app"
        jsonLd={[organization, softwareApp, faqPage]}
      />
      <Navbar />
      <main>
        <HeroSection />
        <LandingFeatures />
        <LandingComparison />
        <MidCTA />
        <LandingFAQ />
        <GetTheApp />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
