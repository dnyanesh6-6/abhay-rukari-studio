import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/portfolio";
import { PlaceholderVisual } from "@/components/PlaceholderVisual";

/**
 * Premium viewer for a single project.
 * Creative projects show the artwork large; video projects show a poster with
 * a play button first (never autoplaying with sound).
 */
export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setPlaying(false);
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const isVideo = project.type === "video";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-background/85 backdrop-blur-sm [animation:soft-in_0.3s_ease-out_both]"
      />

      <div className="glass-panel relative z-10 max-h-[90vh] w-full max-w-5xl overflow-auto rounded-2xl [animation:soft-in_0.35s_cubic-bezier(0.16,1,0.3,1)_both]">
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
          <div>
            <h2 className="font-display text-lg md:text-xl">{project.title}</h2>
            <p className="eyebrow mt-1">{project.category.replace(/-/g, " ")}</p>
          </div>
          <div className="flex items-center gap-2">
            {isVideo && project.video && (
              <button
                type="button"
                onClick={() => videoRef.current?.requestFullscreen?.()}
                className="rounded-full border border-border px-3 py-1.5 text-[10px] tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
              >
                FULLSCREEN
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project"
              className="rounded-full border border-border px-3 py-1.5 text-[10px] tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
            >
              CLOSE ✕
            </button>
          </div>
        </div>

        <div className="relative aspect-video w-full bg-background">
          {isVideo ? (
            project.video ? (
              <>
                <video
                  ref={videoRef}
                  src={project.video}
                  {...(project.thumbnail ? { poster: project.thumbnail } : {})}
                  controls={playing}
                  playsInline
                  preload="metadata"
                  className="size-full object-contain"
                />
                {!playing && (
                  <button
                    type="button"
                    onClick={() => {
                      setPlaying(true);
                      videoRef.current?.play();
                    }}
                    className="absolute inset-0 grid place-items-center"
                    aria-label={`Play ${project.title}`}
                  >
                    <span className="grid size-16 place-items-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105">
                      ▶
                    </span>
                  </button>
                )}
              </>
            ) : (
              <PlaceholderVisual label="VIDEO PENDING" seed={7} />
            )
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="size-full object-contain"
            />
          ) : (
            <PlaceholderVisual label="ARTWORK PENDING" seed={4} />
          )}
        </div>

        <div className="grid gap-6 px-5 py-6 md:grid-cols-3">
          {project.description && (
            <div className="md:col-span-2">
              <p className="eyebrow">ABOUT</p>
              <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
            </div>
          )}
          {project.role && (
            <div>
              <p className="eyebrow">ROLE</p>
              <p className="mt-2 text-sm text-muted-foreground">{project.role}</p>
            </div>
          )}
          {project.tools?.length ? (
            <div>
              <p className="eyebrow">TOOLS</p>
              <p className="mt-2 text-sm text-muted-foreground">{project.tools.join(", ")}</p>
            </div>
          ) : null}
          {project.placeholder && (
            <p className="text-xs text-muted-foreground md:col-span-3">
              Add this project&apos;s asset and details in src/data/portfolio.ts.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
