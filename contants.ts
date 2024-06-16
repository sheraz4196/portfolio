import {
  ApproachesType,
  LinkSet,
  ProjectsType,
  SocialMediaLinksType,
  ToolsType,
} from './types/types';
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
export const SocialMediaLinks: SocialMediaLinksType[] = [
  {
    platform: 'X',
    profileUrl: 'https://x.com/ManzoorShe57212',
    icon: '/assets/socialmedia/twitter.svg',
  },
  {
    platform: 'Facebook',
    profileUrl: 'https://www.facebook.com/paksherazsafi/',
    icon: '/assets/socialmedia/facebook.svg',
  },
  {
    platform: 'Github',
    profileUrl: 'https://github.com/sheraz4196',
    icon: '/assets/socialmedia/github.svg',
  },
  {
    platform: 'Email',
    profileUrl:
      'mailto:sheraz.dev121@gmail.com?subject=Hello%dSheraz!=Hi%20there,%0D%0A%0D%0AI%20wanted%20to%20reach%20out%20to%20you.',
    icon: '/assets/socialmedia/email.svg',
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
export const Tools: ToolsType[] = [
  {
    title: 'TypeScript',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It enables developers to add types to their JavaScript code, allowing for improved code quality, enhanced refactoring capabilities, and early detection of bugs.',
    logoUrl: '/assets/tools/typescript-logo.png',
    docsUrl: '',
  },
  {
    title: 'Zod',
    description:
      'Zod is a TypeScript-first schema declaration and validation library. It provides a concise, powerful, and type-safe way to validate and transform data in your applications. Zod schemas can be used to validate API payloads, form inputs, and much more, ensuring that your data conforms to the expected structure.',
    logoUrl: '/assets/tools/zod-logo.jpeg',
    docsUrl: '',
  },
  {
    title: 'React Query',
    description:
      'React Query is a powerful data-fetching and state management library for React applications. It simplifies the process of fetching, caching, synchronizing, and updating server state in your React applications, allowing you to focus on the user interface and user experience. React Query provides a robust set of tools and hooks to handle server state seamlessly.',
    logoUrl: '',
    docsUrl: '',
  },
  {
    title: 'Shadcn',
    description:
      'Shadcn is a modern library for styling React components using a CSS-in-JS approach. It focuses on simplicity and performance, providing a clean and efficient way to apply styles to your components. With Shadcn, you can write maintainable and scalable styles directly within your JavaScript or TypeScript code, leveraging the full power of CSS with the flexibility of JavaScript.',
    logoUrl: '',
    docsUrl: '',
  },
  {
    title: 'Framer Motion',
    description:
      'Framer Motion is a popular animation library for React that allows developers to create complex animations and gestures with ease. It provides a simple API to animate elements, handle gestures, and create dynamic user interfaces. Framer Motion is designed to work seamlessly with React, enabling developers to build fluid and interactive experiences in their applications.',
    logoUrl: '',
    docsUrl: '',
  },
];
export const Aesthetics: string[] = [
  '/assets/aesthetics/forest.jpg',
  '/assets/aesthetics/macbook.jpg',
  '/assets/aesthetics/snooker.jpg',
  '/assets/aesthetics/team.jpg',
];
export const SkillsSet = [
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'JavaScript',
  'Typescript',
  'Zod',
  'SaaS',
  'React.js',
  'Next.js',
  'Zustand',
  'Git',
];
