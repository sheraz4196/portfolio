import { ApproachesType, LinkSet, ProjectsType } from './types/types';
export const NavigationLinks: LinkSet[] = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'About',
    link: '/about',
  },
  {
    text: 'Toolkit',
    link: '/toolkit',
  },
  {
    text: 'Projects',
    link: '/projects',
  },
  {
    text: 'Contact Me',
    link: '/contact',
  },
];
export const ApproachesContent: ApproachesType[] = [
  {
    title: 'Shared Ownership',
    description: `Whether I work independently or integrate with your team, everyone is involved in the process, ensuring a collaborative and inclusive approach.`,
  },
  {
    title: 'Rapid Execution',
    description: `I work fast, iterating quickly to explore various options until we find the perfect solution. Speed and efficiency are key.`,
  },
  {
    title: 'Show and Tell',
    description: `I frequently share progress updates, often in the form of screen recordings with voice-overs, to keep everyone in the loop.`,
  },
  {
    title: 'Bias for Action',
    description: `I prefer creating tangible artifacts to visualize ideas rather than relying on lengthy documents that often go unread.`,
  },
  {
    title: 'Systematic Approach',
    description: `Whether it's a small feature or an entire design system, I focus on creating reusable components that benefit the entire team.`,
  },
  {
    title: 'Design Thinking',
    description: `I'm not afraid to discard an idea and explore divergent solutions. The more options we consider, the better the final result.`,
  },
];
export const Projects: ProjectsType[] = [
  {
    title: 'Listing Partners',
    link: 'https://www.listingpartners.com.au/',
    thumbnail: '/assets/projects/listing-partners.png',
  },
  {
    title: 'Tech And Sec',
    link: 'https://www.techandsec.com/',
    thumbnail: '/assets/projects/techandsec.png',
  },
  {
    title: 'Infinity Devs',
    link: 'https://infinitydevs.io/',
    thumbnail: '/assets/projects/infinitydevs.png',
  },
  {
    title: 'Crypto Receipt Generator',
    link: 'https://crypto-invoice-generator-git-main-isaadgulzar.vercel.app/',
    thumbnail: '/assets/projects/crpyto-page.png',
  },
  {
    title: 'Fleet Solutions',
    link: 'https://fleetsolutions.vercel.app/',
    thumbnail: '/assets/projects/fleetsolutions.png',
  },
  {
    title: 'Web Devs',
    link: 'https://sheraz4196.github.io/WEB-DEVS-DEMO-PROJECT/',
    thumbnail: '/assets/projects/web-devs.png',
  },
  {
    title: 'Natours',
    link: 'https://sheraz4196.github.io/Natours-Test-Project/',
    thumbnail: '/assets/projects/natours.png',
  },
  {
    title: 'Omnifood',
    link: 'https://sheraz4196.github.io/Omnifood/',
    thumbnail: '/assets/projects/omnifood.png',
  },
];
