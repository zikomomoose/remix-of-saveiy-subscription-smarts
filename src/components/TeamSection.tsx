import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Tilt3D from "@/components/Tilt3D";

export type Member = {
  name: string;
  initials: string;
  role: string;
  linkedin: string;
  bio: string;
};

export const team: Member[] = [
  {
    name: "Rahul Khurana",
    initials: "RK",
    role: "Co-founder & CEO",
    linkedin: "https://www.linkedin.com/in/rahul-khurana1/",
    bio: "Rahul leads product and engineering at Saveiy. He started the company after watching friends and family quietly lose thousands of rupees a year to auto-renewals nobody remembered signing up for. He spends his time on the detection engine that turns messy UPI mandates, card debits and bank statements into a clear picture of what's renewing next.",
  },
  {
    name: "Geetika Doomra",
    initials: "GD",
    role: "Co-founder & CMO",
    linkedin: "https://www.linkedin.com/in/geetikadoomra/",
    bio: "Geetika leads brand, growth and community at Saveiy. She shapes how the product speaks to Indian households — plain language, no finance jargon, no dark patterns. From launch campaigns to the education content that helps people cancel what they don't use, she makes sure every touchpoint earns trust first.",
  },
];

const TeamSection = ({ tone = "dark" }: { tone?: "dark" | "light" }) => {
  const dark = tone === "dark";
  return (
    <section
      id="team"
      className={`${dark ? "bg-ink text-white" : "bg-background text-foreground"} py-24 md:py-32`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className={`text-[10px] font-mono uppercase tracking-[0.3em] mb-5 ${dark ? "text-primary" : "text-primary"}`}>
            + the team
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
            The people behind Saveiy.
          </h2>
          <p className={`mt-5 text-base leading-relaxed ${dark ? "text-white/65" : "text-muted-foreground"}`}>
            A small founding team building recurring-payment intelligence for India, out of
            Corewave Innovations Pvt. Ltd.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Tilt3D intensity={7} className="h-full">
                <article
                  className={`h-full rounded-3xl border p-7 md:p-9 ${
                    dark
                      ? "border-white/10 bg-white/[0.03]"
                      : "border-border bg-secondary/40"
                  }`}
                >
                  <div className="flex items-center gap-4" style={{ transform: "translateZ(30px)" }}>
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shrink-0 bg-gradient-to-br from-primary to-teal-deep flex items-center justify-center shadow-[0_18px_40px_-18px_hsl(var(--primary)/0.9)]">
                      <span className="font-display text-xl md:text-2xl text-primary-foreground tracking-tight">
                        {m.initials}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-none">
                        {m.name}
                      </h3>
                      <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.25em] text-primary">
                        {m.role}
                      </p>
                    </div>
                  </div>

                  <p
                    className={`mt-6 text-sm leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}
                    style={{ transform: "translateZ(18px)" }}
                  >
                    {m.bio}
                  </p>

                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className={`mt-7 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[10px] uppercase tracking-[0.22em] font-semibold transition-colors ${
                      dark
                        ? "border-white/15 text-white/80 hover:border-primary/50 hover:text-primary"
                        : "border-border text-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </article>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
