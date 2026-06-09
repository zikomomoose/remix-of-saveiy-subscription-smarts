import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoreSections from "@/components/CoreSections";
import SaveiyEdge from "@/components/SaveiyEdge";
import MidCTA from "@/components/MidCTA";
import Positioning from "@/components/Positioning";
import TrustSection from "@/components/TrustSection";
import ProductPreview from "@/components/ProductPreview";
import SocialProof from "@/components/SocialProof";
import FAQSection from "@/components/FAQSection";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CoreSections />
        <SaveiyEdge />
        <MidCTA />
        <ProductPreview />
        <Positioning />
        <TrustSection />
        <SocialProof />
        <FAQSection />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
