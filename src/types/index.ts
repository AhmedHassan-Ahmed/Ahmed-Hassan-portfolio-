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

export type Project = {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  links: Link[];
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  link?: string;
};

export type Award = {
  title: string;
  organization: string;
  date: string;
  description: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};