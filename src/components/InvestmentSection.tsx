import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Percent, PieChart, FileText, Lock } from "lucide-react";
import { CoinStackIllustration, WalletIllustration } from "./Illustrations3D";

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

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
};

const InvestmentSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="invest" className="relative py-24 overflow-hidden page-container">
      {/* Rich background patterns */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 dot-pattern-lg opacity-50" />
        <div className="absolute -top-20 -left-32 w-[500px] h-[500px] gradient-orb rounded-full" />
        <div className="absolute bottom-20 -right-40 w-[550px] h-[550px] gradient-orb-lg rounded-full" />
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
          <path d="M-60 120 C280 30, 520 300, 820 170 S1180 30, 1500 180" stroke="hsl(35, 85%, 48%)" strokeWidth="1.5" strokeOpacity="0.07" />
          <path d="M-60 450 C350 360, 580 560, 880 420 S1220 310, 1500 480" stroke="hsl(35, 85%, 48%)" strokeWidth="1" strokeOpacity="0.05" />
          <path d="M-60 720 C300 640, 650 800, 1000 680 S1350 580, 1500 750" stroke="hsl(35, 85%, 48%)" strokeWidth="1.2" strokeOpacity="0.06" />
        </svg>
        {/* Floating illustrations */}
        <div className="absolute top-24 -right-4 opacity-[0.07] hidden lg:block">
          <CoinStackIllustration className="w-48 h-52" />
        </div>
        <div className="absolute bottom-32 -left-4 opacity-[0.06] hidden lg:block">
          <WalletIllustration className="w-44 h-44" />
        </div>
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Investment Opportunities
          </span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Grow Your Wealth with{" "}
            <span className="gold-gradient-text">Secured Returns</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Earn stable, competitive returns through secured private mortgage lending backed by Canadian real estate.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16"
        >
          {[
            { value: 8, suffix: "%+", label: "Avg. Returns" },
            { value: 100, suffix: "%", label: "Real Estate Backed" },
            { value: 0, suffix: "", label: "Capital Losses", display: "Zero" },
          ].map((s, i) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold gold-gradient-text mb-1">
                {s.display || <AnimatedCounter target={s.value} suffix={s.suffix} />}
              </div>
              <div className="text-muted-foreground text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-card rounded-2xl p-7 gold-border-glow group cursor-default hover:shadow-[0_20px_60px_hsla(35,85%,48%,0.08)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary/15 group-hover:shadow-[0_4px_20px_hsla(35,85%,48%,0.2)] group-hover:scale-110">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2 text-foreground">{b.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* How it works - circular flow */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-card rounded-3xl p-8 md:p-10 gold-border-glow relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent" />
            <div className="relative z-10">
              <h3 className="font-heading text-xl font-bold mb-8 gold-gradient-text">Investment Flow</h3>
              <div className="space-y-5">
                {investSteps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + 0.08 * i }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-sm transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_4px_15px_hsla(35,85%,48%,0.3)]">
                      {step.num}
                    </div>
                    <p className="text-foreground font-medium text-sm">{step.text}</p>
                    {i < investSteps.length - 1 && (
                      <div className="absolute left-[19px] mt-12 w-px h-3 bg-primary/15" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Animated chart visualization */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <svg viewBox="0 0 300 220" className="w-full max-w-sm">
              <defs>
                <linearGradient id="investChartGrad" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="hsl(35, 85%, 50%)" stopOpacity="0.03" />
                  <stop offset="100%" stopColor="hsl(35, 85%, 50%)" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="investBarGrad" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="hsl(35, 70%, 38%)" />
                  <stop offset="100%" stopColor="hsl(35, 90%, 55%)" />
                </linearGradient>
              </defs>
              {[40, 80, 120, 160].map((y) => (
                <line key={y} x1="40" y1={y} x2="270" y2={y} stroke="hsl(45, 15%, 88%)" strokeWidth="0.5" />
              ))}
              {[
                { x: 55, h: 90 },
                { x: 95, h: 110 },
                { x: 135, h: 75 },
                { x: 175, h: 130 },
                { x: 215, h: 105 },
                { x: 255, h: 140 },
              ].map((bar, i) => (
                <motion.rect
                  key={i}
                  x={bar.x}
                  width={24}
                  rx={4}
                  fill="url(#investBarGrad)"
                  initial={{ height: 0, y: 180 }}
                  animate={inView ? { height: bar.h, y: 180 - bar.h } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + 0.12 * i }}
                />
              ))}
              <motion.path
                d="M67 105 L107 80 L147 115 L187 50 L227 70 L267 40"
                fill="none"
                stroke="hsl(35, 85%, 48%)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 1 }}
              />
              <motion.path
                d="M67 105 L107 80 L147 115 L187 50 L227 70 L267 40 L267 180 L67 180 Z"
                fill="url(#investChartGrad)"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.5 }}
              />
              {[[67, 105], [107, 80], [147, 115], [187, 50], [227, 70], [267, 40]].map(([cx, cy], i) => (
                <motion.circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={4}
                  fill="hsl(35, 85%, 50%)"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1 + 0.15 * i }}
                />
              ))}
            </svg>
          </motion.div>
        </div>

        {/* Who can invest */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">Who Can Invest</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {investorTypes.map((type, i) => (
              <motion.span
                key={type}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + 0.1 * i }}
                className="px-7 py-3.5 rounded-2xl bg-card gold-border-glow text-sm font-medium text-foreground hover:shadow-[0_10px_40px_hsla(35,85%,48%,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {type}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentSection;
