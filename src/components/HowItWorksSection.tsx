import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DocumentIllustration } from "./Illustrations3D";

const steps = [
  { num: "01", title: "Borrowers Apply", desc: "Submit an application for flexible mortgage solutions tailored to your needs.", icon: "📋" },
  { num: "02", title: "Investors Fund", desc: "Investors provide capital into secure, real estate-backed mortgage loans.", icon: "💰" },
  { num: "03", title: "ZLAFIN Manages", desc: "We handle underwriting, servicing, and all payment processing.", icon: "⚙️" },
  { num: "04", title: "Everyone Benefits", desc: "Both borrowers and investors benefit from a transparent, efficient process.", icon: "🤝" },
];

const StepIllustration = ({ index, inView }: { index: number; inView: boolean }) => (
  <motion.svg
    viewBox="0 0 80 80"
    className="w-16 h-16"
    initial={{ scale: 0, rotateY: -90 }}
    animate={inView ? { scale: 1, rotateY: 0 } : {}}
    transition={{ duration: 0.8, delay: 0.2 * index, type: "spring" }}
  >
    <defs>
      <filter id={`stepShadow-${index}`}>
        <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="hsl(35, 85%, 48%)" floodOpacity="0.15" />
      </filter>
    </defs>
    <motion.polygon
      points="40,5 72,22 72,58 40,75 8,58 8,22"
      fill="none"
      stroke="hsl(35, 85%, 50%)"
      strokeWidth="1.5"
      opacity="0.4"
      filter={`url(#stepShadow-${index})`}
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, delay: index * 0.5 }}
      style={{ transformOrigin: "40px 40px" }}
    />
    <motion.polygon
      points="40,12 65,26 65,54 40,68 15,54 15,26"
      fill="hsl(35, 85%, 50%)"
      opacity="0.08"
    />
    <text
      x="40"
      y="45"
      textAnchor="middle"
      fill="hsl(35, 85%, 48%)"
      fontSize="20"
      fontWeight="bold"
      fontFamily="Outfit, sans-serif"
    >
      {index + 1}
    </text>
  </motion.svg>
);

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="page-container">
      <section className="relative py-20 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="none">
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 40} x2="800" y2={i * 40} stroke="hsl(35, 85%, 48%)" strokeWidth="0.5" />
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="800" stroke="hsl(35, 85%, 48%)" strokeWidth="0.5" />
            ))}
          </svg>
        </div>

        <div className="container mx-auto px-6" ref={ref}>
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left flex-1"
            >
              <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
                The Process
              </span>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
                How It <span className="gold-gradient-text">Works</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-lg text-lg">
                Our streamlined process makes it easy for borrowers to get funded and investors to earn returns.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="shrink-0"
            >
              <DocumentIllustration className="w-40 h-40 md:w-52 md:h-52" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 * i }}
                className="relative"
                style={{ perspective: "1000px" }}
              >
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary/30 to-primary/5"
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + 0.15 * i }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                )}

                <div className="bg-card rounded-2xl p-6 gold-border-glow card-3d text-center h-full">
                  <div className="flex justify-center mb-4">
                    <StepIllustration index={i} inView={inView} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksSection;
