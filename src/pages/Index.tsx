import GlossyNavbar from "@/components/GlossyNavbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LendingSection from "@/components/LendingSection";
import InvestmentSection from "@/components/InvestmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GlossyNavbar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <LendingSection />
      <InvestmentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
