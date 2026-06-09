import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/saveiy-logo.png";

const Footer = () => {
  const location = useLocation();

  const handleWaitlist = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <img src={logo} alt="Saveiy" className="h-7" />
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground/60">Know what is renewing</span>
          </div>

          <Link
            to="/#early-access"
            onClick={handleWaitlist}
            className="group px-6 py-3 bg-primary text-primary-foreground font-medium text-[11px] uppercase tracking-[0.14em] hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2 rounded-xl shadow-md shadow-primary/20"
          >
            Join Waitlist
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/about" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/privacy-policy" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors">Terms</Link>
            <Link to="/blog" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors">Blog</Link>
            <Link to="/delete" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors">Delete Account</Link>
          </div>
        </div>
        <p className="mt-6 text-center text-[10px] text-muted-foreground/40">© 2026 Corewave Innovations Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
