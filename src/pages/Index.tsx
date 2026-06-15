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
