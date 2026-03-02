import GlossyNavbar from "@/components/GlossyNavbar";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";
import FloatingElements from "@/components/FloatingElements";

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <GlossyNavbar />
    <FloatingElements />
    <AboutSection />
    <FooterSection />
  </div>
);

export default AboutPage;
