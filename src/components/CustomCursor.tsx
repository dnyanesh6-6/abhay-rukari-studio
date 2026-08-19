import { useEffect, useRef, useState } from "react";
import { useIsTouch, usePrefersReducedMotion } from "@/hooks/useReveal";

/**
 * Small orange dot + trailing ring.
 * Add data-cursor="view" to any element to morph the ring into a VIEW badge.
 * Automatically disabled on touch devices and with reduced motion.
 */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [view, setView] = useState(false);
  const [visible, setVisible] = useState(false);
  const touch = useIsTouch();
  const reduced = usePrefersReducedMotion();
  const disabled = touch || reduced;

  useEffect(() => {
    if (disabled) return;
    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      setVisible(true);
      const target = (e.target as HTMLElement | null)?.closest?.("[data-cursor]");
      setView(target?.getAttribute("data-cursor") === "view");
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [disabled]);

  if (disabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        ref={dot}
        className="absolute -ml-[3px] -mt-[3px] size-1.5 rounded-full bg-accent"
      />
      <div
        ref={ring}
        className="absolute flex items-center justify-center rounded-full border border-accent/60 text-[9px] tracking-[0.24em] text-accent transition-[width,height,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          width: view ? 68 : 30,
          height: view ? 68 : 30,
          marginLeft: view ? -34 : -15,
          marginTop: view ? -34 : -15,
          backgroundColor: view ? "color-mix(in oklab, var(--accent) 16%, transparent)" : "transparent",
        }}
      >
        {view ? "VIEW" : ""}
      </div>
    </div>
  );
}
