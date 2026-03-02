import GlossyNavbar from "@/components/GlossyNavbar";
import InvestmentSection from "@/components/InvestmentSection";
import FooterSection from "@/components/FooterSection";

const InvestPage = () => (
  <div className="min-h-screen bg-background relative">
    <GlossyNavbar />
    <main className="relative z-10">
      <InvestmentSection />
      <FooterSection />
    </main>
  </div>
);

export default InvestPage;
