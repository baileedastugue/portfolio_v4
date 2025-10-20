interface Project {
  name: string;
  link: string;
  description: string;
}

export const projectsData: Project[] = [
  {
    name: 'Quibble',
    link: 'https://chromewebstore.google.com/detail/quibble/ijlhljocfgbioajcolngegjbmgjjcpli',
    description:
      'A Chrome extension to ensure pixel-perfect translation of designs into functional code. This was build for the engineer in mind, with automatic recognition of page routing and breakpoint detection.',
  },
];
