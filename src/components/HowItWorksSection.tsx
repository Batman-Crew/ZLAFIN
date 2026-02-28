import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "01", title: "Borrowers Apply", desc: "Submit an application for flexible mortgage solutions tailored to your needs." },
  { num: "02", title: "Investors Fund", desc: "Investors provide capital into secure, real estate-backed mortgage loans." },
  { num: "03", title: "ZLAFIN Manages", desc: "We handle underwriting, servicing, and all payment processing." },
  { num: "04", title: "Everyone Benefits", desc: "Both borrowers and investors benefit from a transparent, efficient process." },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            The Process
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            How It <span className="gold-gradient-text">Works</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsla(40,85%,55%,0.4)] z-10" />

              <div className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className="glass-panel rounded-xl p-6 gold-border-glow card-3d">
                  <span className="text-primary font-heading text-3xl font-bold opacity-40">{step.num}</span>
                  <h3 className="font-heading text-xl font-semibold mt-2 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
