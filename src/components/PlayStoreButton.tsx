import { Play } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { PLAY_STORE_URL } from "@/lib/app-links";
import { trackButtonClick } from "@/lib/analytics";

type Props = {
  location: string;
  label?: string;
  size?: "sm" | "md";
  showQr?: boolean;
  className?: string;
};

const PlayStoreButton = ({
  location,
  label = "Get it on Google Play",
  size = "md",
  showQr = false,
  className = "",
}: Props) => {
  const pad = size === "sm" ? "px-5 py-3 text-[10px]" : "px-8 py-4 text-xs";

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackButtonClick("download_android", location)}
        className={`group inline-flex items-center gap-2.5 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-[0.22em] ${pad} transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/90 shadow-[0_12px_30px_-12px_hsl(var(--primary)/0.8)]`}
      >
        <Play size={size === "sm" ? 13 : 15} className="fill-current" />
        {label}
      </a>
      {showQr && (
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scan to open Saveiy on Google Play"
          className="hidden lg:grid size-14 shrink-0 place-items-center rounded-md bg-background p-1.5 shadow-sm ring-1 ring-border"
        >
          <QRCodeSVG value={PLAY_STORE_URL} size={44} level="M" />
        </a>
      )}
    </div>
  );
};

export default PlayStoreButton;