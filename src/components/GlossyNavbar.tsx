import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Lending", href: "/lending" },
  { label: "Invest", href: "/invest" },
  { label: "Contact", href: "/contact" },
];

const GlossyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

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
        scrolled ? "glass-navbar py-3" : "py-5 bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="relative z-10">
          <span className="font-heading text-2xl font-bold gold-gradient-text tracking-wider">
            ZLAFIN
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group ${
                location.pathname === item.href
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 rounded-full ${
                location.pathname === item.href ? "w-3/4" : "w-0 group-hover:w-3/4"
              }`} />
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:shadow-[0_4px_20px_hsla(35,85%,48%,0.3)] hover:scale-105"
          >
            Get Started
          </Link>
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
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 transition-colors rounded-lg ${
                    location.pathname === item.href
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default GlossyNavbar;
