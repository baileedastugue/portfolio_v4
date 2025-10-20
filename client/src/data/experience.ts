interface Role {
  title: string;
  startDate: string;
  endDate?: string;
  description?: string;
  current?: boolean;
}

interface Company {
  name: string;
  roles: Role[];
}

// Experience data
export const experienceData: Company[] = [
  {
    name: 'H-E-B',
    roles: [
      {
        title: 'Product Manager',
        startDate: 'February 2025',
        current: true,
      },
      {
        title: 'Senior Software Engineer, hybrid role in product management',
        startDate: 'July 2024',
        endDate: 'January 2025',
        current: false,
      },
      {
        title: 'Software Engineer II, hybrid role in product management',
        startDate: 'April 2023',
        endDate: 'June 2024',
        current: false,
      },
      {
        title: 'Software Engineer I',
        startDate: 'January 2022',
        endDate: 'March 2023',
        current: false,
      },
    ],
  },
  {
    name: 'Kendra Scott',
    roles: [
      {
        title: 'Front End Developer',
        startDate: 'October 2020',
        endDate: 'December 2021',
      },
    ],
  },
];
