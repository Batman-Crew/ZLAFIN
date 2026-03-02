import GlossyNavbar from "@/components/GlossyNavbar";
import HeroSection from "@/components/HeroSection";
import FooterSection from "@/components/FooterSection";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GlossyNavbar />
      <FloatingElements />
      <HeroSection />
      <FooterSection />
    </div>
  );
};

export default Index;
