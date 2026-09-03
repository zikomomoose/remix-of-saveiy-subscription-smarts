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

const Index = () => {
  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Saveiy",
    description:
      "Saveiy is a recurring payment intelligence platform that helps users discover, track and manage subscriptions, UPI mandates and recurring expenses.",
    url: "https://saveiy.com/",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
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
        <title>Saveiy | Recurring Payment &amp; Subscription Intelligence</title>
        <meta
          name="description"
          content="Saveiy is a recurring payment intelligence platform that helps users discover, track and manage subscriptions, UPI mandates and recurring expenses in one place."
        />
        <meta
          name="keywords"
          content="subscription manager, bill tracking app, subscription tracking software, recurring expense tracker, renewal reminders, hidden fee detector, free trial tracker, fixed expense tracker, Rocket Money alternative, Monarch Money alternative, UPI autopay tracker"
        />
        <link rel="canonical" href="https://saveiy.com/" />
        <meta property="og:title" content="Saveiy | Recurring Payment &amp; Subscription Intelligence" />
        <meta
          property="og:description"
          content="Saveiy is a recurring payment intelligence platform that helps users discover, track and manage subscriptions, UPI mandates and recurring expenses in one place."
        />
        <meta property="og:url" content="https://saveiy.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Saveiy | Recurring Payment &amp; Subscription Intelligence" />
        <meta
          name="twitter:description"
          content="Saveiy is a recurring payment intelligence platform that helps you discover, track and manage subscriptions, UPI mandates and recurring expenses."
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
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
