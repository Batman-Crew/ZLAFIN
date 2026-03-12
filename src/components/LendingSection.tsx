import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home, Building2, Landmark, HardHat, CircleDollarSign, Store, ArrowRight, X, CheckCircle2, BadgePercent, Clock, Banknote, TrendingUp } from "lucide-react";
import { HouseIllustration, DocumentIllustration, ShieldIllustration } from "./Illustrations3D";

interface SolutionDetail {
  overview: string;
  features: string[];
  terms: { ltv: string; rate: string; amount: string; term: string };
}

interface Solution {
  icon: React.ElementType;
  title: string;
  desc: string;
  span: string;
  details: SolutionDetail;
}

const solutions: Solution[] = [
  {
    icon: Home,
    title: "Residential Purchase & Refinance",
    desc: "Flexible terms for home buyers and refinancing needs",
    span: "md:col-span-2",
    details: {
      overview:
        "Whether you're purchasing your first home or refinancing an existing property, our residential lending program offers fast approvals with terms tailored to your situation — even when traditional banks say no.",
      features: [
        "Approvals for self-employed and non-traditional income",
        "No stress test required",
        "Flexible repayment options including interest-only",
        "Open and closed mortgage options",
        "Quick turnaround — funding within days",
      ],
      terms: { ltv: "Up to 80%", rate: "From 7.99%", amount: "$100K – $5M", term: "6 mo – 3 yrs" },
    },
  },
  {
    icon: Building2,
    title: "Investment Property Financing",
    desc: "Fund your next real estate investment",
    span: "",
    details: {
      overview:
        "Grow your real estate portfolio with financing built for investors. We lend on single-family rentals, multi-unit buildings, and mixed-use properties across Canada.",
      features: [
        "Rental income considered for qualification",
        "Portfolio lending for multiple properties",
        "Fast closings to seize time-sensitive deals",
        "Refinance to pull equity from existing assets",
      ],
      terms: { ltv: "Up to 75%", rate: "From 8.49%", amount: "$200K – $10M", term: "1–3 yrs" },
    },
  },
  {
    icon: Landmark,
    title: "Bridge Loans",
    desc: "Short-term financing to bridge the gap",
    span: "",
    details: {
      overview:
        "Bridge the gap between buying and selling with a short-term loan that gives you the liquidity to move quickly. Ideal for time-sensitive transactions where conventional financing falls short.",
      features: [
        "Funding in as little as 48–72 hours",
        "Ideal for purchase before sale scenarios",
        "Interest-only payments during bridge period",
        "Flexible exit strategies accepted",
      ],
      terms: { ltv: "Up to 80%", rate: "From 9.99%", amount: "$150K – $5M", term: "3–12 mo" },
    },
  },
  {
    icon: HardHat,
    title: "Construction & Development",
    desc: "From ground-up builds to major renovations",
    span: "md:col-span-2",
    details: {
      overview:
        "Finance your next development project with a structured draw facility. We work with builders, developers, and renovators on residential and commercial projects from coast to coast.",
      features: [
        "Draw facilities aligned to construction milestones",
        "Experienced team familiar with development timelines",
        "Land acquisition and construction in a single facility",
        "Renovation and value-add financing available",
        "Infill, low-rise, and mid-rise projects considered",
      ],
      terms: { ltv: "Up to 75% LTC", rate: "From 10.49%", amount: "$500K – $20M", term: "12–24 mo" },
    },
  },
  {
    icon: CircleDollarSign,
    title: "Second Mortgages",
    desc: "Leverage your existing equity",
    span: "",
    details: {
      overview:
        "Access the equity locked in your property without disturbing your existing first mortgage. Use the funds for debt consolidation, renovations, investments, or any financial need.",
      features: [
        "Keep your existing low first-mortgage rate",
        "Funds available for any purpose",
        "Fast approvals — no lengthy bank process",
        "Credit challenges considered",
      ],
      terms: { ltv: "Up to 85% CLTV", rate: "From 10.99%", amount: "$50K – $2M", term: "6 mo – 2 yrs" },
    },
  },
  {
    icon: Store,
    title: "Commercial Real Estate",
    desc: "Financing for commercial properties across Canada",
    span: "",
    details: {
      overview:
        "Flexible commercial mortgage solutions for office, retail, industrial, and mixed-use properties. We provide fast, pragmatic lending decisions based on asset value and business fundamentals.",
      features: [
        "Owner-occupied and investment properties",
        "Quick approvals for time-sensitive acquisitions",
        "Bridge financing to permanent financing",
        "Non-recourse structures available on select deals",
      ],
      terms: { ltv: "Up to 70%", rate: "From 9.49%", amount: "$500K – $25M", term: "1–3 yrs" },
    },
  },
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
  { num: "1", title: "Submit Application", desc: "Share your deal details and we'll review within hours." },
  { num: "2", title: "Property & Financial Review", desc: "We assess the asset and your financial picture quickly." },
  { num: "3", title: "Quick Approval", desc: "Receive a commitment letter, often within 24–48 hours." },
  { num: "4", title: "Funding Within Days", desc: "Once legal docs are complete, funds are released fast." },
  { num: "5", title: "Ongoing Support", desc: "Our team stays available throughout the loan term." },
];

const stats = [
  { icon: TrendingUp, value: "85%", label: "Max LTV" },
  { icon: Clock, value: "48–72 hrs", label: "Avg. Funding Time" },
  { icon: Banknote, value: "$500M+", label: "Total Funded" },
  { icon: BadgePercent, value: "From 7.99%", label: "Starting Rates" },
];

const whyPrivate = [
  { title: "No Stress Test", desc: "Qualify based on property value, not just income ratios." },
  { title: "Credit Flexibility", desc: "We look at the full picture, not just your credit score." },
  { title: "Speed", desc: "Decisions and funding in days, not weeks or months." },
  { title: "Common Sense Underwriting", desc: "Real humans reviewing your file — no automated rejections." },
];

