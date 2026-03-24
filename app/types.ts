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
  title: string;
  email: string;
  github?: string;
  twitter?: string; // 或者 X
  location?: string;
  bio: ReactNode;   // 支持 JSX，可以在自我介绍里加粗/换行
  avatar?: string;  // 头像路径
}

// 3. 研究项目 / Methodology
export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  techStack: string[]; // 例如 ["Python", "PyTorch", "Next.js"]
  image?: string;      // 图片路径 /images/xxx.png
  link?: string;       // 项目链接
}

// 4. 论文发表
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;       // 会议或期刊名 (如 "CVPR 2025")
  year: string;
  links: {
    pdf?: string;
    code?: string;
    demo?: string;
  };
  highlight?: boolean; // 是否高亮显示（例如 Best Paper）
}

// 5. 摄影画廊
export interface GalleryItem {
  id: string;
  title: string;
  src: string;
  description?: string;
  meta?: string;       // 拍摄参数 (如 "Sony A7R IV · 35mm · f/1.8")
  location?: string;
  date?: string;
}

// 6. 网站总配置
export interface SiteConfig {
  profile: Profile;
  navItems: NavItem[];
  research: ResearchProject[];
  publications: Publication[];
  gallery: GalleryItem[];
}