export type Link = {
  label: string;
  href: string;
  external?: boolean;
};

export type Experience = {
  role: string;
  company: string;
  type: string;
  start: string;
  end: string;
  location: string;
  current?: boolean;
  description: string;
  skills: string[];
};

export type ProjectCategory = "frontend" | "backend";

export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  highlights: string[];
  technologies: string[];
  links: {
    label: string;
    href: string;
  }[];
}

export type CertificateCategory = "certifications" | "other";

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  link?: string;
  category: CertificateCategory;
}

export type Award = {
  title: string;
  organization: string;
  date: string;
  link: string;
  description: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};
