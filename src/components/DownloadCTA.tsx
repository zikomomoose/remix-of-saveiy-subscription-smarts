import { QRCodeSVG } from "qrcode.react";
import PlayStoreButton from "@/components/PlayStoreButton";
import IosWaitlistModal from "@/components/IosWaitlistModal";
import { PLAY_STORE_URL } from "@/lib/app-links";

type Props = {
  location: string;
  /** dark = on ink/teal backgrounds, light = on white backgrounds */
  tone?: "dark" | "light";
  size?: "sm" | "md";
  align?: "center" | "start";
  className?: string;
  showIos?: boolean;
  /** Show a single desktop-only QR card beside the buttons */
  showQrCard?: boolean;
};

const DownloadCTA = ({
  location,
  tone = "dark",
  size = "md",
  align = "center",
  className = "",
  showIos = true,
  showQrCard = false,
}: Props) => {
  const iosCls =
    tone === "dark"
      ? "border-white/20 text-white/70 hover:bg-white/5 hover:text-white"
      : "border-border text-muted-foreground hover:bg-secondary hover:text-foreground";

  const buttons = (
    <div
      className={`flex ${showQrCard ? "flex-nowrap" : "flex-wrap"} items-center gap-3 ${
        align === "center" ? "justify-center" : "justify-start"
      } ${showQrCard ? "" : className}`}
    >
      <PlayStoreButton location={location} size={size} />
      {showIos && (
        <IosWaitlistModal location={location} size={size} triggerClassName={iosCls} />
      )}
    </div>
  );

  if (!showQrCard) return buttons;

  return (
    <div className={`flex flex-col lg:flex-row lg:items-center gap-6 ${className}`}>
      {buttons}
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scan to download Saveiy on Android"
        className="hidden lg:flex flex-col items-center gap-2 shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] p-3"
      >
        <span className="rounded-lg bg-white p-1.5">
          <QRCodeSVG value={PLAY_STORE_URL} size={72} level="M" />
        </span>
        <span className="text-[9px] uppercase tracking-[0.18em] text-white/55 whitespace-nowrap">
          Scan to download on Android
        </span>
      </a>
    </div>
  );
};

export default DownloadCTA;
