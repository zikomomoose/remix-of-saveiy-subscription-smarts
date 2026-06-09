import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const handleWaitlist = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border py-16 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div>
            <div className="text-xl font-bold tracking-tighter uppercase">Saveiy</div>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
              Know what is renewing
            </p>
          </div>

          <Link
            to="/#early-access"
            onClick={handleWaitlist}
            className="bg-foreground text-background px-7 py-3.5 text-[11px] uppercase tracking-widest font-bold hover:bg-primary transition-all"
          >
            Join Waitlist
          </Link>

          <div className="flex flex-wrap gap-6 md:gap-8 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <Link to="/delete" className="hover:text-foreground transition-colors">Delete Account</Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-[10px] uppercase tracking-widest font-mono text-muted-foreground/60">
          <span>© 2026 Corewave Innovations Pvt. Ltd.</span>
          <span>Made in India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
