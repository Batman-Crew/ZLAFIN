import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax BG */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroBg}
          alt="City skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium mb-8 backdrop-blur-sm bg-primary/5">
            Private Mortgage & Investment Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto"
        >
          Flexible Mortgage Solutions &{" "}
          <span className="gold-gradient-text">High-Yield</span> Investments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          A trusted Canadian private mortgage lender helping borrowers access fast, 
          flexible funding while offering investors stable, secured returns.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#lending"
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_40px_hsla(40,85%,55%,0.35)] hover:scale-105"
          >
            Apply for a Mortgage
          </a>
          <a
            href="#invest"
            className="px-8 py-4 rounded-xl border border-primary/30 text-foreground font-semibold text-lg transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 backdrop-blur-sm"
          >
            Start Investing
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
