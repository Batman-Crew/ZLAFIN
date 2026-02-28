import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Percent, PieChart, FileText, Lock } from "lucide-react";

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

const InvestmentSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="invest" className="relative py-32 overflow-hidden section-glow">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Investment Opportunities
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Grow Your Wealth with{" "}
            <span className="gold-gradient-text">Secured Returns</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Earn stable, competitive returns through secured private mortgage lending backed by Canadian real estate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`glass-panel rounded-xl p-6 gold-border-glow card-3d group cursor-default ${
                i >= 3 ? "lg:col-span-1 lg:first-of-type:col-start-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsla(40,85%,55%,0.2)]">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">{b.title}</h4>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </motion.div>
          ))}
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + 0.1 * i }}
              className="px-6 py-3 rounded-full glass-panel gold-border-glow text-sm font-medium text-foreground"
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
