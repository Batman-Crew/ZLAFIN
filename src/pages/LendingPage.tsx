import GlossyNavbar from "@/components/GlossyNavbar";
import LendingSection from "@/components/LendingSection";
import FooterSection from "@/components/FooterSection";

const LendingPage = () => (
  <div className="min-h-screen bg-background relative">
    <GlossyNavbar />
    <main className="relative z-10">
      <LendingSection />
      <FooterSection />
    </main>
  </div>
);

export default LendingPage;
