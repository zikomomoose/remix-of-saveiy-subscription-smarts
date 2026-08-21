import { Link } from "react-router-dom";
import { Award, Building2, Instagram, Linkedin, Lock, ShieldCheck } from "lucide-react";
import logo from "@/assets/saveiy-logo-white.png";
import { PLAY_STORE_URL } from "@/lib/app-links";


const Footer = () => {
  return (
    <footer className="bg-ink text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: <Building2 size={18} />, text: "Incubated at SCIE Pune" },
            { icon: <Award size={18} />, text: "Recognised under iStart Rajasthan" },
            { icon: <ShieldCheck size={18} />, text: "Bank-grade 256-bit encryption" },
            { icon: <Lock size={18} />, text: "DPDP Act 2023 compliant" },
          ].map((b, i) => (
            <div key={i} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
              <span className="text-primary shrink-0 mt-0.5">{b.icon}</span>
              <p className="text-[11px] uppercase tracking-[0.18em] font-semibold leading-snug text-white/85">
                {b.text}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-start border-t border-white/10 pt-12">
          <div className="flex items-start gap-3">
            <img src={logo} alt="Saveiy logo" className="h-12 md:h-14 w-auto" />
            <div>
              <div className="font-display text-2xl leading-none">Saveiy</div>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                know what's renewing
              </p>
              <p className="mt-3 text-xs text-white/55 leading-relaxed max-w-xs">
                India's smart subscription manager &amp; bill tracker. Built by Corewave Innovations Pvt. Ltd.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-[10px] uppercase tracking-[0.18em] font-semibold">
            <div className="space-y-3">
              <p className="text-white/40">Product</p>
              <Link to="/product" className="block text-white/85 hover:text-primary transition-colors">Product</Link>
              <Link to="/how-it-works" className="block text-white/85 hover:text-primary transition-colors">How it works</Link>
              <Link to="/blog" className="block text-white/85 hover:text-primary transition-colors">Blog</Link>
            </div>
            <div className="space-y-3">
              <p className="text-white/40">Company</p>
              <Link to="/about" className="block text-white/85 hover:text-primary transition-colors">About</Link>
              <Link to="/about#team" className="block text-white/85 hover:text-primary transition-colors">Team</Link>
              <Link to="/privacy" className="block text-white/85 hover:text-primary transition-colors">Privacy</Link>
              <Link to="/terms" className="block text-white/85 hover:text-primary transition-colors">Terms</Link>
            </div>
          </div>

          <div className="md:text-right">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground rounded-full px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5"
            >
              Get it on Google Play
            </a>
            <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/40">
              Live on Android · iOS coming soon
            </p>
            <div className="mt-5 flex gap-3 md:justify-end">
              <a
                href="https://www.instagram.com/save_iy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Saveiy on Instagram"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-white/85 hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Instagram size={14} /> Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/saveiy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Saveiy on LinkedIn"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-white/85 hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-[10px] uppercase tracking-[0.2em] font-mono text-white/40">
          <span>© 2026 Saveiy. A product of Corewave Innovations Pvt. Ltd.</span>
          <a href="mailto:support@saveiy.com" className="hover:text-primary transition-colors normal-case tracking-[0.12em]">support@saveiy.com</a>
          <span>Live on Android · Made in India 🇮🇳</span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
