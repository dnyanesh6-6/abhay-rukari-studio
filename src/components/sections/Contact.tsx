import { contact, socials } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import {
  Instagram,
  Linkedin,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";

export function Contact() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  const getSocialIcon = (label: string) => {
    const name = label.toLowerCase();

    if (name.includes("instagram")) {
      return <Instagram size={19} strokeWidth={2} />;
    }

    if (name.includes("linkedin")) {
      return <Linkedin size={19} strokeWidth={2} />;
    }

    return null;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-surface/40"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-25%] left-[-10%] size-[34rem] rounded-full opacity-25 blur-[130px]"
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
        {/* =========================================================
            MAIN CTA
        ========================================================== */}

        <h2 className="font-display mt-8 max-w-6xl text-[clamp(2.7rem,7vw,7rem)] leading-[0.9] font-semibold tracking-[-0.045em]">
          <span className="block">
            LET&apos;S{" "}
            <span className="font-serif italic text-accent">
              design
            </span>
          </span>

          <span className="mt-2 block whitespace-nowrap">
  incredible work together.
</span>
        </h2>

        {/* =========================================================
            CONTACT INFORMATION
        ========================================================== */}

        <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-8">
          {/* EMAIL */}

          <div>
            <div className="mb-4 flex items-center gap-2">
              <Mail
                size={14}
                strokeWidth={1.8}
                className="text-muted-foreground"
              />

              <p className="eyebrow">EMAIL</p>
            </div>

            {contact.email ? (
              <a
                href={`mailto:${contact.email}`}
                className="font-display block break-all text-lg transition-colors duration-300 hover:text-accent md:text-xl"
              >
                {contact.email}
              </a>
            ) : (
              <p className="text-lg text-muted-foreground">
                Email me
              </p>
            )}
          </div>

          {/* CALL ME */}

          <div>
            <div className="mb-4 flex items-center gap-2">
              <Phone
                size={14}
                strokeWidth={1.8}
                className="text-muted-foreground"
              />

              <p className="eyebrow">CALL ME</p>
            </div>

            <a
              href={`tel:${contact.whatsapp}`}
              className="font-display block text-xl transition-colors duration-300 hover:text-accent"
            >
              Book Now
            </a>

            <a
              href={`tel:${contact.whatsapp}`}
              className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {contact.whatsapp}
            </a>
          </div>

          {/* SOCIAL */}

          <div>
            <p className="eyebrow mb-4">SOCIAL</p>

            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const icon = getSocialIcon(s.label);

                if (!icon) return null;

                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    title={s.label}
                    className="
                      flex
                      size-11
                      items-center
                      justify-center
                      rounded-full
                      bg-accent
                      text-accent-foreground
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_0_28px_color-mix(in_oklab,var(--accent)_35%,transparent)]
                    "
                  >
                    {icon}
                  </a>
                );
              })}

              {/* WhatsApp */}

              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="
                  flex
                  size-11
                  items-center
                  justify-center
                  rounded-full
                  bg-accent
                  text-accent-foreground
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_28px_color-mix(in_oklab,var(--accent)_35%,transparent)]
                "
              >
                <MessageCircle size={19} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            DIVIDER
        ========================================================== */}

        <div className="mt-16 border-t border-border" />

        {/* =========================================================
            FOOTER NAVIGATION
        ========================================================== */}

        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between">
          {/* Menu */}

          <div className="flex items-center gap-8">
            <span className="text-sm text-muted-foreground">
              Menu
            </span>

            <a
              href="#work"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              Work
            </a>

            <a
              href="#tools"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              Services
            </a>
          </div>

          {/* Copyright */}

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abhay Rukari
          </p>
        </div>

        {/* =========================================================
            LARGE NAME
        ========================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none -mx-2 mt-8 overflow-hidden"
        >
          <div
            className="
              font-display
              whitespace-nowrap
              text-[clamp(5rem,17vw,16rem)]
              font-bold
              leading-[0.72]
              tracking-[-0.075em]
              text-accent
            "
          >
            ABHAY
          </div>
        </div>
      </div>
    </section>
  );
}