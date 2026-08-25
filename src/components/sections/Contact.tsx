import { contact, socials } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export function Contact() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  const getSocialIcon = (label: string) => {
    const name = label.toLowerCase();

    if (name.includes("instagram")) {
      return <Instagram size={20} strokeWidth={2} />;
    }

    if (name.includes("linkedin")) {
      return <Linkedin size={20} strokeWidth={2} />;
    }

    return null;
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-surface/40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-30%] left-[-10%] size-[34rem] rounded-full opacity-30 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 65%)",
        }}
      />

      <div
        ref={ref}
        className={cn(
          "section-shell reveal relative",
          shown && "reveal-in",
        )}
      >
        <h2 className="font-display mt-8 text-[clamp(2.5rem,6vw,6.5rem)] leading-[0.95] font-semibold tracking-[-0.04em]">
          <span className="block whitespace-nowrap">
            LET&apos;S{" "}
            <span className="font-serif italic text-accent">
              design
            </span>
          </span>

          <span className="block whitespace-nowrap">
            incredible work together.
          </span>
        </h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-2">
          {/* CONTACT DETAILS */}
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
          </div>

          {/* SOCIAL ICONS */}
          <div>
            <p className="eyebrow">SOCIAL</p>

            <div className="mt-5 flex items-center gap-4">
              {/* Instagram + LinkedIn */}
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  title={s.label}
                  className="
                    flex
                    size-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border
                    text-foreground
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-accent
                    hover:bg-accent
                    hover:text-background
                    hover:shadow-[0_0_25px_color-mix(in_oklab,var(--accent)_35%,transparent)]
                  "
                >
                  {getSocialIcon(s.label)}
                </a>
              ))}

              {/* WhatsApp */}
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="
                  flex
                  size-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  text-foreground
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-accent
                  hover:bg-accent
                  hover:text-background
                  hover:shadow-[0_0_25px_color-mix(in_oklab,var(--accent)_35%,transparent)]
                "
              >
                <MessageCircle size={20} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <p className="eyebrow">
            ABHAY RUKARI — GRAPHIC DESIGNER &amp; VIDEO EDITOR
          </p>

          <p className="eyebrow">
            © {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </section>
  );
}