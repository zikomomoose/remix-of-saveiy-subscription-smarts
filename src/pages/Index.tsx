import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import CoreSections from "@/components/CoreSections";
import SaveiyEdge from "@/components/SaveiyEdge";
import MidCTA from "@/components/MidCTA";
import FAQSection from "@/components/FAQSection";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Saveiy — Smart Subscription Manager &amp; Bill Tracker for India</title>
        <meta name="description" content="Saveiy is India's smart subscription manager and bill tracker. Spot auto-renewals, stop hidden recurring charges on UPI &amp; cards, and switch to cheaper Indian alternatives." />
        <link rel="canonical" href="https://saveiy.com/" />
        <meta property="og:title" content="Saveiy — Smart Subscription Manager &amp; Bill Tracker for India" />
        <meta property="og:description" content="Track every subscription, predict every renewal, switch to smarter alternatives. Built for India." />
        <meta property="og:url" content="https://saveiy.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Saveiy",
          url: "https://saveiy.com/",
          inLanguage: "en-IN",
          publisher: { "@type": "Organization", name: "Corewave Innovations Pvt. Ltd." },
        })}</script>
      </Helmet>
      <Navbar />

      <main>
        <HeroSection />
        <CoreSections />
        <SaveiyEdge />
        <MidCTA />
        <EarlyAccess />
        <SectionDivider number="04" label="FAQ" />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
