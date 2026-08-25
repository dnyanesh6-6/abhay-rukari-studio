/**
 * ===========================================================================
 * CENTRAL PORTFOLIO DATA
 * ---------------------------------------------------------------------------
 * This is the ONLY file you need to edit to update the website content:
 * identity, contact links, experience, tools, categories and projects.
 *
 * TO ADD A PROJECT: add one object to `projects` below. The category pages,
 * counts, grids, related projects and routes all update automatically.
 *
 * TO ADD AN IMAGE / VIDEO:
 *   1. Put the file in  public/work/   (e.g. public/work/automobile-01.jpg)
 *   2. Set  image: "/work/automobile-01.jpg"
 *      or   thumbnail / video for video projects.
 * Any project without an image simply renders a styled placeholder tile,
 * so the site never breaks while assets are still missing.
 * ===========================================================================
 */

/* -------------------------------------------------------------------------
 * IDENTITY
 * ---------------------------------------------------------------------- */
export const identity = {
  name: "ABHAY RUKARI",
  firstName: "ABHAY",
  lastName: "RUKARI",
  title: "GRAPHIC DESIGNER & VIDEO EDITOR",
  experienceYears: "3+",
  tagline: ["DESIGNS THAT MOVE.", "STORIES THAT STAY."],
  intro:
    "I create visual experiences through design, video, and motion—combining creativity with purpose to turn ideas into impactful stories.",
  summary:
    "Graphic Designer and Video Editor with 3+ years of experience in visual design, branding, marketing creatives, social media, motion graphics, and video. Skilled in developing creative concepts from ideation to final execution, with strong knowledge of typography, layout, composition, photo editing, and brand consistency.",
  /** Replace with your own portrait: put the file in public/ and point here. */
  portrait: "" as string, // e.g. "/portrait.jpg"
};

export const capabilities = [
  "Creative Concept Development",
  "Branding",
  "Visual Identity",
  "Typography",
  "Layout",
  "Composition",
  "Photo Editing",
  "Campaign Design",
  "Marketing Creatives",
  "Social Media Design",
  "Promotional Design",
  "Visual Communication",
  "Video Editing",
  "Motion Graphics",
  "Visual Effects",
  "Storyboarding",
  "AI-assisted creative workflows",
];

/* -------------------------------------------------------------------------
 * CONTACT — only real, supplied details. Add an email/other links here later.
 * ---------------------------------------------------------------------- */
export const contact = {
  email: "" as string, // add your email here to show the EMAIL block
  whatsapp: "+91 84080 66097",
  whatsappUrl: "https://wa.me/918408066097",
};

export const socials = [
  { label: "Instagram", url: "https://www.instagram.com/abhay_made_this/" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/abhay-rukari-04b611317/" },
  // { label: "Behance", url: "" },
  // { label: "YouTube", url: "" },
];

/* -------------------------------------------------------------------------
 * EXPERIENCE
 * ---------------------------------------------------------------------- */
export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    company: "ABK Imports",
    role: "Graphic Designer & Video Editor",
    period: "Dec 2025 – Present",
    current: true,
  },
  {
    company: "EESWEB",
    role: "Graphic Designer & Video Editor",
    period: "Nov 2023 – Dec 2025",
  },
  {
    company: "Disha Computer Institute",
    role: "Graphic Designer & Software Trainer",
    period: "Jun 2023 – Nov 2023",
  },
];

/* -------------------------------------------------------------------------
 * TOOLS — shown as marks, name revealed on hover.
 * ---------------------------------------------------------------------- */
export type Tool = { mark: string; name: string; tint: string };

export const tools: Tool[] = [
  { mark: "Ps", name: "Adobe Photoshop", tint: "#31A8FF" },
  { mark: "Ai", name: "Adobe Illustrator", tint: "#FF9A00" },
  { mark: "Pr", name: "Adobe Premiere Pro", tint: "#9999FF" },
  { mark: "Ae", name: "Adobe After Effects", tint: "#9999FF" },
  { mark: "AI", name: "AI Design Tools", tint: "#F65F08" },
];

