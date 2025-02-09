export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  completionDate: string;
  area: number;
  location: string;
}

export interface Firm {
  id: string;
  name: string;
  logo: string;
  description: string;
  establishedYear: number;
  rating: number;
  projectCount: number;
  specializations: string[];
  featuredProjects: Project[];
  location: string;
}