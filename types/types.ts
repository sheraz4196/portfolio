import { ReactNode } from 'react';

export type LinkSet = {
  text: string;
  link: string;
};
export type SocialMediaLinksType = {
  platform: string;
  profileUrl: string;
  icon: string;
};
export type ApproachesType = {
  title: string;
  description: string;
};
export type ProjectsType = {
  title: string;
  link: string;
  thumbnail: string;
};

export type ToolsType = {
  title: string;
  description: string;
  logoUrl: string;
  docsUrl: string;
  myBlogUrl?: string;
};