/* -------------------------------------------------------------------------
 * WORK — two groups, their categories, and the projects inside them.
 * ---------------------------------------------------------------------- */
export type WorkType = "creative" | "video";

export type Category = {
  slug: string;
  title: string;
  type: WorkType;
  description: string;
  /** Short list of the kind of work in this category (shown on card hover). */
  workTypes: string[];
};

export const categories: Category[] = [
  {
    slug: "automobile",
    title: "AUTOMOBILE",
    type: "creative",
    description: "Creative direction and marketing visuals for automobile brands.",
    workTypes: ["Branding", "Campaign Design", "Marketing Creatives"],
  },
  {
    slug: "clothing",
    title: "CLOTHING",
    type: "creative",
    description: "Fashion and apparel creatives built around type and composition.",
    workTypes: ["Visual Identity", "Social Media Design", "Promotional Design"],
  },
  {
    slug: "real-estate",
    title: "REAL ESTATE",
    type: "creative",
    description: "Property and project creatives with clear visual hierarchy.",
    workTypes: ["Layout", "Campaign Design", "Marketing Creatives"],
  },
  {
    slug: "gaming",
    title: "GAMING",
    type: "creative",
    description: "High-energy gaming visuals, posters and social artwork.",
    workTypes: ["Photo Editing", "Composition", "Promotional Design"],
  },
  {
    slug: "pet-industry",
    title: "PET INDUSTRY",
    type: "creative",
    description: "Warm, brand-consistent creatives for the pet industry.",
    workTypes: ["Branding", "Social Media Design", "Visual Communication"],
  },
  {
    slug: "printing",
    title: "PRINTING",
    type: "creative",
    description: "Print-ready design work with precise typography and layout.",
    workTypes: ["Typography", "Layout", "Print Design"],
  },
  {
    slug: "reels",
    title: "SOCIAL MEDIA REELS",
    type: "video",
    description: "Short-form vertical edits made to hold attention.",
    workTypes: ["Video Editing", "Sound Sync", "Colour"],
  },
  {
    slug: "ai-videos",
    title: "AI VIDEOS",
    type: "video",
    description: "AI-assisted video concepts from prompt to final cut.",
    workTypes: ["AI Workflows", "Video Editing", "Visual Effects"],
  },
  {
    slug: "motion-graphics",
    title: "MOTION GRAPHICS",
    type: "video",
    description: "Animated type, graphics and brand motion systems.",
    workTypes: ["Motion Graphics", "Storyboarding", "Visual Effects"],
  },
];

export type Project = {
  id: string;
  title: string;
  type: WorkType;
  /** Category slug — must match a `categories` entry. */
  category: string;
  description?: string;
  role?: string;
  tools?: string[];
  /** Creative artwork path, e.g. "/work/automobile-01.jpg" */
  image?: string;
  /** Video poster image */
  thumbnail?: string;
  /** Video file or embed-friendly mp4 path */
  video?: string;
  featured?: boolean;
  /**
   * true = this is an empty slot waiting for the real asset.
   * Delete this flag once you add the real image/video + title.
   */
  placeholder?: boolean;
};

