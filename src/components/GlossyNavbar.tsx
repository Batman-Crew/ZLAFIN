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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-navbar py-2" : "py-4 bg-transparent backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link to="/" className="relative z-10 group">
            <motion.span
              className="font-heading text-2xl font-bold gold-gradient-text tracking-wider inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              ZLAFIN
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  location.pathname === item.href ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                }`}>
                  {item.label}
                </span>
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/8 rounded-lg"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:shadow-[0_4px_25px_hsla(35,85%,48%,0.35)] hover:scale-105 active:scale-95 relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </div>

          <motion.button
            className="md:hidden relative z-10 text-foreground w-10 h-10 flex items-center justify-center rounded-lg hover:bg-primary/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="md:hidden overflow-hidden backdrop-blur-2xl bg-background/95 border-t border-primary/10"
            >
              <div className="flex flex-col px-6 py-4 gap-1">
                {navItems.map((item, i) => (
                  <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3 transition-all rounded-lg block ${
                        location.pathname === item.href ? "text-primary bg-primary/8 font-medium" : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
  );
};

export default GlossyNavbar;
