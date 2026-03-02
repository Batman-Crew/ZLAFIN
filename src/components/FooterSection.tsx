import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative border-t border-border py-16 bg-secondary/20 backdrop-blur-sm">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        <div>
          <span className="font-heading text-xl font-bold gold-gradient-text tracking-wider block mb-4">
            ZLAFIN
          </span>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Private Mortgage & Investment Solutions across Canada. Bridging the gap between borrowers and investors.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 text-foreground">Navigation</h4>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "How It Works", href: "/how-it-works" },
            ].map((item) => (
              <Link key={item.label} to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 text-foreground">Services</h4>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Lending", href: "/lending" },
              { label: "Investing", href: "/invest" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link key={item.label} to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 text-foreground">Legal</h4>
          <div className="flex flex-col gap-2.5">
            {["Privacy Policy", "Terms of Service", "Compliance"].map((item) => (
              <a key={item} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} ZLAFIN. All rights reserved.
        </p>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
          whileHover={{ y: -2 }}
        >
          Back to top
          <svg className="w-4 h-4 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </div>
  </footer>
);

export default Footer;
