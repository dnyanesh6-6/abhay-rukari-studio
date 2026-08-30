import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const items = [
  { label: "ABOUT", id: "about" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "WORK", id: "work" },
  { label: "TOOLS", id: "tools" },
  { label: "CONTACT", id: "contact" },
];	

/** Smoothly scrolls to a section id, works from any route. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function FloatingNav() {
  const [active, setActive] = useState("");
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6"
    >
      <div className="glass-panel flex max-w-full items-center gap-1 overflow-x-auto rounded-full px-2 py-2 md:gap-2 md:px-3">
        <Link
          to="/"
          className="shrink-0 rounded-full px-3 py-1.5 text-[11px] tracking-[0.2em] text-foreground transition-colors hover:text-accent"
        >
          AR
        </Link>
        <span className="h-4 w-px shrink-0 bg-border" />
        {items.map((item) =>
          onHome ? (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "relative shrink-0 rounded-full px-3 py-1.5 text-[11px] tracking-[0.18em] text-muted-foreground transition-all duration-300 hover:text-foreground",
                active === item.id && "bg-accent/12 text-accent",
              )}
            >
              {item.label}
            </button>
          ) : (
                        <Link
              key={item.id}
              to="/"
              hash={item.id}
              hashScrollIntoView={item.id !== "work"}
              className="shrink-0 rounded-full px-3 py-1.5 text-[11px] tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ),
        )}
      </div>
    </nav>
  );
}
