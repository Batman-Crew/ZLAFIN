import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionDividerProps {
  variant?: "wave" | "curve" | "angle";
  flip?: boolean;
}

const SectionDivider = ({ variant = "wave", flip = false }: SectionDividerProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const paths = {
    wave: "M0,40 C150,80 350,0 500,40 C650,80 850,0 1000,40 L1000,100 L0,100 Z",
    curve: "M0,60 Q250,0 500,40 Q750,80 1000,20 L1000,100 L0,100 Z",
    angle: "M0,80 L400,20 L600,20 L1000,80 L1000,100 L0,100 Z",
  };

  return (
    <div ref={ref} className={`relative w-full h-20 md:h-28 overflow-hidden ${flip ? "rotate-180" : ""}`}>
      <motion.svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <defs>
          <linearGradient id="dividerGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(35, 85%, 48%)" stopOpacity="0.03" />
            <stop offset="50%" stopColor="hsl(35, 85%, 48%)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(35, 85%, 48%)" stopOpacity="0.03" />
          </linearGradient>
        </defs>
        <motion.path
          d={paths[variant]}
          fill="url(#dividerGrad)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        />
        <motion.path
          d={paths[variant]}
          fill="none"
          stroke="hsla(35, 85%, 48%, 0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 2 }}
        />
      </motion.svg>
    </div>
  );
};

export default SectionDivider;
