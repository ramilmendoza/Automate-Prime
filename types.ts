export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: import('react').ReactNode;
}

export interface CaseStudy {
  title: string;
  client: string;
  result: string;
  metric: string;
}