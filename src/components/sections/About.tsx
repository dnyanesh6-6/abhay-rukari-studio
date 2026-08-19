import { capabilities, identity } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function About() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative bg-background">
      <div ref={ref} className={cn("section-shell reveal", shown && "reveal-in")}>
        <p className="eyebrow">01 — ABOUT ME</p>

        <h2 className="font-display mt-6 max-w-4xl text-[clamp(1.9rem,5vw,3.6rem)] leading-[1.05] font-semibold">
          {identity.title.split(" & ")[0]} <span className="text-accent">&</span>{" "}
          {identity.title.split(" & ")[1]}
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p className="text-foreground/90">{identity.summary}</p>
            <p>{identity.intro}</p>
          </div>

          <div>
            <p className="eyebrow">CAPABILITIES</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {capabilities.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border px-3 py-1.5 text-[11px] tracking-wide text-muted-foreground transition-colors duration-300 hover:border-accent/60 hover:text-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex gap-10">
              <div>
                <p className="font-display text-4xl text-accent">{identity.experienceYears}</p>
                <p className="eyebrow mt-1">YEARS EXPERIENCE</p>
              </div>
              <div>
                <p className="font-display text-4xl">02</p>
                <p className="eyebrow mt-1">CRAFT DISCIPLINES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
