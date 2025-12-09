interface Link {
  label: string;
  url: string;
  color?: string;
}

interface Project {
  title: string;
  summary: string;
  links?: Link[];
  tech: string[];
  achievements: string[];
}

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  projects: Project[];
}

export type WorkExperienceList = WorkExperience[];
