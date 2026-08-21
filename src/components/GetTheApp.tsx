import { motion, useReducedMotion } from "framer-motion";
import { Bell, ShieldCheck, Smartphone } from "lucide-react";
import DownloadCTA from "@/components/DownloadCTA";
import Tilt3D from "@/components/Tilt3D";

const points = [
  { icon: Smartphone, t: "Live on Android", d: "Download Saveiy from the Google Play Store today." },
  { icon: Bell, t: "Renewal alerts", d: "Know before a mandate or card auto-debit hits." },
  { icon: ShieldCheck, t: "Privacy first", d: "Read-only, encrypted, DPDP Act 2023 aligned." },
];

const GetTheApp = () => {
  const reduce = useReducedMotion();

  return (
    <section id="get-app" className="relative bg-ink text-white py-28 md:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(55% 55% at 70% 30%, hsla(164,55%,40%,0.20), transparent 70%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-6"
          >
            + the app is live
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02]"
          >
            Download Saveiy <span className="text-primary">free.</span>
          </motion.h2>
          <p className="mt-6 text-white/65 text-base md:text-lg max-w-md leading-relaxed">
            Track every subscription, UPI mandate and recurring bill in one place — and cancel
            what you don't use before it renews.
          </p>

          <DownloadCTA location="get_app_section" align="start" className="mt-9" />

          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            {points.map((p) => (
              <div key={p.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p.icon size={16} className="text-primary" />
                <p className="mt-3 text-xs font-bold tracking-tight">{p.t}</p>
                <p className="mt-1 text-[11px] text-white/55 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <Tilt3D intensity={14} lift={20} className="w-[240px] md:w-[280px]">
            <motion.div
              animate={reduce ? undefined : { y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="aspect-[9/19] rounded-[2.4rem] border-[10px] border-black bg-black shadow-[0_40px_90px_-25px_rgba(0,0,0,0.75)] overflow-hidden"
            >
              <div className="w-full h-full bg-primary text-primary-foreground p-4 flex flex-col">
                <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest opacity-80">
                  <span>9:41</span>
                  <span>saveiy</span>
                </div>
                <div className="mt-5 text-[9px] font-mono uppercase tracking-widest opacity-70">
                  renewing this week
                </div>
                <div className="font-display text-[2.6rem] leading-[0.9] mt-1">₹2,438</div>
                <div className="mt-5 space-y-2">
                  {[
                    ["Netflix Premium", "in 2 days", "₹649"],
                    ["JioHotstar", "in 4 days", "₹499"],
                    ["Spotify Family", "in 6 days", "₹179"],
                  ].map(([n, m, a]) => (
                    <div
                      key={n}
                      className="bg-white/10 backdrop-blur rounded-lg px-3 py-2 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-[11px] font-bold leading-tight">{n}</div>
                        <div className="text-[9px] font-mono opacity-70 mt-0.5">{m}</div>
                      </div>
                      <div className="text-[11px] font-mono font-bold">{a}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto bg-black text-white rounded-md py-2.5 text-[10px] uppercase tracking-widest font-bold text-center">
                  manage renewals
                </div>
              </div>
            </motion.div>
          </Tilt3D>
        </motion.div>
      </div>
    </section>
  );
};

export default GetTheApp;
