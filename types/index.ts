export interface NavLink {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  description: string;
}

export interface JourneyStep {
  id: number;
  title: string;
  description: string;
  status: "completed" | "current" | "future";
  year?: string;
  highlight?: boolean;
  items?: string[];
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  repo: string;
  techStack: { name: string; color: string }[];
  features: string[];
  stats: { label: string; value: string }[];
}

export interface Education {
  level: string;
  field: string;
  institution: string;
  location: string;
  status: string;
  year: string;
  icon: string;
}

export interface GithubRepo {
  name: string;
  description: string;
  lang: string;
  stars: number;
  url: string;
  color: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface MousePosition {
  x: number;
  y: number;
}
