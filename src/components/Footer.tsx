import { Link, useLocation } from "react-router-dom";
import { Award, Building2, Lock, ShieldCheck } from "lucide-react";
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
    <footer className="border-t border-border py-16 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Trust + credibility row */}
        <div className="mb-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="flex items-start gap-3 border border-border bg-background px-5 py-4">
            <Building2 size={18} className="text-primary shrink-0 mt-0.5" />
            <p className="text-[11px] uppercase tracking-widest font-bold leading-snug">
              Incubated at Symbiosis Centre for Innovation &amp; Entrepreneurship (SCIE), Pune
            </p>
          </div>
          <div className="flex items-start gap-3 border border-border bg-background px-5 py-4">
            <Award size={18} className="text-primary shrink-0 mt-0.5" />
            <p className="text-[11px] uppercase tracking-widest font-bold leading-snug">
              Recognised under iStart Rajasthan (Govt. of Rajasthan)
            </p>
          </div>
          <div className="flex items-start gap-3 border border-border bg-background px-5 py-4">
            <ShieldCheck size={18} className="text-primary shrink-0 mt-0.5" />
            <p className="text-[11px] uppercase tracking-widest font-bold leading-snug">
              Bank-grade 256-bit encryption · Read-only access
            </p>
          </div>
          <div className="flex items-start gap-3 border border-border bg-background px-5 py-4">
            <Lock size={18} className="text-primary shrink-0 mt-0.5" />
            <p className="text-[11px] uppercase tracking-widest font-bold leading-snug">
              DPDP Act 2023 compliant · We never sell your data
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="flex items-start gap-3">
            <img src={logo} alt="Saveiy logo" className="h-8 w-auto" />
            <div>
              <div className="text-xl font-bold tracking-tighter uppercase leading-none">Saveiy</div>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
                Know what's renewing
              </p>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed max-w-xs">
                India's smart subscription manager and bill tracker. Built by Corewave
                Innovations Pvt. Ltd.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-[10px] uppercase tracking-widest font-bold">
            <div className="space-y-3">
              <p className="text-muted-foreground/60">Company</p>
              <Link to="/about" className="block hover:text-primary transition-colors">About</Link>
              <Link to="/blog" className="block hover:text-primary transition-colors">Blog</Link>
              <Link to="/alternatives/netflix" className="block hover:text-primary transition-colors">Alternatives</Link>
            </div>
            <div className="space-y-3">
              <p className="text-muted-foreground/60">Legal</p>
              <Link to="/privacy" className="block hover:text-primary transition-colors">Privacy</Link>
              <Link to="/terms" className="block hover:text-primary transition-colors">Terms</Link>
              <a href="mailto:hello@saveiy.com" className="block hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div className="md:text-right">
            <Link
              to="/#early-access"
              onClick={handleWaitlist}
              className="inline-block bg-foreground text-background px-7 py-3.5 text-[11px] uppercase tracking-widest font-bold hover:bg-primary transition-all"
            >
              Join Waitlist
            </Link>
            <p className="mt-3 text-[10px] uppercase tracking-widest text-muted-foreground/60">
              Early access · Free to join
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-[10px] uppercase tracking-widest font-mono text-muted-foreground/60">
          <span>© 2026 Corewave Innovations Pvt. Ltd.</span>
          <span>Made in India 🇮🇳</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
