export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: string;
}

