import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";


const steps = [
  { num: "01", title: "Borrowers Apply", desc: "Submit an application for flexible mortgage solutions tailored to your unique financial needs and goals.", color: "from-amber-500/10 to-amber-600/5" },
  { num: "02", title: "Investors Fund", desc: "Investors provide capital into secure, real estate-backed mortgage loans with competitive returns.", color: "from-yellow-500/10 to-amber-500/5" },
  { num: "03", title: "ZLAFIN Manages", desc: "We handle all underwriting, due diligence, servicing, and payment processing professionally.", color: "from-orange-500/10 to-amber-500/5" },
  { num: "04", title: "Everyone Benefits", desc: "Both borrowers and investors benefit from a transparent, efficient, and secure process.", color: "from-amber-600/10 to-yellow-500/5" },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section id="how-it-works" ref={containerRef} className="relative py-24 overflow-hidden page-container">

      {/* Decorative SVG curvy lines */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
          <path d="M-80 180 C250 80, 550 320, 900 200 S1250 80, 1520 250" stroke="hsl(35, 85%, 48%)" strokeWidth="1.5" strokeOpacity="0.05" />
          <path d="M-80 550 C300 450, 600 680, 950 530 S1300 420, 1520 600" stroke="hsl(35, 85%, 48%)" strokeWidth="1" strokeOpacity="0.04" />
        </svg>
        <svg className="absolute top-12 right-20 w-36 h-36 opacity-[0.03]" viewBox="0 0 200 200">
          <polygon points="100,10 190,75 160,170 40,170 10,75" stroke="hsl(35, 85%, 48%)" strokeWidth="1" fill="none" />
          <polygon points="100,40 155,80 140,140 60,140 45,80" stroke="hsl(35, 85%, 48%)" strokeWidth="0.7" fill="none" />
        </svg>
        <svg className="absolute bottom-16 left-16 w-32 h-32 opacity-[0.025]" viewBox="0 0 200 200">
          <path d="M30 170 L100 30 L170 170 Z" stroke="hsl(35, 85%, 48%)" strokeWidth="1" fill="none" />
          <path d="M60 150 L100 70 L140 150 Z" stroke="hsl(35, 85%, 48%)" strokeWidth="0.7" fill="none" />
        </svg>
      </div>

      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-[0.02]">
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            The Process
          </span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            How It <span className="gold-gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-lg">
            Our streamlined process makes it easy for borrowers to get funded and investors to earn returns.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/10 md:-translate-x-px">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-primary to-primary/30 rounded-full"
              style={{ height: lineHeight }}
            />
          </div>

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 30 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * i, ease: [0.23, 1, 0.32, 1] }}
                className={`relative flex items-center mb-16 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10">
                  <motion.div
                    className="w-full h-full rounded-full bg-primary shadow-[0_0_15px_hsla(35,85%,48%,0.4)]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  />
                </div>

                {/* Card */}
                <div className={`ml-20 md:ml-0 md:w-[45%] ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    className={`bg-card rounded-2xl p-8 gold-border-glow group hover:shadow-[0_20px_60px_hsla(35,85%,48%,0.08)] transition-all duration-500 relative overflow-hidden`}
                    whileHover={{ y: -4 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                        >
                          <span className="font-heading text-xl font-bold text-primary">{step.num}</span>
                        </motion.div>
                        <h3 className="font-heading text-xl font-semibold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
