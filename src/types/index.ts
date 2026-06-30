export interface Profile {
  name: string;
  role: string;
  company: string;
  heroDescription: string;
  aboutDescription: string;
  footerDescription: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: "Top" | "Advance" | "Intermediate" | "Beginner";
  preview?: string;
  github?: string;
  video?: string;
  created_at: string;
}

export interface Skill {
  name: string;
  level: number;
  note?: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  whatsapp: string;
  email: string;
}