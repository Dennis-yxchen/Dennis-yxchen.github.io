import { ReactNode } from "react";

// 1. 导航栏配置
export interface NavItem {
  label: string;   // 显示的文字 (如 "RESEARCH")
  path: string;    // 路由路径 (如 "/research")
  icon?: ReactNode; // 可选的图标
}

// 2. 个人基础信息
export interface Profile {
  name: string;
  displayName: string;
  title: string;
  email: string;
  github?: string;
  googleScholar?: string;
  linkedin?: string;
  instagram?: string;
  location?: string;
  affiliation: string;
  affiliationUrl?: string;
  bio: ReactNode;
  avatar?: string;
}

export interface NewsItem {
  date: string;
  content: ReactNode;
}

// 3. 研究项目 / Methodology
export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  role?: string;
  topics: string[];
  image?: string;
  links: {
    website?: string;
    code?: string;
    paper?: string;
  };
}

// 4. 论文发表
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;       // 会议或期刊名 (如 "CVPR 2025")
  year: string;
  description?: string;
  links: {
    pdf?: string;
    code?: string;
    project?: string;
  };
}

export interface EducationItem {
  institution: string;
  program: string;
  period?: string;
}

export interface ExperienceItem {
  title: string;
  institution: string;
  period?: string;
  details: string[];
}

export interface FriendItem {
  name: string;
  url: string;
}

// 5. 摄影画廊
export interface GalleryPhoto {
  src: string;
  caption?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  cover: string;
  description?: string;
  meta?: string;
  photos: GalleryPhoto[];
}

// 6. 网站总配置
export interface SiteConfig {
  profile: Profile;
  navItems: NavItem[];
  news: NewsItem[];
  researchInterests: string[];
  research: ResearchProject[];
  publications: Publication[];
  education: EducationItem[];
  experience: ExperienceItem[];
  friends: FriendItem[];
  gallery: GalleryItem[];
}
