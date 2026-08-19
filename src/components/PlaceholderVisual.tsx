import { cn } from "@/lib/utils";

/**
 * Styled stand-in shown wherever a real portfolio asset has not been added yet.
 * It is intentionally abstract — no stock photos, no invented artwork.
 * As soon as a project gets an `image` / `thumbnail`, this disappears.
 */
export function PlaceholderVisual({
  label,
  seed = 0,
  className,
}: {
  label?: string;
  seed?: number;
  className?: string;
}) {
  const angle = 120 + ((seed * 37) % 120);
  const strength = 12 + ((seed * 13) % 18);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-surface",
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(${angle}deg, color-mix(in oklab, var(--accent) ${strength}%, var(--surface)), var(--background))`,
      }}
    >
      <div className="absolute inset-0 opacity-[0.16] [background-image:repeating-linear-gradient(90deg,transparent_0_38px,color-mix(in_oklab,var(--foreground)_60%,transparent)_38px_39px)]" />
      {label ? (
        <span className="eyebrow relative z-10 px-4 text-center">{label}</span>
      ) : null}
    </div>
  );
}
