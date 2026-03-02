import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch shortly.");
  };

  return (
    <div className="page-container">
      <section className="relative py-20 overflow-hidden">
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
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              Contact <span className="gold-gradient-text">Us</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex justify-center lg:justify-start mb-4">
                <GlobeIllustration className="w-36 h-36" />
              </div>
              {[
                { icon: Mail, label: "Email", value: "info@zlafin.ca" },
                { icon: Phone, label: "Phone", value: "+1 (XXX) XXX-XXXX" },
                { icon: MapPin, label: "Office", value: "Canada" },
                { icon: Clock, label: "Hours", value: "Mon–Fri, 9AM–6PM" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20, rotateY: -10 }}
                  animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + 0.1 * i }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary/15 group-hover:shadow-[0_4px_15px_hsla(35,85%,48%,0.12)] group-hover:scale-110">
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
              initial={{ opacity: 0, x: 40, rotateY: 5 }}
              animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 bg-card rounded-2xl p-8 gold-border-glow space-y-5 card-3d"
              style={{ perspective: "1000px" }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <select
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  <option value="Mortgage">Mortgage</option>
                  <option value="Investment">Investment</option>
                </select>
              </div>
              <textarea
                placeholder="Your message..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_4px_30px_hsla(35,85%,48%,0.3)] hover:scale-[1.02] relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
