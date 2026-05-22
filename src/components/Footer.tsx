import { Link } from "react-router-dom";
import logo from "@/assets/saveiy-logo.png";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Saveiy" className="h-7" />
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground/60">Know what is renewing</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/privacy-policy" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors">Terms</Link>
            <Link to="/blog" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors">Blog</Link>
            <Link to="/delete" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors">Delete Account</Link>
          </div>
        </div>
        <p className="mt-5 text-center text-[10px] text-muted-foreground/40">© 2026 Corewave Innovations Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
