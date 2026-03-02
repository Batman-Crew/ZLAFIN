import GlossyNavbar from "@/components/GlossyNavbar";
import HeroSection from "@/components/HeroSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <GlossyNavbar />
      <main className="relative z-10">
        <HeroSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
