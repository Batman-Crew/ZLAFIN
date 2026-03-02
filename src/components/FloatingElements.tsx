import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

const FloatingElements = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  const elements = useMemo(
    () => [
      { style: { y: y1, rotate: rotate1 }, className: "top-[20%] left-[5%] w-16 h-16", shape: "diamond" },
      { style: { y: y2, rotate: rotate2 }, className: "top-[40%] right-[8%] w-12 h-12", shape: "circle" },
      { style: { y: y3, rotate: rotate1 }, className: "top-[60%] left-[10%] w-10 h-10", shape: "square" },
      { style: { y: y1, rotate: rotate2 }, className: "top-[75%] right-[5%] w-14 h-14", shape: "triangle" },
      { style: { y: y2 }, className: "top-[35%] left-[85%] w-8 h-8", shape: "dot" },
      { style: { y: y3 }, className: "top-[55%] left-[3%] w-6 h-6", shape: "dot" },
    ],
    [y1, y2, y3, rotate1, rotate2]
  );

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none z-[2] overflow-hidden hidden lg:block">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          style={el.style}
          className={`absolute ${el.className}`}
        >
          {el.shape === "diamond" && (
            <svg viewBox="0 0 50 50" className="w-full h-full">
              <motion.rect
                x="10" y="10" width="30" height="30" rx="4"
                fill="none"
                stroke="hsl(35, 85%, 50%)"
                strokeWidth="1"
                opacity="0.1"
                transform="rotate(45 25 25)"
              />
            </svg>
          )}
          {el.shape === "circle" && (
            <svg viewBox="0 0 50 50" className="w-full h-full">
              <circle cx="25" cy="25" r="20" fill="none" stroke="hsl(35, 85%, 50%)" strokeWidth="1" opacity="0.08" />
            </svg>
          )}
          {el.shape === "square" && (
            <svg viewBox="0 0 50 50" className="w-full h-full">
              <rect x="10" y="10" width="30" height="30" rx="3" fill="hsl(35, 85%, 50%)" opacity="0.04" />
            </svg>
          )}
          {el.shape === "triangle" && (
            <svg viewBox="0 0 50 50" className="w-full h-full">
              <polygon points="25,5 45,40 5,40" fill="none" stroke="hsl(35, 85%, 50%)" strokeWidth="1" opacity="0.08" />
            </svg>
          )}
          {el.shape === "dot" && (
            <svg viewBox="0 0 50 50" className="w-full h-full">
              <circle cx="25" cy="25" r="8" fill="hsl(35, 85%, 50%)" opacity="0.05" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
