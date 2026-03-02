import GlossyNavbar from "@/components/GlossyNavbar";
import LendingSection from "@/components/LendingSection";
import FooterSection from "@/components/FooterSection";
import FloatingElements from "@/components/FloatingElements";

const LendingPage = () => (
  <div className="min-h-screen bg-background">
    <GlossyNavbar />
    <FloatingElements />
    <LendingSection />
    <FooterSection />
  </div>
);

export default LendingPage;
