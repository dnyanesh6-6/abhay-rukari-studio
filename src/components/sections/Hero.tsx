import { useEffect, useRef, useState } from "react";
import { identity } from "@/data/portfolio";
import { scrollToSection } from "@/components/FloatingNav";
import { PlaceholderVisual } from "@/components/PlaceholderVisual";

/**
 * Cinematic hero. The headline is split per line and rises in;
 * supporting copy and CTAs follow slightly after.
 */
export function Hero({ start = true }: { start?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  // Hero drifts up + fades as About slides in underneath it.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setProgress(Math.min(1, y / (window.innerHeight || 1)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const delay = (s: number) => ({ animationDelay: start ? `${s}s` : "9999s" });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* atmospheric orange glow */}
      <div
        aria-hidden="true"
        className="drift pointer-events-none absolute -top-40 right-[-10%] size-[36rem] rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)" }}
      />

      <div
        className="section-shell relative grid w-full items-center gap-14 pt-32 pb-24 lg:grid-cols-[1.25fr_0.75fr]"
        style={{
          transform: `translate3d(0, ${-progress * 60}px, 0)`,
          opacity: 1 - progress * 0.85,
          willChange: "transform, opacity",
        }}
      >
        <div>
          <div className="overflow-hidden">
            <p className="eyebrow soft-in" style={delay(0.1)}>
              {identity.name} — {identity.experienceYears} YEARS
            </p>
          </div>

          <h1 className="font-display mt-6 text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.92] font-semibold">
            {identity.tagline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <span className="rise block" style={delay(0.2 + i * 0.1)}>
                  {i === identity.tagline.length - 1 ? (
                    <span className="text-accent-glow">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
          </h1>

          <p className="soft-in mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base" style={delay(0.55)}>
            {identity.intro}
          </p>

          <div className="soft-in mt-10 flex flex-wrap gap-3" style={delay(0.7)}>
            <button
              type="button"
              onClick={() => scrollToSection("work")}
              className="group rounded-full bg-accent px-7 py-3 text-[11px] tracking-[0.2em] text-accent-foreground transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:accent-glow"
            >
              VIEW MY WORK
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="rounded-full border border-border px-7 py-3 text-[11px] tracking-[0.2em] text-foreground transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              LET&apos;S CONNECT
            </button>
          </div>

          <p className="soft-in mt-12 text-[11px] tracking-[0.24em] text-muted-foreground" style={delay(0.85)}>
            {identity.title}
          </p>
        </div>

        {/* PORTRAIT — replace by setting `identity.portrait` in src/data/portfolio.ts */}
       <div
         className="soft-in relative mx-auto w-full max-w-sm"
         style={delay(0.45)}
       >
         <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
           <img
             src="/portfolio/Image.png"
             alt={`Portrait of ${identity.name}`}
             className="size-full object-cover"
             loading="eager"
           />

           <div
             aria-hidden="true"
             className="pointer-events-none absolute inset-0"
             style={{
               background:
                 "linear-gradient(to top, color-mix(in oklab, var(--background) 85%, transparent), transparent 55%)",
             }}
           />
         </div>

        </div>
      </div>
    </section>
  );
}
