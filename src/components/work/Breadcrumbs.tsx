import { Link } from "@tanstack/react-router";

export type Crumb = { label: string; to?: string; hash?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap items-center gap-2">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-2">
          {item.to ? (
            <Link
              to={item.to}
              {...(item.hash ? { hash: item.hash } : {})}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
          {i < items.length - 1 && <span className="text-accent">→</span>}
        </span>
      ))}
    </nav>
  );
}
