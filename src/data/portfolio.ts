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
  ...slots("automobile", "creative", 6),
  ...slots("clothing", "creative", 6),
  ...slots("real-estate", "creative", 6),
  ...slots("gaming", "creative", 6),
  ...slots("pet-industry", "creative", 6),
  ...slots("printing", "creative", 6),
  ...slots("reels", "video", 4),
  ...slots("ai-videos", "video", 4),
  ...slots("motion-graphics", "video", 4),
];

/* -------------------------------------------------------------------------
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
