export interface ExperienceItem {
  period: string;
  title: string;
  role?: string;
  type: string;
  current?: boolean;
  details: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  period: string;
  role: string;
  team: string;
  status: string;
  stacks: string[];
  implementations: string[];
  troubleshooting?: string[];
  highlight?: string;
  links?: ProjectLink[];
  notice?: string;
}

export interface Translations {
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    nickname: string;
    badge: string;
    roles: string[];
    description: string;
    descriptionSub: string;
    contact: string;
  };
  about: {
    index: string;
    title: string;
    values: { keyword: string; description: string }[];
  };
  experience: {
    index: string;
    title: string;
    items: ExperienceItem[];
  };
  skills: {
    index: string;
    title: string;
    tiers: {
      label: string;
      description: string;
      skills: string[];
    }[];
    certificatesLabel: string;
    certificates: { name: string; date: string }[];
  };
  projects: {
    index: string;
    title: string;
    implementationLabel: string;
    troubleshootingLabel: string;
    items: ProjectItem[];
  };
  contact: {
    index: string;
    title: string;
    description: string;
  };
  footer: {
    copyright: string;
  };
}
