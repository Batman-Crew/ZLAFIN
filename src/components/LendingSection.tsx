import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Home, Building2, Landmark, HardHat, CircleDollarSign, Store } from "lucide-react";
import abstractBg from "@/assets/abstract-bg.jpg";
import { KeyIllustration } from "./Illustrations3D";

const solutions = [
  { icon: Home, title: "Residential Purchase & Refinance" },
  { icon: Building2, title: "Investment Property Financing" },
  { icon: Landmark, title: "Bridge Loans" },
  { icon: HardHat, title: "Construction & Development" },
  { icon: CircleDollarSign, title: "Second Mortgages" },
  { icon: Store, title: "Commercial Real Estate" },
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

const LendingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="lending" ref={sectionRef} className="relative py-32 overflow-hidden section-glow">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 opacity-20">
        <img src={abstractBg} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-background/90 -z-10" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Mortgage Lending
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Private Mortgage <span className="gold-gradient-text">Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Designed for borrowers who require speed, flexibility, and personalized service across Canada.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="shrink-0"
          >
            <KeyIllustration className="w-48 h-48 md:w-56 md:h-56" />
          </motion.div>
        </div>

        {/* Solutions grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className="glass-panel rounded-xl p-6 gold-border-glow card-3d group cursor-default"
              style={{ perspective: "1000px" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-[0_0_30px_hsla(40,85%,55%,0.25)] group-hover:scale-110 group-hover:rotate-6">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-heading font-semibold">{s.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lending Process - 3D pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="font-heading text-2xl font-bold mb-8 text-center gold-gradient-text">Our Process</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + 0.1 * i }}
                className="flex items-center gap-3"
              >
                <div className="glass-panel rounded-xl px-5 py-3 gold-border-glow card-3d flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {step.num}
                  </span>
                  <span className="text-sm font-medium">{step.title}</span>
                </div>
                {i < processSteps.length - 1 && (
                  <svg className="w-6 h-6 text-primary/30 hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
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
          className="glass-panel rounded-2xl p-8 md:p-12 gold-border-glow max-w-3xl mx-auto card-3d"
        >
          <h3 className="font-heading text-2xl font-bold mb-6 text-center gold-gradient-text">
            Who We Help
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {whoWeHelp.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + 0.05 * i }}
                className="flex items-center gap-3 group"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_10px_hsla(40,85%,55%,0.5)]" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LendingSection;
