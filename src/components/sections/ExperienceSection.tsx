import { experiences } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="relative bg-surface/40">
      <div
        ref={ref}
        className={cn(
          "section-shell reveal",
          shown && "reveal-in",
        )}
      >
        <p className="eyebrow">02 — EXPERIENCE</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {experiences.map((exp) => (
            <article
              key={exp.company}
              className="
                group
                relative
                min-h-[280px]
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-background
                p-6
                transition-all
                duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:-translate-y-2
                hover:border-accent/60
                hover:bg-accent/10
                hover:shadow-2xl
                md:p-8
              "
            >
              {/* Background hover effect */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-[radial-gradient(circle_at_top_right,rgba(255,94,0,0.18),transparent_55%)]
                "
              />

              <div className="relative flex h-full min-h-[216px] flex-col justify-between">
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <span className="eyebrow">
                    EXPERIENCE
                  </span>

                  {exp.current && (
                    <span className="flex items-center gap-2 text-[10px] tracking-[0.16em] text-accent">
                      <span className="size-2 animate-pulse rounded-full bg-accent" />
                      CURRENT
                    </span>
                  )}
                </div>

                {/* Main content */}
                <div className="mt-10">
                  <h3
                    className="
                      font-display
                      text-3xl
                      leading-tight
                      tracking-tight
                      transition-colors
                      duration-300
                      group-hover:text-accent
                      md:text-4xl
                    "
                  >
                    {exp.company}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {exp.role}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-5">
                  <span className="eyebrow">
                    {exp.period}
                  </span>

                  <span
                    className="
                      text-xl
                      text-muted-foreground
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-accent
                    "
                  >
                    ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}