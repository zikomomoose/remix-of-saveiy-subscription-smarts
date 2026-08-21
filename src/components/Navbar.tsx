import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoDark from "@/assets/saveiy-logo.png";
import logoLight from "@/assets/saveiy-logo-white.png";
import { trackButtonClick } from "@/lib/analytics";
import { PLAY_STORE_URL } from "@/lib/app-links";

const navItems = [
  { label: "Product", to: "/product" },
  { label: "How it works", to: "/how-it-works" },
  { label: "About", to: "/about" },
  { label: "Team", to: "/about#team" },
  { label: "Blog", to: "/blog" },
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const dark = onHome;
  const base = dark
    ? scrolled
      ? "bg-ink/85 backdrop-blur-xl border-b border-white/10"
      : "bg-transparent border-b border-transparent"
    : "bg-background/90 backdrop-blur-xl border-b border-border";

  const fg = dark ? "text-white" : "text-foreground";
  const ctaCls = "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${base}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold ${fg} opacity-90 hover:opacity-100`}
          >
            <Menu size={20} strokeWidth={2.2} />
            <span className="hidden sm:inline">Menu</span>
          </button>

          <Link to="/" className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2" aria-label="Saveiy home">
            <img src={dark ? logoLight : logoDark} alt="Saveiy" className="h-9 md:h-11 w-auto" />
          </Link>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackButtonClick("download_android", "navbar")}
            className={`px-4 md:px-5 py-2 md:py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold rounded-full transition-all duration-300 ${ctaCls}`}
          >
            Get the app
          </a>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-ink text-white"
          >
            <div className="flex items-center justify-between h-16 md:h-20 px-5 md:px-10 border-b border-white/10">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
                <img src={logoLight} alt="Saveiy" className="h-10 md:h-12 w-auto" />
              </Link>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="border border-white/20 rounded-md p-2 hover:bg-white/5">
                <X size={20} />
              </button>
            </div>

            <div className="grid md:grid-cols-[1fr_1.4fr] h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]">
              <div className="px-6 md:px-12 py-10 overflow-y-auto">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-8">
                  + navigate
                </p>
                <ul className="space-y-1">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.to}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between border-b border-white/10 py-5 md:py-6"
                      >
                        <span className="font-display text-3xl md:text-5xl tracking-tight group-hover:text-primary transition-colors">
                          {item.label}
                        </span>
                        <ArrowUpRight size={22} className="opacity-40 group-hover:opacity-100 group-hover:text-primary transition" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => { setOpen(false); trackButtonClick("download_android", "menu"); }}
                  className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.22em] font-bold hover:bg-primary/90 transition-colors"
                >
                  Download on Google Play
                </a>
                <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-white/40">iOS coming soon</p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="hidden md:block relative m-6 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-deep to-ink-2 border border-white/10"
              >
                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-black/60 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] font-bold rounded">
                      Live
                    </span>
                    <h3 className="mt-6 font-display text-4xl lg:text-5xl tracking-tight leading-[1.05] max-w-md">
                      Now live on Google Play.
                    </h3>
                    <p className="mt-4 text-sm text-white/70 max-w-md leading-relaxed">
                      One tracker for UPI mandates, card auto-renewals, OTT and SaaS — with smart Indian alternatives. iOS coming soon.
                    </p>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
                    Saveiy · Made in India
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
