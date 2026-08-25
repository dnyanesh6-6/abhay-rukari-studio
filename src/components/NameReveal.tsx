import { useEffect, useState } from "react";
import { identity } from "@/data/portfolio";
import { usePrefersReducedMotion } from "@/hooks/useReveal";

const STORAGE_KEY = "abhay-name-reveal-seen";

/** Fast cinematic name reveal shown only once per browser session. */
export function NameReveal({ onDone }: { onDone?: () => void }) {
  const reduced = usePrefersReducedMotion();

  const [gone, setGone] = useState(() => {
    if (typeof window === "undefined") return false;

    return sessionStorage.getItem(STORAGE_KEY) === "true";
  });

  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Already shown during this browser session
    if (gone) {
      onDone?.();
      return;
    }

    // Reduced motion: skip animation
    if (reduced) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setGone(true);
      onDone?.();
      return;
    }

    const t1 = setTimeout(() => {
      setLeaving(true);
    }, 1100);

    const t2 = setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setGone(true);
      onDone?.();
    }, 1750);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [reduced, gone, onDone]);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[90] flex items-center justify-center bg-background transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        opacity: leaving ? 0 : 1,
        transform: leaving
          ? "translateY(-2%) scale(1.02)"
          : "none",
      }}
    >
      <div className="overflow-hidden px-6">
        <h1 className="font-display rise text-[clamp(2rem,9vw,6rem)] leading-[0.95] font-semibold">
          {identity.firstName}{" "}
          <span className="text-accent">
            {identity.lastName}
          </span>
        </h1>
      </div>

      <span className="absolute bottom-10 h-px w-40 overflow-hidden bg-border">
        <span className="block h-full w-full origin-left bg-accent [animation:rise-in_1.2s_cubic-bezier(0.16,1,0.3,1)_both]" />
      </span>
    </div>
  );
}