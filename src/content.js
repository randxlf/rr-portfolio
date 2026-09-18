import { FileText, PlayCircle, ExternalLink } from "lucide-react";
const IMG_ME = "/images/me.jpg";
export const IMG_ABOUT = "/images/dolpo.jpeg";
const IMG_WAYV_1 = "/projects/wayv/hardware.jpg";
const IMG_WAYV_2 = "/projects/wayv/detection-1.jpg";
const IMG_WAYV_3 = "/projects/wayv/detection-2.jpg";
const IMG_AWARD = "/projects/wayv/award.jpg";
const IMG_GCC_1 = "/projects/gcc/screenshot-1.png";
const IMG_GCC_2 = "/projects/gcc/screenshot-2.png";
const IMG_GCC_1_FULL = "/projects/gcc/screenshot-1-full.png";
const IMG_GCC_2_FULL = "/projects/gcc/screenshot-2-full.png";
const IMG_GCC_TEAM_1 = "/projects/gcc/team-1.jpg";
const IMG_GCC_TEAM_2 = "/projects/gcc/team-2.jpg";
const FORGE_DEMO = "https://forge-and-fade.vercel.app/";
export const RESUME_PDF = "/Randolf-Rivera-Resume.pdf";

/* ───────────────────────── content ───────────────────────── */

export const SKILLS = [{
  n: "01",
  group: "Languages",
  items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"]
}, {
  n: "02",
  group: "Frameworks & Libraries",
  items: ["React", "Next.js", "Express", "Tailwind CSS", "YOLO (object detection)"]
}, {
  n: "03",
  group: "Backend & Data",
  items: ["Node.js", "PostgreSQL / Neon", "Prisma ORM", "SQLite / Turso", "REST APIs", "CSV validation & export"]
}, {
  n: "04",
  group: "Tools & Practice",
  items: ["Git & GitHub", "Vite", "Vercel", "Responsive interfaces", "Inventory & order workflows", "Data migration & validation"]
}];
export const PROJECTS = [{
  label: "N° 01",
  title: "WAYV — A Guiding Partner System for Blind People Using YOLO",
  desc: "A wearable thesis device for visually impaired users. A camera and object-detection model identify surroundings in real time and describe them through an earpiece, helping users move independently and with confidence.",
  tags: ["YOLO", "Computer Vision", "Wearable"],
  main: IMG_WAYV_1,
  side: [IMG_WAYV_2, IMG_WAYV_3],
  award: "2nd Place, CS Thesis Award — CCS Research Exhibit 2022",
  awardImg: IMG_AWARD,
  actions: [{
    label: "Project description",
    icon: FileText,
    href: "/projects/wayv/Project_Description_WAYV.pdf"
  }, {
    label: "Video demo",
    icon: PlayCircle,
    href: "/projects/wayv/demo.mp4"
  }]
}, {
  label: "N° 02",
  title: "Course Data Manager — CSV Analysis for Coursera Users",
  desc: "Built during my internship at the Department of Information and Communications Technology (DICT), as a team project supporting the GCC (Google Career Certificates) program. Ingests a Coursera user report and a master roster, validates both, flags missing fields and duplicate accounts, then exports a filtered CSV with a computed column for time-to-completion. I later rebuilt it as a Node/Express API with a React (Vite) frontend and a SQLite store, replacing the original PHP/MySQL version — closing a SQL-injection point in the old query builder, fixing an inverted success check that could silently swallow failed imports, and adding sortable/filterable records, pagination, and CSV/Excel export. Deployed live on Vercel with the API running as serverless functions backed by Turso, a hosted SQLite-compatible database.",
  tags: ["DICT Internship", "Data Cleaning", "Automation", "React", "Node.js", "SQLite"],
  main: IMG_GCC_2,
  side: [IMG_GCC_1],
  mainFull: IMG_GCC_2_FULL,
  sideFull: [IMG_GCC_1_FULL],
  team: {
    images: [IMG_GCC_TEAM_1, IMG_GCC_TEAM_2],
    caption: "With my internship team at DICT"
  },
  actions: [{
    label: "Live demo",
    icon: ExternalLink,
    href: "https://revised-gcc-portal.vercel.app/"
  }, {
    label: "Project description",
    icon: FileText,
    href: "/projects/gcc/Project-Proposal_GCC.pdf"
  }, {
    label: "Users manual",
    icon: FileText,
    href: "/projects/gcc/UsersManual_GCC.pdf"
  }]
}, {
  label: "N° 03",
  title: "Forge & Fade — Barber Supply Storefront",
  desc: "A full-stack e-commerce portfolio project for a Philippine men's barber supply brand. I brought the customer journey together—from category browsing and product filtering to wishlists, a persistent cart, and inventory-aware demo checkout. Phase 10 pairs a charcoal-and-copper identity with peso pricing, Philippine delivery details, and an admin dashboard for products, inventory, and orders.",
  tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
  forge: true,
  actions: [{
    label: "Live demo",
    icon: ExternalLink,
    href: FORGE_DEMO
  }, {
    label: "Project description",
    icon: FileText,
    href: "/projects/forge-and-fade/project-description.html"
  }]
}];
export const OPS_EXPERIENCE = [{
  role: "Inventory Specialist",
  company: "Grepcor Diamonde Inc.",
  duration: "May 2026 – Aug 2026"
}, {
  role: "Junior Inventory Officer",
  company: "Iridium Technologies Inc.",
  duration: "Jul 2024 – Apr 2026"
}];
