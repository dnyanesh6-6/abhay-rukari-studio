import { useState } from "react";
import { useRouter } from "@tanstack/react-router";

import type {
  Category,
  Project,
} from "@/data/portfolio";

import { getProjectsByCategory } from "@/data/portfolio";

import { Breadcrumbs } from "@/components/work/Breadcrumbs";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { ProjectModal } from "@/components/work/ProjectModal";
import { RelatedProjects } from "@/components/work/RelatedProjects";

export function CategoryPage({
  category,
}: {
  category: Category;
}) {
  const [open, setOpen] =
    useState<Project | null>(null);

  const projects =
    getProjectsByCategory(category.slug);

  const router = useRouter();

  const backToWork = async () => {
    /*
     * The WorkSection has already saved whether
     * CREATIVES or VIDEOS was open.
     *
     * We now return to the Work section.
     *
     * resetScroll: true
     * -----------------
     * Forget the scroll position from the
     * category page.
     *
     * hashScrollIntoView: true
     * ---------------------
     * Go to #work.
     *
     * Once WorkSection mounts, it reads the
     * saved "creatives" / "videos" value and
     * automatically opens that section.
     */
    await router.navigate({
      to: "/",
      hash: "work",
      resetScroll: true,
      hashScrollIntoView: true,
    });
  };

  return (
    <main className="min-h-screen bg-background pt-28 pb-24">
      <div className="section-shell !py-0">

        {/* BREADCRUMBS */}
        <Breadcrumbs
          items={[
            {
              label: "HOME",
              to: "/",
            },
            {
              label: "WORK",
              to: "/",
              hash: "work",
            },
            {
              label: category.title,
            },
          ]}
        />

        {/* CATEGORY HEADER */}
        <header className="mt-8 border-b border-border pb-10">

          <p className="eyebrow">
            {category.type === "creative"
              ? "CREATIVES"
              : "VIDEOS"}
          </p>

          <h1 className="font-display mt-4 text-[clamp(2.2rem,7vw,5rem)] leading-[0.95] font-semibold">
            {category.title}
          </h1>

          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            {category.description}
          </p>

          <p className="eyebrow mt-6">
            {projects.length}{" "}
            {projects.length === 1
              ? "PROJECT"
              : "PROJECTS"}
          </p>

        </header>

        {/* PROJECTS */}
        <div className="mt-12">
          <ProjectGrid
            projects={projects}
            onOpen={setOpen}
          />
        </div>

        {/* RELATED PROJECTS */}
        {open && (
          <RelatedProjects
            project={open}
            onOpen={setOpen}
          />
        )}

        {/* BACK TO WORK */}
        <div className="mt-20">

          <button
            type="button"
            onClick={backToWork}
            className="
              rounded-full
              border
              border-border
              px-6
              py-3
              text-[11px]
              tracking-[0.2em]
              transition-all
              duration-300
              hover:border-accent
              hover:text-accent
            "
          >
            ← BACK TO WORK
          </button>

        </div>

      </div>

      {/* PROJECT MODAL */}
      <ProjectModal
        project={open}
        onClose={() => setOpen(null)}
      />
    </main>
  );
}