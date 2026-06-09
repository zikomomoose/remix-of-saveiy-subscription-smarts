import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Features", id: "features" },
  { label: "Saveiy Edge", id: "saveiy-edge" },
  { label: "Trust", id: "faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("top")} className="text-xl font-bold tracking-tighter uppercase">
          Saveiy
        </button>

        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("early-access")}
          className="hidden md:inline-flex bg-foreground text-background px-6 py-2.5 text-[11px] uppercase tracking-widest font-bold hover:bg-primary transition-all"
        >
          Join Waitlist
        </button>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-[11px] uppercase tracking-[0.2em] text-muted-foreground py-2"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("early-access")}
                className="text-[11px] uppercase tracking-widest font-bold px-5 py-3 bg-foreground text-background mt-2"
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
