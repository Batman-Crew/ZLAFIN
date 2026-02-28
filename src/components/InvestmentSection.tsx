import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Percent, PieChart, FileText, Lock } from "lucide-react";
import { CoinStackIllustration, ChartIllustration } from "./Illustrations3D";

const benefits = [
  { icon: ShieldCheck, title: "Secured by Real Estate", desc: "Capital protected by Canadian real estate collateral" },
  { icon: Percent, title: "Competitive Returns", desc: "Interest-based returns outperforming traditional savings" },
  { icon: PieChart, title: "Diversified Portfolio", desc: "Access to a range of mortgage loan opportunities" },
  { icon: FileText, title: "Transparent Reporting", desc: "Regular updates and full visibility into your investments" },
  { icon: Lock, title: "Strong Underwriting", desc: "Rigorous risk management on every loan" },
];

const investorTypes = [
  "High-net-worth individuals",
  "Family offices",
  "Accredited investors",
  "Corporate investors",
];

const investSteps = [
  { num: "1", text: "Investors provide capital" },
  { num: "2", text: "Funds deployed into secured loans" },
  { num: "3", text: "Borrowers pay interest" },
  { num: "4", text: "Investors receive regular income" },
  { num: "5", text: "Capital protected by collateral" },
];

const InvestmentSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="invest" className="relative py-32 overflow-hidden section-glow">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Header with illustration */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1 }}
            className="shrink-0 order-2 lg:order-1"
          >
            <CoinStackIllustration className="w-48 h-52 md:w-56 md:h-60" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left order-1 lg:order-2"
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Investment Opportunities
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Grow Your Wealth with{" "}
              <span className="gold-gradient-text">Secured Returns</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Earn stable, competitive returns through secured private mortgage lending backed by Canadian real estate.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, scale: 0.9, y: 30, rotateX: 10 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="glass-panel rounded-xl p-6 gold-border-glow card-3d group cursor-default"
              style={{ perspective: "800px" }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-[0_0_30px_hsla(40,85%,55%,0.25)] group-hover:scale-110">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">{b.title}</h4>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Investment process with chart illustration */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-panel rounded-2xl p-8 gold-border-glow card-3d"
          >
            <h3 className="font-heading text-xl font-bold mb-6 gold-gradient-text">How It Works</h3>
            <div className="space-y-4">
              {investSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + 0.08 * i }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0 text-primary font-bold text-sm transition-all duration-300 group-hover:bg-primary/25 group-hover:shadow-[0_0_15px_hsla(40,85%,55%,0.2)]">
                    {step.num}
                  </div>
                  <p className="text-muted-foreground text-sm">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <ChartIllustration className="w-full max-w-sm" />
          </motion.div>
        </div>

        {/* Who can invest */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {investorTypes.map((type, i) => (
            <motion.span
              key={type}
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + 0.1 * i }}
              className="px-6 py-3 rounded-full glass-panel gold-border-glow text-sm font-medium text-foreground card-3d cursor-default"
            >
              {type}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentSection;
