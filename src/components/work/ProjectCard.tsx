import { useRef, useState } from "react";
import type { Project } from "@/data/portfolio";
import { PlaceholderVisual } from "@/components/PlaceholderVisual";
import { cn } from "@/lib/utils";

type Props = { project: Project; index: number; onOpen: (project: Project) => void };

/** Creative artwork card — opens the project viewer. */
export function ProjectCard({ project, index, onOpen }: Props) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group block w-full overflow-hidden rounded-xl border border-border bg-surface text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-accent/50"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        ) : (
          <PlaceholderVisual seed={index + 2} label="ASSET PENDING" />
        )}
      </div>
      <div className="p-4">
        <p className="text-sm">{project.title}</p>
        <p className="eyebrow mt-1">{project.category.replace(/-/g, " ")}</p>
      </div>
    </button>
  );
}

/** Video card — poster by default, silent looping preview on hover. */
export function VideoCard({ project, index, onOpen }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const enter = () => {
    if (!project.video) return;
    setPlaying(true);
    videoRef.current?.play().catch(() => setPlaying(false));
  };

  const leave = () => {
    setPlaying(false);
    videoRef.current?.pause();
  };

  return (
    <button
      type="button"
      data-cursor="view"
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={() => onOpen(project)}
      className="group block w-full overflow-hidden rounded-xl border border-border bg-surface text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-accent/50"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className={cn(
              "size-full object-cover transition-opacity duration-300",
              playing && "opacity-0",
            )}
          />
        ) : (
          <PlaceholderVisual seed={index + 5} label="ASSET PENDING" />
        )}
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="none"
            className={cn(
              "absolute inset-0 size-full object-cover transition-opacity duration-300",
              playing ? "opacity-100" : "opacity-0",
            )}
          />
        )}
      </div>
      <div className="p-4">
        <p className="text-sm">{project.title}</p>
        <p className="eyebrow mt-1">{project.category.replace(/-/g, " ")}</p>
      </div>
    </button>
  );
}
