import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import AlternativesSection from "@/components/AlternativesSection";
import ProductPreview from "@/components/ProductPreview";
import SocialProof from "@/components/SocialProof";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <AlternativesSection />
      <ProductPreview />
      <SocialProof />
      <EarlyAccess />
      <Footer />
    </div>
  );
};

export default Index;
