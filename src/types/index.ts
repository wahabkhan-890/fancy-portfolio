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
  tech: string;
  category: string;
   type: string;
  preview?: string;
  github?: string;
  video?: string;
  created_at?: string;
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

export interface Highlight {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  icon: string;
  created_at?: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}
