export interface Role {
  title: string;
  startDate: string;
  endDate?: string;
  description?: string;
  tagline?: string;
  current?: boolean;
}

export interface Education {
  degree: string;
}

export interface Company {
  name: string;
  roles: Role[];
}

export interface Institution {
  name: string;
  yearGraduated: string;
  location: string;
  education: Education[];
}
