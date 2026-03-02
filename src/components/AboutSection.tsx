import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Zap, TrendingUp, Users, Eye, BarChart3 } from "lucide-react";
import { BuildingIllustration, ShieldIllustration, HandshakeIllustration } from "./Illustrations3D";

const features = [
  { icon: Zap, title: "Fast Approvals", desc: "Quick, flexible qualification process" },
  { icon: Shield, title: "Secured Investments", desc: "Backed by Canadian real estate" },
  { icon: TrendingUp, title: "Competitive Rates", desc: "Transparent, market-leading rates" },
  { icon: BarChart3, title: "Risk Management", desc: "Strong underwriting practices" },
  { icon: Users, title: "Expert Team", desc: "Deep market insights & experience" },
  { icon: Eye, title: "Full Transparency", desc: "Clear reporting at every step" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="page-container">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6" ref={ref}>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
                Who We Are
              </span>
              <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                Bridging the Gap in{" "}
                <span className="gold-gradient-text">Canadian Lending</span>
              </h1>
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
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <BuildingIllustration className="w-72 h-72 md:w-96 md:h-96" />
              <div className="absolute -inset-4 bg-primary/3 rounded-3xl blur-3xl -z-10" />
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="bg-card rounded-2xl p-8 md:p-10 gold-border-glow card-3d flex flex-col md:flex-row items-center gap-6"
            >
              <ShieldIllustration className="w-28 h-28 shrink-0" />
              <div>
                <h3 className="font-heading text-xl font-semibold mb-3 gold-gradient-text">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  To become one of Canada's most trusted private lending platforms by 
                  connecting borrowers and investors through innovative, transparent, 
                  and secure financial solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="bg-card rounded-2xl p-8 md:p-10 gold-border-glow card-3d flex flex-col md:flex-row items-center gap-6"
            >
              <HandshakeIllustration className="w-28 h-28 shrink-0" />
              <div>
                <h3 className="font-heading text-xl font-semibold mb-3 gold-gradient-text">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  To provide accessible, flexible financing while delivering stable, 
                  transparent returns to our investors through disciplined lending practices.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
              Why Choose <span className="gold-gradient-text">ZLAFIN</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="bg-card rounded-xl p-6 gold-border-glow card-3d group cursor-default"
                style={{ perspective: "800px" }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-primary/15 group-hover:shadow-[0_4px_20px_hsla(35,85%,48%,0.15)] group-hover:scale-110">
                  <f.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2 text-foreground">{f.title}</h4>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
