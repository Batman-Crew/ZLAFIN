import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import Hero3DScene from "./Hero3DScene";

const AnimatedCounter = ({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
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

  return (
    <div ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </div>
  );
};

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.08,
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
};

const AnimatedWords = ({ text, className = "" }: { text: string; className?: string }) => (
  <span className={className}>
    {text.split(" ").map((word, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={wordVariants}
        initial="hidden"
        animate="visible"
        className="inline-block mr-[0.3em]"
      >
        {word}
      </motion.span>
    ))}
  </span>
);

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const stats = [
    { value: 500, suffix: "+", label: "Loans Funded" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 250, prefix: "$", suffix: "M+", label: "Capital Deployed" },
    { value: 15, suffix: "+", label: "Years Experience" },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Rich decorative background */}
      <div className="absolute inset-0 -z-[1] pointer-events-none overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-pattern-lg opacity-60" />
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] gradient-orb-lg rounded-full" />
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] gradient-orb rounded-full" />
        {/* Flowing curves */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
          <path d="M0 200 C360 80, 720 320, 1440 180" stroke="hsl(35, 85%, 48%)" strokeWidth="1.5" strokeOpacity="0.08" />
          <path d="M0 500 C400 380, 800 600, 1440 420" stroke="hsl(35, 85%, 48%)" strokeWidth="1" strokeOpacity="0.06" />
          <path d="M0 700 C350 600, 700 800, 1440 650" stroke="hsl(35, 85%, 48%)" strokeWidth="1" strokeOpacity="0.05" />
        </svg>
        {/* Geometric accents */}
        <svg className="absolute top-24 right-20 w-64 h-64 opacity-[0.06]" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" stroke="hsl(35, 85%, 48%)" strokeWidth="0.8" fill="none" />
          <circle cx="100" cy="100" r="70" stroke="hsl(35, 85%, 48%)" strokeWidth="0.5" fill="none" strokeDasharray="6 8" />
          <circle cx="100" cy="100" r="50" stroke="hsl(35, 85%, 48%)" strokeWidth="0.5" fill="none" />
        </svg>
        <svg className="absolute bottom-40 left-12 w-44 h-44 opacity-[0.05]" viewBox="0 0 200 200">
          <rect x="20" y="20" width="160" height="160" rx="20" stroke="hsl(35, 85%, 48%)" strokeWidth="0.8" fill="none" transform="rotate(12 100 100)" />
          <rect x="45" y="45" width="110" height="110" rx="15" stroke="hsl(35, 85%, 48%)" strokeWidth="0.5" fill="none" transform="rotate(24 100 100)" />
        </svg>
      </div>

      {/* 3D scene – contained to hero only */}
      <Hero3DScene />

      {/* Layered gradient backgrounds */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(35,85%,48%,0.06)_0%,_transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      {/* Main content */}
      <motion.div style={{ opacity }} className="relative z-10 container mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/15 text-primary text-sm font-medium backdrop-blur-md bg-white/50 shadow-[0_2px_20px_hsla(35,85%,48%,0.08)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Private Mortgage & Investment Solutions
          </span>
        </motion.div>

        {/* Headline - word-by-word animation */}
        <div className="max-w-5xl mx-auto mb-8">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.08] text-foreground">
            <AnimatedWords text="Flexible Mortgage" />
            <br className="hidden sm:block" />
            <AnimatedWords text="Solutions &" />
            {" "}
            <motion.span
              className="gold-gradient-text"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              High-Yield
            </motion.span>
            <br className="hidden sm:block" />
            <AnimatedWords text="Investments" />
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A trusted Canadian private mortgage lender helping borrowers access fast,
          flexible funding while offering investors stable, secured returns.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-24"
        >
          <Link
            to="/lending"
            className="group px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-[0_8px_40px_hsla(35,85%,48%,0.35)] hover:scale-[1.03] active:scale-[0.98] relative overflow-hidden inline-flex items-center justify-center gap-2"
          >
            <span className="relative z-10">Apply for a Mortgage</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
          <Link
            to="/invest"
            className="px-8 py-4 rounded-2xl border-2 border-primary/15 text-foreground font-semibold text-lg transition-all duration-300 hover:bg-primary/5 hover:border-primary/30 hover:scale-[1.03] active:scale-[0.98] backdrop-blur-md inline-flex items-center justify-center gap-2"
          >
            Start Investing
            <ArrowRight className="w-5 h-5 text-primary" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.4 + i * 0.1, duration: 0.6 }}
              className="group bg-white/60 backdrop-blur-xl rounded-2xl p-5 md:p-6 border border-primary/8 hover:border-primary/20 transition-all duration-500 hover:shadow-[0_10px_40px_hsla(35,85%,48%,0.08)] hover:-translate-y-1"
            >
              <div className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold gold-gradient-text mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} />
              </div>
              <div className="text-muted-foreground text-xs md:text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
