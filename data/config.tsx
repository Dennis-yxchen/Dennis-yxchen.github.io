import { SiteConfig } from "@/app/types";
import { Cpu, FileText, Layers, Radio } from "lucide-react";

export const siteConfig: SiteConfig = {
  // === 1. 个人档案 ===
  profile: {
    name: "YOUR_NAME",
    title: "Researcher / Developer",
    email: "your.email@example.com",
    github: "https://github.com/yourname",
    location: "Internet",
    avatar: "/images/avatar_placeholder.jpg", // 请在 public/images 放一张图片
    bio: (
      <>
        Hello, I am a researcher interested in <b className="text-retro-primary">Machine Learning</b> and <b className="text-retro-primary">Human-Computer Interaction</b>. 
        <br /><br />
        Currently working on <b>Retrieval-Augmented Generation (RAG)</b> systems and building minimalist digital gardens.
        Welcome to my digital archive.
      </>
    ),
  },

  // === 2. 导航栏 ===
  // 想要添加新板块？在这里加一行即可
  navItems: [
    { label: "ID.CARD", path: "/", icon: <Cpu size={18} /> }, // 首页
    { label: "RESEARCH", path: "/research", icon: <Layers size={18} /> },
    { label: "PUBLICATIONS", path: "/publications", icon: <FileText size={18} /> },
    { label: "MISC.DATA", path: "/misc", icon: <Radio size={18} /> },
  ],

  // === 3. 研究项目 (Methodology) ===
  research: [
    {
      id: "proj-01",
      title: "Project Alpha: Neural Rendering",
      description: "Investigating the efficiency of neural radiance fields in real-time environments. Proposed a new sparse voxel octree structure.",
      techStack: ["Python", "CUDA", "PyTorch"],
      image: "/images/project_1.jpg", // 记得在 public/images 里放图，否则会裂开
    },
    {
      id: "proj-02",
      title: "Agent Memory Systems",
      description: "Designing long-term memory modules for autonomous agents using vector databases and knowledge graphs.",
      techStack: ["LangChain", "Neo4j", "TypeScript"],
    },
  ],

  // === 4. 论文发表 ===
  publications: [
    {
      id: "pub-01",
      title: "Optimizing Transformer Attention for Long Contexts",
      authors: ["Your Name", "Co-Author A", "Co-Author B"],
      venue: "NeurIPS 2024",
      year: "2024",
      links: {
        pdf: "#",
        code: "https://github.com",
      },
      highlight: true, // 这篇会显示特殊的“高亮”样式
    },
    {
      id: "pub-02",
      title: "A Survey on Multimodal RAG",
      authors: ["Your Name", "Advisor Name"],
      venue: "ArXiv Preprint",
      year: "2023",
      links: {
        pdf: "#",
      },
    },
  ],

  // === 5. 杂项 (音乐/摄影) ===
  misc: [
    {
      id: "music-01",
      type: "music",
      title: "Synthwave Mix 2077",
      src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // 替换为你喜欢的 YouTube 链接
      meta: "Lofi Girl",
    },
    {
      id: "photo-01",
      type: "photo",
      title: "Tokyo Night",
      src: "/images/photo_1.jpg",
      meta: "Sony A7R, 35mm",
      description: "Cyberpunk vibes in Shinjuku.",
    },
  ],
};