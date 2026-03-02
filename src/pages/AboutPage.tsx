import GlossyNavbar from "@/components/GlossyNavbar";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const AboutPage = () => (
  <div className="min-h-screen bg-background relative">
    <GlossyNavbar />
    <main className="relative z-10">
      <AboutSection />
      <FooterSection />
    </main>
  </div>
);

export default AboutPage;
