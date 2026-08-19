import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Category, Project } from "@/data/portfolio";
import { getProjectsByCategory } from "@/data/portfolio";
import { Breadcrumbs } from "@/components/work/Breadcrumbs";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { ProjectModal } from "@/components/work/ProjectModal";
import { RelatedProjects } from "@/components/work/RelatedProjects";

/** Shared layout for every creative and video category page. */
export function CategoryPage({ category }: { category: Category }) {
  const [open, setOpen] = useState<Project | null>(null);
  const projects = getProjectsByCategory(category.slug);

  return (
    <main className="min-h-screen bg-background pt-28 pb-24">
      <div className="section-shell !py-0">
        <Breadcrumbs
          items={[
            { label: "HOME", to: "/" },
            { label: "WORK", to: "/", hash: "work" },
            { label: category.title },
          ]}
        />

        <header className="mt-8 border-b border-border pb-10">
          <p className="eyebrow">{category.type === "creative" ? "CREATIVES" : "VIDEOS"}</p>
          <h1 className="font-display mt-4 text-[clamp(2.2rem,7vw,5rem)] leading-[0.95] font-semibold">
            {category.title}
          </h1>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">{category.description}</p>
          <p className="eyebrow mt-6">
            {projects.length} {projects.length === 1 ? "PROJECT" : "PROJECTS"}
          </p>
        </header>

        <div className="mt-12">
          <ProjectGrid projects={projects} onOpen={setOpen} />
        </div>

        {open && <RelatedProjects project={open} onOpen={setOpen} />}

        <div className="mt-20">
          <Link
            to="/"
            hash="work"
            className="rounded-full border border-border px-6 py-3 text-[11px] tracking-[0.2em] transition-colors hover:border-accent hover:text-accent"
          >
            ← BACK TO WORK
          </Link>
        </div>
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </main>
  );
}
