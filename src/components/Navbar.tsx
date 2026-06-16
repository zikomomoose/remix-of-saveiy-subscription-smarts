import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/saveiy-logo.png";

const navItems = [
  { label: "Product", id: "features" },
  { label: "Edge", id: "saveiy-edge" },
  { label: "FAQ", id: "faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const dark = onHome;
  const base = dark
    ? scrolled
      ? "bg-ink/85 backdrop-blur-xl border-b border-white/10"
      : "bg-transparent border-b border-transparent"
    : "bg-background/90 backdrop-blur-xl border-b border-border";

  const textMuted = dark ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground";
  const ctaCls = dark
    ? "bg-white text-ink hover:bg-primary hover:text-primary-foreground"
    : "bg-foreground text-background hover:bg-primary";

  const handleNav = (id: string) => {
    if (onHome) scrollTo(id);
    else window.location.href = `/#${id}`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${base}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2" aria-label="Saveiy home">
          <img src={logo} alt="Saveiy" className="h-7 w-auto" />
          <span className={`hidden sm:inline font-display font-bold tracking-tight text-sm uppercase ${dark ? "text-white" : "text-foreground"}`}>
            Saveiy
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-[11px] uppercase tracking-[0.22em] font-medium transition-colors ${textMuted}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleNav("early-access")}
          className={`hidden md:inline-flex px-5 py-2.5 text-[11px] uppercase tracking-widest font-bold rounded-full transition-colors ${ctaCls}`}
        >
          Join Waitlist
        </button>

        <button
          className={`md:hidden ${dark ? "text-white" : "text-foreground"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden overflow-hidden border-t ${dark ? "border-white/10 bg-ink" : "border-border bg-background"}`}
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`text-left text-[11px] uppercase tracking-[0.22em] py-2 ${textMuted}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("early-access")}
                className={`text-[11px] uppercase tracking-widest font-bold px-5 py-3 rounded-full mt-2 ${ctaCls}`}
              >
                Join Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
