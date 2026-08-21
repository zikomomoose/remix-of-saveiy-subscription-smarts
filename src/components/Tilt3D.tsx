import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

type Tilt3DProps = {
  children: React.ReactNode;
  className?: string;
  /** Max rotation in degrees. */
  intensity?: number;
  /** Lift on hover, in px. */
  lift?: number;
  perspective?: number;
};

/**
 * Pointer-driven 3D tilt wrapper. Purely presentational — respects
 * prefers-reduced-motion and falls back to a static container.
 */
const Tilt3D = ({
  children,
  className = "",
  intensity = 10,
  lift = 10,
  perspective = 1000,
}: Tilt3DProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 180, damping: 18, mass: 0.6 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const rotateY = useTransform(sx, [-0.5, 0.5], [-intensity, intensity]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [intensity, -intensity]);

  if (reduce) return <div className={className}>{children}</div>;

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div ref={ref} className={className} style={{ perspective }} onPointerMove={onMove} onPointerLeave={reset}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ translateZ: lift, scale: 1.015 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Tilt3D;
