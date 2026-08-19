import { creativeCategories, videoCategories } from "@/data/portfolio";
import { CreativeCategoryCard, VideoCategoryCard } from "@/components/work/CategoryCard";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

function WorkGroup({
  label,
  index,
  children,
}: {
  label: string;
  index: string;
  children: React.ReactNode;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={cn("reveal", shown && "reveal-in")}>
      <div className="flex items-end justify-between gap-6 border-b border-border pb-5">
        <h3 className="font-display text-[clamp(1.6rem,4vw,3rem)] leading-none font-semibold">
          {label}
        </h3>
        <span className="eyebrow">{index}</span>
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="relative bg-background">
      <div className="section-shell">
        <p className="eyebrow">03 — WORK</p>
        <h2 className="font-display mt-6 max-w-3xl text-[clamp(1.9rem,5vw,3.6rem)] leading-[1.05] font-semibold">
          Selected work across <span className="text-accent">design</span> and{" "}
          <span className="text-accent">motion</span>.
        </h2>

        <div className="mt-20 space-y-24">
          <WorkGroup label="CREATIVES" index="06 CATEGORIES">
            {/* Deliberately uneven composition — not a uniform grid. */}
            <div className="grid gap-5 md:grid-cols-6">
              {creativeCategories.map((category, i) => (
                <CreativeCategoryCard
                  key={category.slug}
                  category={category}
                  index={i}
                  className={
                    i === 0
                      ? "md:col-span-4"
                      : i === 1
                        ? "md:col-span-2"
                        : i === 4
                          ? "md:col-span-2"
                          : i === 5
                            ? "md:col-span-4"
                            : "md:col-span-2"
                  }
                />
              ))}
            </div>
          </WorkGroup>

          <WorkGroup label="VIDEOS" index="03 CATEGORIES">
            <div className="grid gap-5 md:grid-cols-3">
              {videoCategories.map((category, i) => (
                <VideoCategoryCard key={category.slug} category={category} index={i + 6} />
              ))}
            </div>
          </WorkGroup>
        </div>
      </div>
    </section>
  );
}
