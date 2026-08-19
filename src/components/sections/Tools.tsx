import { tools } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function Tools() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id="tools" className="relative bg-background">
      <div ref={ref} className={cn("section-shell reveal", shown && "reveal-in")}>
        <p className="eyebrow">04 — TOOLS</p>

        <div className="mt-12 flex flex-wrap gap-4 md:gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              tabIndex={0}
              className="group relative flex size-20 items-center justify-center rounded-2xl border border-border bg-surface transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-accent/60 focus-visible:-translate-y-1 md:size-24"
              aria-label={tool.name}
            >
              <span
                className="font-display text-2xl font-semibold md:text-3xl"
                style={{ color: tool.tint }}
              >
                {tool.mark}
              </span>
              <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-full border border-border bg-surface px-2.5 py-1 text-[10px] tracking-[0.16em] whitespace-nowrap text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
