import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoreSections from "@/components/CoreSections";
import SaveiyEdge from "@/components/SaveiyEdge";
import Positioning from "@/components/Positioning";
import TrustSection from "@/components/TrustSection";
import ProductPreview from "@/components/ProductPreview";
import SocialProof from "@/components/SocialProof";
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
        <ProductPreview />
        <Positioning />
        <TrustSection />
        <SocialProof />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
