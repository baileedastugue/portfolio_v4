import type { Company } from '../types';

export const experienceData: Company[] = [
  {
    name: 'H-E-B',
    roles: [
      {
        title: 'Senior Technical Product Manager',
        startDate: 'February 2025',
        current: true,
        tagline:
          'Currently leading product strategy and development for utilities and sustainability domains.',
      },
      {
        title: 'Senior Software Engineer',
        startDate: 'July 2024',
        endDate: 'January 2025',
        current: false,
        tagline:
          'Hybrid role in product management, <span>driving product vision, user experience, and front-end implementation across enterprise core services.</span>',
      },
      {
        title: 'Software Engineer II',
        startDate: 'April 2023',
        endDate: 'June 2024',
        current: false,
        tagline:
          'Hybrid role in product management, <span>leading product strategy, UX design, and front-end development of health and wellness applications (including a <a href="https://vaccine.heb.com/scheduler" target="_blank" rel="noopener noreferrer" class="tagline-link">vaccine scheduler<svg class="external-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15,3 21,3 21,9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>).</span>',
      },
      {
        title: 'Software Engineer I',
        startDate: 'January 2022',
        endDate: 'March 2023',
        current: false,
        tagline: 'Built enterprise-level web applications for internal use.',
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
        tagline:
          'Created personalized experiences for 800,000+ online transactions.',
      },
    ],
  },
];
