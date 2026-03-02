import GlossyNavbar from "@/components/GlossyNavbar";
import InvestmentSection from "@/components/InvestmentSection";
import FooterSection from "@/components/FooterSection";
import FloatingElements from "@/components/FloatingElements";

const InvestPage = () => (
  <div className="min-h-screen bg-background">
    <GlossyNavbar />
    <FloatingElements />
    <InvestmentSection />
    <FooterSection />
  </div>
);

export default InvestPage;
