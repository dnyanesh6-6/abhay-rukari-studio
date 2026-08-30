import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { NameReveal } from "@/components/NameReveal";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { WorkSection } from "@/components/work/WorkSection";
import { Tools } from "@/components/sections/Tools";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Abhay Rukari — Graphic Designer & Video Editor",
      },
      {
        name: "description",
        content:
          "Designs that move. Stories that stay. Portfolio of Abhay Rukari — graphic design, video editing and motion graphics with 3+ years of experience.",
      },
      {
        property: "og:title",
        content: "Abhay Rukari — Graphic Designer & Video Editor",
      },
      {
        property: "og:description",
        content:
          "Creative portfolio of Abhay Rukari: branding, marketing creatives, social media design, video editing and motion graphics.",
      },
    ],
  }),

  component: Home,
});

function Home() {
  const [revealed, setRevealed] = useState(() => {
    return sessionStorage.getItem("nameRevealShown") === "true";
  });

  const handleRevealDone = () => {
    sessionStorage.setItem("nameRevealShown", "true");
    setRevealed(true);
  };

  return (
    <>
      {!revealed && <NameReveal onDone={handleRevealDone} />}

      <main>
        <Hero start={revealed} />

        <About />

        <ExperienceSection />

        <WorkSection />

        <Tools />

        <Contact />
      </main>
    </>
  );
}