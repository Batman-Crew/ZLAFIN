import GlossyNavbar from "@/components/GlossyNavbar";
import HowItWorksSection from "@/components/HowItWorksSection";
import FooterSection from "@/components/FooterSection";

const HowItWorksPage = () => (
  <div className="min-h-screen bg-background relative">
    <GlossyNavbar />
    <main className="relative z-10">
      <HowItWorksSection />
      <FooterSection />
    </main>
  </div>
);

export default HowItWorksPage;
