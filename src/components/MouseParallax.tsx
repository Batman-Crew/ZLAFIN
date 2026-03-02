import { useEffect, useState, type ReactNode } from "react";
import { motion, useSpring } from "framer-motion";

interface MouseParallaxProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

const MouseParallax = ({ children, strength = 20, className = "" }: MouseParallaxProps) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const springX = useSpring(0, { stiffness: 50, damping: 20 });
  const springY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * strength;
      const y = (e.clientY / window.innerHeight - 0.5) * strength;
      setMouse({ x, y });
      springX.set(x);
      springY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [strength, springX, springY]);

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};

export default MouseParallax;
