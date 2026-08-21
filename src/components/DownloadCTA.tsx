import { Apple, Play } from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/app-links";
import { trackButtonClick } from "@/lib/analytics";

type Props = {
  location: string;
  /** dark = on ink/teal backgrounds, light = on white backgrounds */
  tone?: "dark" | "light";
  size?: "sm" | "md";
  align?: "center" | "start";
  className?: string;
  showIos?: boolean;
};

const DownloadCTA = ({
  location,
  tone = "dark",
  size = "md",
  align = "center",
  className = "",
  showIos = true,
}: Props) => {
  const pad = size === "sm" ? "px-6 py-3 text-[10px]" : "px-8 py-4 text-xs";
  const iosCls =
    tone === "dark"
      ? "border-white/20 text-white/70"
      : "border-border text-muted-foreground";

  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${
        align === "center" ? "justify-center" : "justify-start"
      } ${className}`}
    >
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackButtonClick("download_android", location)}
        className={`group inline-flex items-center gap-2.5 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-[0.22em] ${pad}
                    transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/90 shadow-[0_12px_30px_-12px_hsl(var(--primary)/0.8)]`}
      >
        <Play size={size === "sm" ? 13 : 15} className="fill-current" />
        Get it on Google Play
      </a>

      {showIos && (
        <span
          className={`inline-flex items-center gap-2 rounded-full border ${iosCls} ${pad} font-semibold uppercase tracking-[0.22em]`}
        >
          <Apple size={size === "sm" ? 13 : 15} /> iOS coming soon
        </span>
      )}
    </div>
  );
};

export default DownloadCTA;
