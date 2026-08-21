import { motion } from "framer-motion";
import DownloadCTA from "@/components/DownloadCTA";

const MidCTA = () => {
  return (
    <section className="relative bg-teal-deep text-white py-28 md:py-36 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, hsla(164,55%,40%,0.35), transparent 70%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/60 mb-6"
        >
          + live on google play
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif-display text-5xl md:text-7xl leading-[1.02]"
        >
          stop the leaks <br />
          in your <em className="italic text-primary">bank account.</em>
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12"
        >
          <DownloadCTA location="mid_cta" />
        </motion.div>
      </div>
    </section>
  );
};

export default MidCTA;
