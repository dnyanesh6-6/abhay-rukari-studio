import { useState } from "react";
import { creativeCategories, videoCategories } from "@/data/portfolio";
import {
  CreativeCategoryCard,
  VideoCategoryCard,
} from "@/components/work/CategoryCard";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

type WorkGroupType = "creatives" | "videos" | null;

function MainWorkCard({
  title,
  subtitle,
  index,
  active,
  onClick,
}: {
  title: string;
  subtitle: string;
  index: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative min-h-[280px] overflow-hidden rounded-2xl border text-left transition-all duration-500 md:min-h-[420px]",
        active
          ? "border-accent bg-surface"
          : "border-border bg-surface hover:-translate-y-1 hover:border-accent/50",
      )}
    >
      <div className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-105">
        <div
          className={cn(
            "absolute inset-0",
            title === "CREATIVES"
              ? "bg-[radial-gradient(circle_at_20%_20%,rgba(255,94,0,0.35),transparent_45%)]"
              : "bg-[radial-gradient(circle_at_80%_20%,rgba(255,94,0,0.35),transparent_45%)]",
          )}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

      <div className="relative flex h-full min-h-[280px] flex-col justify-between p-6 md:min-h-[420px] md:p-10">
        <div className="flex items-start justify-between">
          <span className="eyebrow">{index}</span>

          <span
            className={cn(
              "text-xl transition-transform duration-300",
              active
                ? "rotate-45 text-accent"
                : "group-hover:translate-x-1",
            )}
          >
            ↗
          </span>
        </div>

        <div>
          <h3 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {title}
          </h3>

          <p className="mt-3 max-w-sm text-sm text-muted-foreground md:text-base">
            {subtitle}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="eyebrow text-accent">
              {active ? "CLOSE CATEGORIES" : "EXPLORE WORK"}
            </span>

            <span
              className={cn(
                "transition-transform duration-300",
                active && "rotate-90 text-accent",
              )}
            >
              →
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

export function WorkSection() {
  const [activeGroup, setActiveGroup] =
    useState<WorkGroupType>(null);

  const { ref, shown } = useReveal<HTMLDivElement>();

  const toggleGroup = (group: WorkGroupType) => {
    setActiveGroup((current) =>
      current === group ? null : group,
    );
  };

  return (
    <section id="work" className="relative bg-background">
      <div className="section-shell">

        <p className="eyebrow">03 — WORK</p>

        <h2 className="font-display mt-6 max-w-3xl text-[clamp(1.9rem,5vw,3.6rem)] leading-[1.05] font-semibold">
          Selected work across{" "}
          <span className="text-accent">design</span> and{" "}
          <span className="text-accent">motion</span>.
        </h2>

        {/* ONLY TWO MAIN CARDS */}
        <div
          ref={ref}
          className={cn(
            "reveal mt-16 grid gap-5 md:grid-cols-2",
            shown && "reveal-in",
          )}
        >
          <MainWorkCard
            title="CREATIVES"
            subtitle="Explore design, branding, campaigns and visual communication."
            index="01"
            active={activeGroup === "creatives"}
            onClick={() => toggleGroup("creatives")}
          />

          <MainWorkCard
            title="VIDEOS"
            subtitle="Explore social media reels, AI videos and motion graphics."
            index="02"
            active={activeGroup === "videos"}
            onClick={() => toggleGroup("videos")}
          />
        </div>

        {/* CREATIVES */}
        <div
          className={cn(
            "grid transition-all duration-500 ease-out",
            activeGroup === "creatives"
              ? "mt-10 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">

            <div className="border-b border-border pb-5">
              <div className="flex items-end justify-between gap-6">

                <h3 className="font-display text-[clamp(1.6rem,4vw,3rem)] leading-none font-semibold">
                  CREATIVES
                </h3>

                <span className="eyebrow">
                  {creativeCategories.length
                    .toString()
                    .padStart(2, "0")}{" "}
                  CATEGORIES
                </span>

              </div>
            </div>

            {/* 4 CARDS PER ROW */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {creativeCategories.map((category, i) => (
                <CreativeCategoryCard
                  key={category.slug}
                  category={category}
                  index={i}
                />
              ))}
            </div>

          </div>
        </div>

        {/* VIDEOS */}
        <div
          className={cn(
            "grid transition-all duration-500 ease-out",
            activeGroup === "videos"
              ? "mt-10 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">

            <div className="border-b border-border pb-5">
              <div className="flex items-end justify-between gap-6">

                <h3 className="font-display text-[clamp(1.6rem,4vw,3rem)] leading-none font-semibold">
                  VIDEOS
                </h3>

                <span className="eyebrow">
                  {videoCategories.length
                    .toString()
                    .padStart(2, "0")}{" "}
                  CATEGORIES
                </span>

              </div>
            </div>

            {/* ALSO 4 PER ROW */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {videoCategories.map((category, i) => (
                <VideoCategoryCard
                  key={category.slug}
                  category={category}
                  index={i + creativeCategories.length}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}