const TiltCard = ({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
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
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const TermBadge = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-center bg-background/60 rounded-xl px-4 py-3 gold-border-glow">
    <span className="text-xs text-muted-foreground mb-0.5">{label}</span>
    <span className="text-sm font-semibold text-primary">{value}</span>
  </div>
);

const LendingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<Solution | null>(null);
  const navigate = useNavigate();

  return (
    <section id="lending" className="relative py-24 overflow-hidden page-container">
      {/* Rich background patterns */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="absolute -top-32 -right-32 w-[550px] h-[550px] gradient-orb rounded-full" />
        <div className="absolute bottom-40 -left-40 w-[450px] h-[450px] gradient-orb-lg rounded-full" />
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
          <path d="M-100 200 C200 100, 400 350, 700 250 S1100 100, 1540 300" stroke="hsl(35, 85%, 48%)" strokeWidth="1.5" strokeOpacity="0.08" />
          <path d="M-100 400 C300 300, 500 550, 800 400 S1200 250, 1540 500" stroke="hsl(35, 85%, 48%)" strokeWidth="1" strokeOpacity="0.06" />
          <path d="M-100 650 C250 550, 600 750, 900 600 S1300 500, 1540 700" stroke="hsl(35, 85%, 48%)" strokeWidth="1.5" strokeOpacity="0.06" />
        </svg>
        {/* Floating illustrations */}
        <div className="absolute top-28 -right-6 opacity-[0.07] hidden lg:block">
          <HouseIllustration className="w-52 h-52" />
        </div>
        <div className="absolute bottom-60 -left-4 opacity-[0.06] hidden lg:block">
          <DocumentIllustration className="w-44 h-44" />
        </div>
        <div className="absolute top-[55%] right-8 opacity-[0.05] hidden xl:block">
          <ShieldIllustration className="w-36 h-36" />
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
            Mortgage Lending
          </span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Private Mortgage <span className="gold-gradient-text">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Designed for borrowers who require speed, flexibility, and personalized service across Canada.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + 0.07 * i }}
              className="bg-card rounded-2xl p-6 gold-border-glow flex flex-col items-center text-center group hover:shadow-[0_10px_40px_hsla(35,85%,48%,0.1)] transition-all duration-300"
            >
              <s.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-bold gold-gradient-text">{s.value}</span>
              <span className="text-xs text-muted-foreground mt-1">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bento grid */}
        <p className="text-center text-muted-foreground text-sm mb-6 tracking-wide">
          Click any card to learn more
        </p>
        <div className="grid md:grid-cols-4 gap-5 mb-20">
          {solutions.map((s, i) => (
            <TiltCard key={s.title} className={s.span || "md:col-span-2"} onClick={() => setSelected(s)}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i }}
                className="bg-card rounded-2xl p-7 gold-border-glow group cursor-pointer h-full hover:shadow-[0_20px_60px_hsla(35,85%,48%,0.12)] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-primary/15 group-hover:shadow-[0_4px_20px_hsla(35,85%,48%,0.15)] group-hover:scale-110">
                      <s.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground text-lg">{s.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary group-hover:gap-2.5 transition-all duration-300">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Why Private Lending */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-10 text-center gold-gradient-text">
            Why Private Lending?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyPrivate.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + 0.08 * i }}
                className="bg-card rounded-2xl p-6 gold-border-glow hover:shadow-[0_10px_40px_hsla(35,85%,48%,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-heading font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-10 text-center gold-gradient-text">Our Process</h3>
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + 0.1 * i }}
                className="flex items-center gap-3"
              >
                <div className="bg-card rounded-2xl px-6 py-4 gold-border-glow flex flex-col gap-2 hover:shadow-[0_10px_40px_hsla(35,85%,48%,0.1)] transition-all duration-300 hover:-translate-y-1 group min-w-[170px]">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                      {step.num}
                    </span>
                    <span className="text-sm font-medium text-foreground">{step.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
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
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-center gold-gradient-text">Who We Help</h3>
            <p className="text-muted-foreground text-center text-sm mb-8">
              We specialize in complex files that traditional lenders decline.
            </p>
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

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Panel — slides up on mobile, scales in on desktop */}
            <motion.div
              className="relative bg-card w-full sm:max-w-lg sm:rounded-3xl rounded-t-3xl shadow-2xl gold-border-glow overflow-hidden flex flex-col"
              style={{ maxHeight: "calc(100dvh - 5rem)" }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky header */}
              <div className="flex items-start gap-3 p-5 pb-4 border-b border-border/50 shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <selected.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-foreground leading-snug flex-1 pr-8">
                  {selected.title}
                </h3>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="overflow-y-auto flex-1 p-5 space-y-5">
                {/* Overview */}
                <p className="text-muted-foreground text-sm leading-relaxed">{selected.details.overview}</p>

                {/* Term badges — 2×2 on mobile, 4 cols on sm+ */}
                <div className="grid grid-cols-2 gap-2.5">
                  <TermBadge label="Max LTV" value={selected.details.terms.ltv} />
                  <TermBadge label="Rate" value={selected.details.terms.rate} />
                  <TermBadge label="Loan Size" value={selected.details.terms.amount} />
                  <TermBadge label="Term" value={selected.details.terms.term} />
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-3 text-xs uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {selected.details.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sticky footer CTA */}
              <div className="p-5 pt-3 border-t border-border/50 shrink-0">
                <button
                  onClick={() => { setSelected(null); navigate("/contact"); }}
                  className="w-full py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors duration-200"
                >
                  Apply for This Product
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LendingSection;
