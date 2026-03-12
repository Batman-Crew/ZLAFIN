import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { GlobeIllustration } from "./Illustrations3D";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "Mortgage",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@zlafin.ca" },
    { icon: Phone, label: "Phone", value: "+1 (XXX) XXX-XXXX" },
    { icon: MapPin, label: "Office", value: "Canada" },
    { icon: Clock, label: "Hours", value: "Mon-Fri, 9AM-6PM" },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden page-container">
      {/* Rich background patterns */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 cross-pattern opacity-50" />
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] gradient-orb rounded-full" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] gradient-orb-lg rounded-full" />
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
          <path d="M-70 160 C260 60, 480 320, 780 190 S1150 60, 1510 220" stroke="hsl(35, 85%, 48%)" strokeWidth="1.5" strokeOpacity="0.08" />
          <path d="M-70 480 C320 390, 560 590, 860 450 S1200 340, 1510 510" stroke="hsl(35, 85%, 48%)" strokeWidth="1" strokeOpacity="0.06" />
        </svg>
        {/* Geometric accents */}
        <svg className="absolute top-16 right-16 w-56 h-56 opacity-[0.05]" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="85" stroke="hsl(35, 85%, 48%)" strokeWidth="0.8" fill="none" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="55" stroke="hsl(35, 85%, 48%)" strokeWidth="0.6" fill="none" strokeDasharray="3 6" />
          <circle cx="100" cy="100" r="25" stroke="hsl(35, 85%, 48%)" strokeWidth="0.5" fill="none" />
        </svg>
        <svg className="absolute bottom-16 left-12 w-40 h-40 opacity-[0.05]" viewBox="0 0 200 200">
          <path d="M100 20 L20 180 L180 180 Z" stroke="hsl(35, 85%, 48%)" strokeWidth="0.8" fill="none" />
          <path d="M100 60 L50 160 L150 160 Z" stroke="hsl(35, 85%, 48%)" strokeWidth="0.6" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Contact <span className="gold-gradient-text">Us</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Ready to get started? Reach out and our team will respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex justify-center lg:justify-start mb-6">
              <GlobeIllustration className="w-36 h-36" />
            </div>
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + 0.1 * i }}
                className="flex items-start gap-4 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary/15 group-hover:shadow-[0_4px_15px_hsla(35,85%,48%,0.15)] group-hover:scale-110">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card rounded-3xl p-8 md:p-10 gold-border-glow space-y-5 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/2 to-transparent" />
            <div className="relative z-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                  <motion.label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "name" || formData.name
                        ? "top-1 text-xs text-primary"
                        : "top-3.5 text-sm text-muted-foreground"
                    }`}
                  >
                    Full Name
                  </motion.label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 pt-5 pb-2 rounded-xl bg-secondary/30 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                  />
                </div>
                <div className="relative">
                  <motion.label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "email" || formData.email
                        ? "top-1 text-xs text-primary"
                        : "top-3.5 text-sm text-muted-foreground"
                    }`}
                  >
                    Email
                  </motion.label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 pt-5 pb-2 rounded-xl bg-secondary/30 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                  <motion.label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "phone" || formData.phone
                        ? "top-1 text-xs text-primary"
                        : "top-3.5 text-sm text-muted-foreground"
                    }`}
                  >
                    Phone
                  </motion.label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 pt-5 pb-2 rounded-xl bg-secondary/30 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                  />
                </div>
                <select
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-secondary/30 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                >
                  <option value="Mortgage">Mortgage</option>
                  <option value="Investment">Investment</option>
                </select>
              </div>
              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === "message" || formData.message
                      ? "top-1 text-xs text-primary"
                      : "top-3.5 text-sm text-muted-foreground"
                  }`}
                >
                  Your message...
                </motion.label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 pt-5 pb-2 rounded-xl bg-secondary/30 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_4px_30px_hsla(35,85%,48%,0.3)] hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
