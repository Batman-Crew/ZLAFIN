import GlossyNavbar from "@/components/GlossyNavbar";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import FloatingElements from "@/components/FloatingElements";

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <GlossyNavbar />
    <FloatingElements />
    <ContactSection />
    <FooterSection />
  </div>
);

export default ContactPage;
