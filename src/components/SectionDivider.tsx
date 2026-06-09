interface Props {
  number: string;
  label: string;
  hint?: string;
}

const SectionDivider = ({ number, label, hint = "Scroll to explore" }: Props) => (
  <div className="border-t border-border">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between">
      <span className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground">
        {number} / {label}
      </span>
      <span className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground hidden sm:inline">
        {hint}
      </span>
    </div>
  </div>
);

export default SectionDivider;
