const clients = [
  {
    name: "ABK Imports",
    logo: "/portfolio/logos/abk.png",
  },
  {
    name: "Cataholic",
    logo: "/portfolio/logos/cataholic-logo.png",
  },
  {
    name: "Chip Chops",
    logo: "/portfolio/logos/chip chops.png",
  },
  {
    name: "Hero Maharashtra",
    logo: "/portfolio/logos/hero.png",
  },
  {
    name: "Hyundai",
    logo: "/portfolio/logos/Hyundai.png",
  },
  {
    name: "TVS King",
    logo: "/portfolio/logos/king.png",
  },
  {
    name: "Kittos",
    logo: "/portfolio/logos/kittos.png",
  },
  {
    name: "Pashankar",
    logo: "/portfolio/logos/Pashankar.png",
  },
  {
    name: "Pawpaya",
    logo: "/portfolio/logos/Pawpaya.png",
  },
  {
    name: "Trident World",
    logo: "/portfolio/logos/trident.png",
  },
  {
    name: "TVS",
    logo: "/portfolio/logos/TVS.png",
  },
  {
    name: "Vida",
    logo: "/portfolio/logos/Vida.png",
  },
];

function ClientLogo({
  name,
  logo,
}: {
  name: string;
  logo: string;
}) {
  return (
    <div className="flex h-24 min-w-[180px] shrink-0 items-center justify-center md:min-w-[220px]">
      <img
        src={logo}
        alt={name}
        draggable={false}
        className="
          max-h-[72px]
          w-auto
          max-w-[225px]
          object-contain
          opacity-65
          grayscale
          transition-all
          duration-500
          hover:opacity-100
          hover:grayscale-0
          md:max-h-[84px]
          md:max-w-[263px]
        "
      />
    </div>
  );
}

export function ClientLogos() {
  const logos = [...clients, ...clients];

  return (
    <section
      aria-label="Clients"
      className="relative overflow-hidden border-y border-border bg-background"
    >
      <div className="section-shell !py-0">
        <div className="flex min-h-[130px] items-center">
          
          {/* CLIENT COUNT */}

          <div
            className="
              relative
              z-30
              flex
              min-w-[205px]
              shrink-0
              items-center
              gap-4
              border-r
              border-border
              pr-8
            "
          >
            <div className="flex items-center">
              <span className="size-8 rounded-full bg-accent" />
              <span className="-ml-3 size-8 rounded-full bg-accent/70" />
              <span className="-ml-3 size-8 rounded-full bg-accent/50" />
              <span className="-ml-3 size-8 rounded-full bg-accent/30" />
            </div>

            <div>
              <div className="text-xs tracking-[0.15em] text-accent">
                ★★★★★
              </div>

              <div className="mt-1 whitespace-nowrap text-xs text-muted-foreground">
                Trusted clients
              </div>
            </div>
          </div>

          {/* LOGO VIEWPORT WITH REAL FADE */}

          <div className="client-logo-viewport min-w-0 flex-1 overflow-hidden">
            <div
              className="
                client-logo-track
                flex
                w-max
                items-center
                gap-12
                px-12
                md:gap-20
                md:px-20
              "
            >
              {logos.map((client, index) => (
                <ClientLogo
                  key={`${client.name}-${index}`}
                  name={client.name}
                  logo={client.logo}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}