import { useState } from "react";
import { experiences } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const [active, setActive] = useState(0);
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="relative bg-surface/40">
      <div ref={ref} className={cn("section-shell reveal", shown && "reveal-in")}>
        <p className="eyebrow">02 — EXPERIENCE</p>

        <ul className="mt-10 divide-y divide-border border-y border-border">
          {experiences.map((exp, i) => {
            const isActive = active === i;
            return (
              <li key={exp.company}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-expanded={isActive}
                  className="group grid w-full grid-cols-1 items-baseline gap-2 py-8 text-left transition-colors md:grid-cols-[auto_1fr_auto] md:gap-8"
                >
                  <span
                    className={cn(
                      "font-display text-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:text-4xl",
                      isActive ? "translate-x-2 text-accent" : "text-foreground",
                    )}
                  >
                    {exp.company}
                  </span>
                  <span className="text-xs tracking-[0.16em] text-muted-foreground md:text-right">
                    {exp.role.toUpperCase()}
                  </span>
                  <span className="flex items-center gap-2 text-xs tracking-[0.16em] text-muted-foreground">
                    {exp.current && <span className="size-1.5 rounded-full bg-accent" />}
                    {exp.period}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ maxHeight: isActive ? 120 : 0, opacity: isActive ? 1 : 0 }}
                >
                  <p className="pb-8 text-sm text-muted-foreground">
                    {exp.role} at {exp.company} · {exp.period}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
