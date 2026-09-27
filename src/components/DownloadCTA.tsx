import PlayStoreButton from "@/components/PlayStoreButton";
import IosWaitlistModal from "@/components/IosWaitlistModal";

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
      ? "border-white/20 text-white/70 hover:bg-white/5 hover:text-white"
      : "border-border text-muted-foreground hover:bg-secondary hover:text-foreground";

  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${
        align === "center" ? "justify-center" : "justify-start"
      } ${className}`}
    >
      <PlayStoreButton location={location} size={size} />

      {showIos && (
        <IosWaitlistModal
          location={location}
          size={size}
          triggerClassName={`${iosCls} ${pad}`}
        />
      )}
    </div>
  );
};

export default DownloadCTA;
