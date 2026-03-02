import GlossyNavbar from "@/components/GlossyNavbar";
import HowItWorksSection from "@/components/HowItWorksSection";
import FooterSection from "@/components/FooterSection";
import FloatingElements from "@/components/FloatingElements";

const HowItWorksPage = () => (
  <div className="min-h-screen bg-background">
    <GlossyNavbar />
    <FloatingElements />
    <HowItWorksSection />
    <FooterSection />
  </div>
);

export default HowItWorksPage;
