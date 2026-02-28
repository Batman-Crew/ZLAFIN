import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Lending", href: "#lending" },
  { label: "Invest", href: "#invest" },
  { label: "Contact", href: "#contact" },
];

const GlossyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-navbar py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#home" className="relative z-10">
          <span className="font-heading text-2xl font-bold gold-gradient-text tracking-wider">
            ZLAFIN
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-5 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary rounded-lg hover:bg-primary/5 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-3/4 rounded-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_hsla(40,85%,55%,0.3)] hover:scale-105"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden relative z-10 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-navbar overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default GlossyNavbar;
