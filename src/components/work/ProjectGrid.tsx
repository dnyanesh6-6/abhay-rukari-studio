import type { Project } from "@/data/portfolio";
import { ProjectCard, VideoCard } from "@/components/work/ProjectCard";

export function ProjectGrid({
  projects,
  onOpen,
}: {
  projects: Project[];
  onOpen: (project: Project) => void;
}) {
  if (projects.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
        No projects added to this category yet.
      </p>
    );
  }

  const isVideo = projects[0]?.type === "video";

  return (
    <div
      className={
        isVideo
          ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          : "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {projects.map((project, i) =>
        project.type === "video" ? (
          <VideoCard key={project.id} project={project} index={i} onOpen={onOpen} />
        ) : (
          <ProjectCard key={project.id} project={project} index={i} onOpen={onOpen} />
        ),
      )}
    </div>
  );
}