/** Helper that builds the empty slots so the layout is complete from day one. */
function slots(category: string, type: WorkType, count: number): Project[] {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      id: `${category}-${n}`,
      title: `${category.replace(/-/g, " ").toUpperCase()} ${n}`,
      type,
      category,
      placeholder: true,
      featured: i === 0,
    } satisfies Project;
  });
}
export const projects: Project[] = [
  /* ================================================================
     AUTOMOBILE
     public/portfolio/creatives/automobile/
  ================================================================= */

  {
    id: "automobile-01",
    title: "Women's Day",
    type: "creative",
    category: "automobile",
    image: "/portfolio/creatives/automobile/06.03.25 Womens Day.jpg",
    featured: true,
  },
  {
    id: "automobile-02",
    title: "Automobile Creative 02",
    type: "creative",
    category: "automobile",
    image: "/portfolio/creatives/automobile/08.02.25.jpg",
  },
  {
    id: "automobile-03",
    title: "Automobile Creative 03",
    type: "creative",
    category: "automobile",
    image: "/portfolio/creatives/automobile/17.02.25.jpg",
  },
  {
    id: "automobile-04",
    title: "Automobile Creative 04",
    type: "creative",
    category: "automobile",
    image: "/portfolio/creatives/automobile/17.07.jpg",
  },
  {
    id: "automobile-05",
    title: "Ride",
    type: "creative",
    category: "automobile",
    image: "/portfolio/creatives/automobile/21.08 Ride.jpg",
  },
  {
    id: "automobile-06",
    title: "Automobile Creative 06",
    type: "creative",
    category: "automobile",
    image: "/portfolio/creatives/automobile/27.06.jpg",
  },
  {
    id: "automobile-07",
    title: "Unveiling Ceremony",
    type: "creative",
    category: "automobile",
    image: "/portfolio/creatives/automobile/29.07 Unveiling ceremony.jpg",
  },

  /* ================================================================
     CLOTHING
     public/portfolio/creatives/clothing/
  ================================================================= */

  {
    id: "clothing-01",
    title: "Launch",
    type: "creative",
    category: "clothing",
    image: "/portfolio/creatives/clothing/11.04.25 Launch.jpg",
    featured: true,
  },
  {
    id: "clothing-02",
    title: "Clothing Creative 02",
    type: "creative",
    category: "clothing",
    image: "/portfolio/creatives/clothing/19.06.jpg",
  },
  {
    id: "clothing-03",
    title: "Paid Creative",
    type: "creative",
    category: "clothing",
    image: "/portfolio/creatives/clothing/Paid 1.jpg",
  },

  /* ================================================================
     GAMING
     public/portfolio/creatives/gaming/
  ================================================================= */

  {
    id: "gaming-01",
    title: "Girls Offer",
    type: "creative",
    category: "gaming",
    image: "/portfolio/creatives/gaming/11.08.25 Girls Offer.jpg",
    featured: true,
  },
  {
    id: "gaming-02",
    title: "Gaming Creative",
    type: "creative",
    category: "gaming",
    image: "/portfolio/creatives/gaming/25.07.jpg",
  },

  /* ================================================================
     PET INDUSTRY
     public/portfolio/creatives/pet-industry/
  ================================================================= */

  {
    id: "pet-industry-01",
    title: "Chip Chops Sun Dried Chicken Jerky",
    type: "creative",
    category: "pet-industry",
    image:
      "/portfolio/creatives/pet-industry/1. CC1213 – Chip Chops Sun Dried Chicken Jerky 70g.jpg",
    featured: true,
  },
  {
    id: "pet-industry-02",
    title: "Chip Chops Roasted Chicken Strip",
    type: "creative",
    category: "pet-industry",
    image:
      "/portfolio/creatives/pet-industry/2. CC3703 – Chip Chops Roasted Chicken Strip 375g.jpg",
  },
  {
    id: "pet-industry-03",
    title: "Chip Chops Chicken Chips Coins",
    type: "creative",
    category: "pet-industry",
    image:
      "/portfolio/creatives/pet-industry/3. CC1210 – Chip Chops Chicken Chips Coins 70g.jpg",
  },
  {
    id: "pet-industry-04",
    title: "Chip Chops Chicken Tender",
    type: "creative",
    category: "pet-industry",
    image:
      "/portfolio/creatives/pet-industry/4. CC3702– Chip Chops Chicken Tender 375g.jpg",
  },
  {
    id: "pet-industry-05",
    title: "Combined Brand Creative",
    type: "creative",
    category: "pet-industry",
    image:
      "/portfolio/creatives/pet-industry/5. Combined Brand Creative.jpg",
  },
  {
    id: "pet-industry-06",
    title: "Banana",
    type: "creative",
    category: "pet-industry",
    image: "/portfolio/creatives/pet-industry/Banana.jpg",
  },
  {
    id: "pet-industry-07",
    title: "Carousal 01",
    type: "creative",
    category: "pet-industry",
    image: "/portfolio/creatives/pet-industry/Carousal_01.jpg",
  },
  {
    id: "pet-industry-08",
    title: "Carousal 02",
    type: "creative",
    category: "pet-industry",
    image: "/portfolio/creatives/pet-industry/Carousal_02.jpg",
  },
  {
    id: "pet-industry-09",
    title: "Carousal 03",
    type: "creative",
    category: "pet-industry",
    image: "/portfolio/creatives/pet-industry/Carousal_03.jpg",
  },
  {
    id: "pet-industry-10",
    title: "Carousal 04",
    type: "creative",
    category: "pet-industry",
    image: "/portfolio/creatives/pet-industry/Carousal_04.jpg",
  },
  {
    id: "pet-industry-11",
    title: "PP001",
    type: "creative",
    category: "pet-industry",
    image: "/portfolio/creatives/pet-industry/PP001.jpg",
  },
  {
    id: "pet-industry-12",
    title: "PP002",
    type: "creative",
    category: "pet-industry",
    image: "/portfolio/creatives/pet-industry/PP002.jpg",
  },
  {
    id: "pet-industry-13",
    title: "PP004",
    type: "creative",
    category: "pet-industry",
    image: "/portfolio/creatives/pet-industry/PP004.jpg",
  },
  {
    id: "pet-industry-14",
    title: "PP005",
    type: "creative",
    category: "pet-industry",
    image: "/portfolio/creatives/pet-industry/PP005.jpg",
  },

  /* ================================================================
     PRINTING
     public/portfolio/creatives/printing/
  ================================================================= */

  {
    id: "printing-01",
    title: "Chip Chops Backdrop",
    type: "creative",
    category: "printing",
    image: "/portfolio/creatives/printing/Chip Chops Backdrop.png",
    featured: true,
  },
  {
    id: "printing-02",
    title: "Chip Chops Greeting Card",
    type: "creative",
    category: "printing",
    image: "/portfolio/creatives/printing/Chip Chops Greeting Card.png",
  },
  {
    id: "printing-03",
    title: "Hydra Backdrop",
    type: "creative",
    category: "printing",
    image: "/portfolio/creatives/printing/Hydra Backdrop.png",
  },
  {
    id: "printing-04",
    title: "Main Event Banner",
    type: "creative",
    category: "printing",
    image: "/portfolio/creatives/printing/Main Event Banner.png",
  },
  {
    id: "printing-05",
    title: "Opaws",
    type: "creative",
    category: "printing",
    image: "/portfolio/creatives/printing/Opaws.png",
  },
  {
    id: "printing-06",
    title: "Pawpaya Backdrop",
    type: "creative",
    category: "printing",
    image: "/portfolio/creatives/printing/Pawpaya Backdrop.png",
  },
  {
    id: "printing-07",
    title: "Welcome Stand",
    type: "creative",
    category: "printing",
    image: "/portfolio/creatives/printing/Welcome Stand 2.png",
  },

  /* ================================================================
     REAL ESTATE
     public/portfolio/creatives/real-estate/
  ================================================================= */

  {
    id: "real-estate-01",
    title: "Real Estate 24.07",
    type: "creative",
    category: "real-estate",
    image: "/portfolio/creatives/real-estate/24.07.jpg",
    featured: true,
  },
  {
    id: "real-estate-02",
    title: "Real Estate 31.07",
    type: "creative",
    category: "real-estate",
    image: "/portfolio/creatives/real-estate/31.07.jpg",
  },
  {
    id: "real-estate-03",
    title: "Rhythm",
    type: "creative",
    category: "real-estate",
    image: "/portfolio/creatives/real-estate/Rhythm.jpg",
  },
  {
    id: "real-estate-04",
    title: "Samarth",
    type: "creative",
    category: "real-estate",
    image: "/portfolio/creatives/real-estate/samarth 2.jpg",
  },

  /* ================================================================
     AI VIDEOS
     public/portfolio/videos/ai-videos/
  ================================================================= */

  {
    id: "ai-videos-01",
    title: "AI Pawpaya",
    type: "video",
    category: "ai-videos",
    video: "/portfolio/videos/ai-videos/Ai Pawpaya.mp4",
    featured: true,
  },
  {
    id: "ai-videos-02",
    title: "Valentine Day",
    type: "video",
    category: "ai-videos",
    video: "/portfolio/videos/ai-videos/Valentine Day.mp4",
  },

  /* ================================================================
     INFORMATIVE VIDEOS
     IMPORTANT:
     Your current categories do not contain "informative".
     Add this category to `categories` if you want it displayed separately.
  ================================================================= */

  {
    id: "informative-01",
    title: "60-60 Rule",
    type: "video",
    category: "informative",
    video: "/portfolio/videos/informative/60-60 Rule 2.mp4",
    featured: true,
  },
  {
    id: "informative-02",
    title: "Egg Yolk",
    type: "video",
    category: "informative",
    video: "/portfolio/videos/informative/Egg Yolk 3.mp4",
  },
  {
    id: "informative-03",
    title: "Protein Damage Kidneys",
    type: "video",
    category: "informative",
    video: "/portfolio/videos/informative/Protein Damage Kidneys.mp4",
  },
  {
    id: "informative-04",
    title: "Women Aging Suddenly",
    type: "video",
    category: "informative",
    video: "/portfolio/videos/informative/Women aging suddenly 3.mp4",
  },

  /* ================================================================
     MOTION GRAPHICS
     public/portfolio/videos/motion-graphics/
  ================================================================= */

  {
    id: "motion-graphics-01",
    title: "Logo Outro",
    type: "video",
    category: "motion-graphics",
    video: "/portfolio/videos/motion-graphics/LogoOutro.mp4",
    featured: true,
  },
  {
    id: "motion-graphics-02",
    title: "Motion Graphic",
    type: "video",
    category: "motion-graphics",
    video: "/portfolio/videos/motion-graphics/Motion Graphic.mp4",
  },
  {
    id: "motion-graphics-03",
    title: "Pawpaya Motion",
    type: "video",
    category: "motion-graphics",
    video: "/portfolio/videos/motion-graphics/Pawpaya Motion.mp4",
  },

  /* ================================================================
     SOCIAL MEDIA REELS
     public/portfolio/videos/social-media-reels/
  ================================================================= */

  {
    id: "reels-01",
    title: "All India",
    type: "video",
    category: "reels",
    video: "/portfolio/videos/social-media-reels/All India.mp4",
    featured: true,
  },
  {
    id: "reels-02",
    title: "Chip Chops Flavours",
    type: "video",
    category: "reels",

    video: "/portfolio/videos/social-media-reels/Chip Chops Flavours.mp4",
  },
  {
    id: "reels-03",
    title: "Lamb Cubes",
    type: "video",
    category: "reels",

    video: "/portfolio/videos/social-media-reels/Lamb Cubes.mp4",
  },
  {
    id: "reels-04",
    title: "Salon Visit",
    type: "video",
    category: "reels",

    video: "/portfolio/videos/social-media-reels/Salon Visit.mp4",
  },
];/* -------------------------------------------------------------------------
 * DERIVED HELPERS — used by the UI, never edit results by hand.
 * ---------------------------------------------------------------------- */
export const creativeCategories = categories.filter((c) => c.type === "creative");
export const videoCategories = categories.filter((c) => c.type === "video");

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const getProjectsByCategory = (slug: string) =>
  projects.filter((p) => p.category === slug);

export const countProjects = (slug: string) => getProjectsByCategory(slug).length;

export const getProject = (id: string) => projects.find((p) => p.id === id);

export const getRelatedProjects = (project: Project, limit = 3) =>
  projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, limit);

export const categoryPath = (category: Category) =>
  category.type === "creative"
    ? `/work/creatives/${category.slug}`
    : `/work/videos/${category.slug}`;
