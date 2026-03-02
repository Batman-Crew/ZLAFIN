import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Home, Building2, Landmark, HardHat, CircleDollarSign, Store, ArrowRight } from "lucide-react";


const solutions = [
  { icon: Home, title: "Residential Purchase & Refinance", desc: "Flexible terms for home buyers and refinancing needs", span: "md:col-span-2" },
  { icon: Building2, title: "Investment Property Financing", desc: "Fund your next real estate investment", span: "" },
  { icon: Landmark, title: "Bridge Loans", desc: "Short-term financing to bridge the gap", span: "" },
  { icon: HardHat, title: "Construction & Development", desc: "From ground-up builds to major renovations", span: "md:col-span-2" },
  { icon: CircleDollarSign, title: "Second Mortgages", desc: "Leverage your existing equity", span: "" },
  { icon: Store, title: "Commercial Real Estate", desc: "Financing for commercial properties across Canada", span: "" },
];

const whoWeHelp = [
  "Self-employed individuals",
  "Newcomers to Canada",
  "Real estate investors",
  "Developers",
  "Borrowers with non-traditional income",
  "Borrowers with credit challenges",
  "Businesses requiring short-term financing",
];

const processSteps = [
  { num: "1", title: "Submit Application" },
  { num: "2", title: "Property & Financial Review" },
  { num: "3", title: "Quick Approval" },
  { num: "4", title: "Funding Within Days" },
  { num: "5", title: "Ongoing Support" },
];

const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x: y, y: x });
  };

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-200 ${className}`}
      style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      {children}
    </div>
  );
};

const LendingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="lending" className="relative py-24 overflow-hidden page-container">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Mortgage Lending
          </span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Private Mortgage <span className="gold-gradient-text">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Designed for borrowers who require speed, flexibility, and personalized service across Canada.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-4 gap-5 mb-20">
          {solutions.map((s, i) => (
            <TiltCard key={s.title} className={s.span || "md:col-span-2"}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i }}
                className="bg-card rounded-2xl p-7 gold-border-glow group cursor-default h-full hover:shadow-[0_20px_60px_hsla(35,85%,48%,0.08)] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-primary/15 group-hover:shadow-[0_4px_20px_hsla(35,85%,48%,0.15)] group-hover:scale-110">
                      <s.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground text-lg">{s.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Process flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-10 text-center gold-gradient-text">Our Process</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + 0.1 * i }}
                className="flex items-center gap-3"
              >
                <div className="bg-card rounded-2xl px-6 py-4 gold-border-glow flex items-center gap-4 hover:shadow-[0_10px_40px_hsla(35,85%,48%,0.1)] transition-all duration-300 hover:-translate-y-1 group">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {step.num}
                  </span>
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">{step.title}</span>
                </div>
                {i < processSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-primary/30 hidden md:block shrink-0" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who we help */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-card rounded-3xl p-10 md:p-14 gold-border-glow max-w-3xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent" />
          <div className="relative z-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center gold-gradient-text">Who We Help</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {whoWeHelp.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + 0.06 * i }}
                  className="px-5 py-2.5 rounded-full bg-background gold-border-glow text-sm font-medium text-foreground hover:bg-primary/5 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LendingSection;
