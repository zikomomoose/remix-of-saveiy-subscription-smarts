import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/saveiy-logo.png";

const navItems = ["Features", "Saveiy Edge", "Trust"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/\s/g, "-"));
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <img src={logo} alt="Saveiy" className="h-9" />

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo("early-access")}
            className="text-xs uppercase tracking-[0.1em] font-medium px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-lg"
          >
            Join Waitlist
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border/60"
          >
            <div className="px-6 py-5 flex flex-col gap-3 bg-background">
              {navItems.map((item) => (
                <button key={item} onClick={() => scrollTo(item)} className="text-left text-xs uppercase tracking-[0.1em] text-muted-foreground py-2">
                  {item}
                </button>
              ))}
              <button onClick={() => scrollTo("early-access")} className="text-xs uppercase tracking-[0.1em] font-medium px-5 py-3 bg-primary text-primary-foreground mt-2 rounded-lg">
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
