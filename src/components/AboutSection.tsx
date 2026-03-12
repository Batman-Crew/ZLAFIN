import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Zap, TrendingUp, Users, Eye, BarChart3 } from "lucide-react";
import { BuildingIllustration, ShieldIllustration, HandshakeIllustration, KeyIllustration } from "./Illustrations3D";


const features = [
  { icon: Zap, title: "Fast Approvals", desc: "Quick, flexible qualification process with decisions in days, not weeks." },
  { icon: Shield, title: "Secured Investments", desc: "Every investment backed by tangible Canadian real estate assets." },
  { icon: TrendingUp, title: "Competitive Rates", desc: "Transparent, market-leading rates for both borrowers and investors." },
  { icon: BarChart3, title: "Risk Management", desc: "Rigorous underwriting with strong due diligence on every deal." },
  { icon: Users, title: "Expert Team", desc: "Deep market insights from experienced real estate professionals." },
  { icon: Eye, title: "Full Transparency", desc: "Clear, regular reporting so you always know where you stand." },
];

const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x: y, y: x });
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-200 ${className}`}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      {children}
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 overflow-hidden page-container">
      {/* Rich background patterns */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] gradient-orb rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] gradient-orb-lg rounded-full" />
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
          <path d="M-50 100 C300 20, 500 280, 850 150 S1200 50, 1500 200" stroke="hsl(35, 85%, 48%)" strokeWidth="1.5" strokeOpacity="0.07" />
          <path d="M-50 500 C200 420, 450 600, 750 480 S1100 380, 1500 520" stroke="hsl(35, 85%, 48%)" strokeWidth="1" strokeOpacity="0.05" />
          <path d="M-50 780 C350 700, 650 850, 1000 730 S1350 650, 1500 800" stroke="hsl(35, 85%, 48%)" strokeWidth="1.2" strokeOpacity="0.06" />
        </svg>
        {/* Decorative floating illustration */}
        <div className="absolute -bottom-10 -right-10 opacity-[0.06] hidden lg:block">
          <KeyIllustration className="w-60 h-60" />
        </div>
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        {/* Hero area */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Who We Are
            </span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              Bridging the Gap in{" "}
              <span className="gold-gradient-text">Canadian Lending</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ZLAFIN is a Canadian private mortgage lending company dedicated to providing
              tailored financing solutions for individuals, families, and businesses. We
              understand that traditional banks cannot always meet every borrower's needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At the same time, we provide investors with the opportunity to grow their
              wealth through secure, real estate-backed lending built on transparency,
              risk management, and strong underwriting practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <BuildingIllustration className="w-72 h-72 md:w-96 md:h-96" />
            <div className="absolute -inset-4 bg-primary/3 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-28">
          <TiltCard>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="bg-card rounded-2xl p-8 md:p-10 gold-border-glow flex flex-col md:flex-row items-center gap-6 h-full hover:shadow-[0_20px_60px_hsla(35,85%,48%,0.08)] transition-shadow duration-500"
            >
              <ShieldIllustration className="w-28 h-28 shrink-0" />
              <div>
                <h3 className="font-heading text-xl font-semibold mb-3 gold-gradient-text">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  To become one of Canada's most trusted private lending platforms by
                  connecting borrowers and investors through innovative, transparent,
                  and secure financial solutions.
                </p>
              </div>
            </motion.div>
          </TiltCard>

          <TiltCard>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="bg-card rounded-2xl p-8 md:p-10 gold-border-glow flex flex-col md:flex-row items-center gap-6 h-full hover:shadow-[0_20px_60px_hsla(35,85%,48%,0.08)] transition-shadow duration-500"
            >
              <HandshakeIllustration className="w-28 h-28 shrink-0" />
              <div>
                <h3 className="font-heading text-xl font-semibold mb-3 gold-gradient-text">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  To provide accessible, flexible financing while delivering stable,
                  transparent returns to our investors through disciplined lending practices.
                </p>
              </div>
            </motion.div>
          </TiltCard>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
            Why Choose <span className="gold-gradient-text">ZLAFIN</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <TiltCard key={f.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="bg-card rounded-xl p-7 gold-border-glow group cursor-default h-full hover:shadow-[0_20px_60px_hsla(35,85%,48%,0.08)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary/15 group-hover:shadow-[0_4px_20px_hsla(35,85%,48%,0.2)] group-hover:scale-110">
                  <f.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2 text-foreground">{f.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
