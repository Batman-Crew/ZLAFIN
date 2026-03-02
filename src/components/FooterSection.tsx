import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-12 bg-secondary/30">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <span className="font-heading text-xl font-bold gold-gradient-text tracking-wider block mb-3">
            ZLAFIN
          </span>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Private Mortgage & Investment Solutions across Canada.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3 text-foreground">Navigation</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "How It Works", href: "/how-it-works" },
            ].map((item) => (
              <Link key={item.label} to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3 text-foreground">Services</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Lending", href: "/lending" },
              { label: "Investing", href: "/invest" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link key={item.label} to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3 text-foreground">Legal</h4>
          <div className="flex flex-col gap-2">
            {["Privacy", "Terms", "Compliance"].map((item) => (
              <a key={item} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6">
        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()} ZLAFIN. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
