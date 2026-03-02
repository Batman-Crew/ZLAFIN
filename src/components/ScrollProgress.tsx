import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, hsl(35, 85%, 48%), hsl(35, 90%, 60%), hsl(25, 95%, 45%))",
        boxShadow: "0 0 10px hsla(35, 85%, 48%, 0.5), 0 0 30px hsla(35, 85%, 48%, 0.2)",
      }}
    />
  );
};

export default ScrollProgress;
