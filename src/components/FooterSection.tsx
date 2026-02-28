const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-heading text-xl font-bold gold-gradient-text tracking-wider">
          ZLAFIN
        </span>
        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()} ZLAFIN. Private Mortgage & Investment Solutions. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Compliance"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
