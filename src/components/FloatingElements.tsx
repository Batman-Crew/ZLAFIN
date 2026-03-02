import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

const FloatingElements = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.6, 1, 1, 0.6]);

  const elements = useMemo(
    () => [
      { style: { y: y1, rotate: rotate1, opacity }, className: "top-[15%] left-[3%] w-20 h-20", shape: "diamond" },
      { style: { y: y2, rotate: rotate2, opacity }, className: "top-[35%] right-[5%] w-14 h-14", shape: "circle" },
      { style: { y: y3, rotate: rotate1, opacity }, className: "top-[55%] left-[7%] w-12 h-12", shape: "square" },
      { style: { y: y1, rotate: rotate2, opacity }, className: "top-[70%] right-[3%] w-16 h-16", shape: "triangle" },
      { style: { y: y2, opacity }, className: "top-[25%] left-[90%] w-10 h-10", shape: "dot" },
      { style: { y: y3, opacity }, className: "top-[50%] left-[2%] w-8 h-8", shape: "dot" },
      { style: { y: y1, rotate: rotate1, opacity }, className: "top-[85%] left-[15%] w-14 h-14", shape: "hexagon" },
      { style: { y: y2, rotate: rotate2, opacity }, className: "top-[45%] right-[10%] w-10 h-10", shape: "cross" },
    ],
    [y1, y2, y3, rotate1, rotate2, opacity]
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden hidden lg:block">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          style={el.style}
          className={`absolute ${el.className}`}
        >
          {el.shape === "diamond" && (
            <svg viewBox="0 0 50 50" className="w-full h-full">
              <rect x="10" y="10" width="30" height="30" rx="4" fill="none" stroke="hsl(35, 85%, 50%)" strokeWidth="0.8" opacity="0.08" transform="rotate(45 25 25)" />
            </svg>
          )}
          {el.shape === "circle" && (
            <svg viewBox="0 0 50 50" className="w-full h-full">
              <circle cx="25" cy="25" r="20" fill="none" stroke="hsl(35, 85%, 50%)" strokeWidth="0.8" opacity="0.06" />
            </svg>
          )}
          {el.shape === "square" && (
            <svg viewBox="0 0 50 50" className="w-full h-full">
              <rect x="10" y="10" width="30" height="30" rx="3" fill="hsl(35, 85%, 50%)" opacity="0.03" />
            </svg>
          )}
          {el.shape === "triangle" && (
            <svg viewBox="0 0 50 50" className="w-full h-full">
              <polygon points="25,5 45,40 5,40" fill="none" stroke="hsl(35, 85%, 50%)" strokeWidth="0.8" opacity="0.06" />
            </svg>
          )}
          {el.shape === "dot" && (
            <svg viewBox="0 0 50 50" className="w-full h-full">
              <circle cx="25" cy="25" r="6" fill="hsl(35, 85%, 50%)" opacity="0.04" />
            </svg>
          )}
          {el.shape === "hexagon" && (
            <svg viewBox="0 0 50 50" className="w-full h-full">
              <polygon points="25,5 45,15 45,35 25,45 5,35 5,15" fill="none" stroke="hsl(35, 85%, 50%)" strokeWidth="0.8" opacity="0.06" />
            </svg>
          )}
          {el.shape === "cross" && (
            <svg viewBox="0 0 50 50" className="w-full h-full">
              <line x1="15" y1="25" x2="35" y2="25" stroke="hsl(35, 85%, 50%)" strokeWidth="0.8" opacity="0.06" />
              <line x1="25" y1="15" x2="25" y2="35" stroke="hsl(35, 85%, 50%)" strokeWidth="0.8" opacity="0.06" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
