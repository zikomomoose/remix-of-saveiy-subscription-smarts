import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  separator?: string;
  startOnMount?: boolean;
}

const formatNumber = (n: number, decimals: number, separator: string) => {
  const fixed = n.toFixed(decimals);
  const [intPart, decPart] = fixed.split(".");
  const withSep = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return decPart ? `${withSep}.${decPart}` : withSep;
};

const CountUp = ({
  end,
  duration = 1.6,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ",",
  className,
  startOnMount = false,
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState(formatNumber(0, decimals, separator));

  useEffect(() => {
    if (startOnMount || inView) mv.set(end);
  }, [inView, end, mv, startOnMount]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      setDisplay(formatNumber(v, decimals, separator));
    });
    return () => unsub();
  }, [spring, decimals, separator]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default CountUp;
