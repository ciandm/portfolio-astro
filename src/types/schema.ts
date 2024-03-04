export type ExperienceType = {
  title: string;
  company?: string;
  location?: string;
  from: string;
  to: string;
  description: string[];
};

export type ProjectType = {
  title: string;
  description: string;
  tech: string[];
  links: {
    label: string;
    href: string;
  }[];
  tag?: string;
};

export type AboutType = {
  introduction: string;
  imageUrl: string;
};
