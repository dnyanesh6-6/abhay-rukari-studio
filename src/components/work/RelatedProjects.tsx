import type { Project } from "@/data/portfolio";
import { getRelatedProjects } from "@/data/portfolio";
import { ProjectGrid } from "@/components/work/ProjectGrid";

export function RelatedProjects({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const related = getRelatedProjects(project);
  if (related.length === 0) return null;

  return (
    <div className="mt-20">
      <p className="eyebrow">RELATED PROJECTS</p>
      <div className="mt-6">
        <ProjectGrid projects={related} onOpen={onOpen} />
      </div>
    </div>
  );
}
