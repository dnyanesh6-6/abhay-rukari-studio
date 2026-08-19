import { contact, socials } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function Contact() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative overflow-hidden bg-surface/40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-30%] left-[-10%] size-[34rem] rounded-full opacity-30 blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)" }}
      />
      <div ref={ref} className={cn("section-shell reveal relative", shown && "reveal-in")}>
        <p className="eyebrow">05 — GET IN TOUCH</p>

        <h2 className="font-display mt-8 text-[clamp(2.4rem,10vw,7rem)] leading-[0.92] font-semibold">
          LET&apos;S CREATE
          <br />
          <span className="text-accent-glow">SOMETHING.</span>
        </h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-2">
          <div className="space-y-8">
            {contact.email && (
              <div>
                <p className="eyebrow">EMAIL</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-display mt-2 inline-block text-2xl transition-colors hover:text-accent md:text-3xl"
                >
                  {contact.email}
                </a>
              </div>
            )}
            <div>
              <p className="eyebrow">WHATSAPP</p>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="font-display mt-2 inline-block text-2xl transition-colors hover:text-accent md:text-3xl"
              >
                {contact.whatsapp}
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">SOCIAL</p>
            <ul className="mt-4">
              {socials.map((s) => (
                <li key={s.label} className="border-b border-border">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center justify-between py-5 text-lg transition-colors hover:text-accent md:text-xl"
                  >
                    <span className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                      {s.label}
                    </span>
                    <span className="text-accent transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <p className="eyebrow">ABHAY RUKARI — GRAPHIC DESIGNER &amp; VIDEO EDITOR</p>
          <p className="eyebrow">© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </section>
  );
}
