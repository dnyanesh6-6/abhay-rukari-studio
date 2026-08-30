import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Category } from "@/data/portfolio";
import {
  categoryPath,
  countProjects,
  getProjectsByCategory,
} from "@/data/portfolio";
import { PlaceholderVisual } from "@/components/PlaceholderVisual";
import { useIsTouch } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

type Props = {
  category: Category;
  index: number;
  className?: string;
};

function CardShell({
  category,
  index,
  className,
  aspect,
}: Props & { aspect: string }) {
  const [open, setOpen] = useState(false);
  const touch = useIsTouch();
  const reveal = open;

  const projects = getProjectsByCategory(category.slug);

  const cover = projects.find(
  (project) =>
    project.image ||
    project.thumbnail ||
    project.video,
);

  const coverSrc =
    cover?.image ?? cover?.thumbnail;

  const count = countProjects(category.slug);
  const to = categoryPath(category);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50",
        className,
      )}
      onMouseEnter={() => !touch && setOpen(true)}
      onMouseLeave={() => !touch && setOpen(false)}
      onClick={() => touch && setOpen((value) => !value)}
    >
      {/* IMAGE */}
      <div className={cn("relative w-full overflow-hidden", aspect)}>
        {category.type === "video" && cover?.video ? (
  <video
    src={cover.video}
    className="size-full object-cover"
    muted
    playsInline
    preload="metadata"
  />
) : coverSrc ? (
          <img
            src={coverSrc}
            alt={`${category.title} work`}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        ) : (
          <PlaceholderVisual seed={index + 1} />
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(to top, color-mix(in oklab, var(--background) 92%, transparent), transparent 60%)",
            opacity: reveal ? 1 : 0.75,
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative p-5">

        <h3 className="font-display text-lg tracking-tight md:text-xl">
          {category.title}
        </h3>

        <p className="eyebrow mt-1">
          {category.type === "creative"
            ? "CREATIVES"
            : "VIDEOS"}
        </p>

        {/* HOVER DETAILS */}
        <div
          className="grid transition-[grid-template-rows,opacity] duration-300"
          style={{
            gridTemplateRows: open ? "1fr" : "0fr",
            opacity: open ? 1 : 0,
          }}
        >
          <div className="overflow-hidden">

            <p className="pt-4 text-xs leading-relaxed text-muted-foreground">
              {category.description}
            </p>

            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
              {category.workTypes.map((work) => (
                <li key={work}>
                  {work}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center justify-between">

              <span className="eyebrow">
                {count}{" "}
                {count === 1
                  ? "PROJECT"
                  : "PROJECTS"}
              </span>

              <Link
                to={to}
                className="text-[11px] tracking-[0.2em] text-accent transition-transform duration-300 hover:translate-x-1"
              >
                VIEW PROJECTS →
              </Link>

            </div>

          </div>
        </div>

      </div>

      {/* WHOLE CARD CLICKABLE ON DESKTOP */}
      {!touch && (
        <Link
          to={to}
          className="absolute inset-0"
          aria-label={`View ${category.title} projects`}
        >
          <span className="sr-only">
            View {category.title} projects
          </span>
        </Link>
      )}
    </article>
  );
}

export function CreativeCategoryCard(props: Props) {
  return (
    <CardShell
      {...props}
      aspect="aspect-[4/3]"
    />
  );
}

export function VideoCategoryCard(props: Props) {
  return (
    <CardShell
      {...props}
      aspect="aspect-video"
    />
  );
}