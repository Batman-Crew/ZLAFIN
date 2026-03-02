import GlossyNavbar from "@/components/GlossyNavbar";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const ContactPage = () => (
  <div className="min-h-screen bg-background relative">
    <GlossyNavbar />
    <main className="relative z-10">
      <ContactSection />
      <FooterSection />
    </main>
  </div>
);

export default ContactPage;
