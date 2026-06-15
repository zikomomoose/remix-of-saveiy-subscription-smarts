import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
      <Link to="/" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] text-primary hover:text-primary/80 mb-8 transition-colors">
        <ArrowLeft size={14} /> Back
      </Link>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">About Saveiy</h1>
        <div className="text-sm text-muted-foreground space-y-4 leading-relaxed">
          <p>
            Saveiy is a subscription intelligence platform built to help people take control of their recurring expenses. 
            We believe no one should pay for services they don't use — or overpay when better alternatives exist.
          </p>
          <p>
            Our mission is simple: make subscription management effortless. We automatically detect your active subscriptions, 
            alert you before renewals, and recommend pocket-friendly alternatives so you save money without sacrificing quality.
          </p>
          <p>
            Founded in 2026 by Corewave Innovations Pvt. Ltd., Saveiy is built by a team passionate about personal finance and smart spending. 
            We're currently in early access — join our waitlist to be among the first to experience smarter subscription management.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-3">
          <div className="border border-border bg-secondary/40 px-5 py-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">Incubation</p>
            <p className="text-xs font-bold uppercase tracking-widest leading-snug">
              Incubated at Symbiosis Centre for Innovation &amp; Entrepreneurship (SCIE)
            </p>
          </div>
          <div className="border border-border bg-secondary/40 px-5 py-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">Recognition</p>
            <p className="text-xs font-bold uppercase tracking-widest leading-snug">
              Approved under iStart Rajasthan
            </p>
          </div>
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default About;
