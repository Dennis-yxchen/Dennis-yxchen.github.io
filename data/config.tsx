import { SiteConfig } from "@/app/types";
import { Cpu, FileText, Layers, Camera } from "lucide-react";

export const siteConfig: SiteConfig = {
  // === 1. 个人档案 ===
  profile: {
    name: "Dennis",
    title: "MPhil · Researcher / Developer",
    email: "ddddennis.chan@gmail.com",
    github: "https://github.com/yourname",
    location: "World",
    avatar: "/images/avatar.jpg",
    bio: (
      <>
        Hello, I am a researcher interested in <b className="text-retro-primary">LLM Agent</b> (coding, multi-agent) and <b className="text-retro-primary">RAG systems</b>. 
        <br /><br />
        Currently exploring autonomous coding agents and retrieval-augmented generation architectures.
        Welcome to my digital archive.
      </>
    ),
  },

  // === 2. 导航栏 ===
  // 想要添加新板块？在这里加一行即可
  navItems: [
    { label: "ID.CARD", path: "/", icon: <Cpu size={18} /> }, // 首页
    { label: "PROJECT", path: "/research", icon: <Layers size={18} /> },
    { label: "PUBLICATIONS", path: "/publications", icon: <FileText size={18} /> },
    { label: "GALLERY", path: "/misc", icon: <Camera size={18} /> },
  ],

  // === 3. 研究项目 (Methodology) ===
  research: [
    {
      id: "proj-01",
      title: "FastCode",
      description: "A token-efficient framework for fast, accurate, and cost-effective code understanding at scale.",
      techStack: [],
      image: "/images/gemini-svg.svg",
      link: "https://github.com/HKUDS/FastCode",
    },
    {
      id: "proj-02",
      title: "OpenSpace",
      description: "The self-evolving engine where every task makes every agent smarter and more cost-efficient.",
      techStack: [],
      image: "/images/Remove background project.png",
      link: "https://github.com/HKUDS/OpenSpace",
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

  // === 5. 摄影画廊 ===
  gallery: [
    {
      id: "album-01",
      title: "Tokyo Nights",
      cover: "/images/gallery/tokyo_01.jpg",
      description: "Neon-soaked streets after midnight.",
      meta: "2024 · Tokyo, Japan",
      photos: [
        { src: "/images/gallery/tokyo_01.jpg", caption: "Shinjuku Crossing" },
        { src: "/images/gallery/tokyo_02.jpg", caption: "Kabukichō Alley" },
        { src: "/images/gallery/tokyo_03.jpg", caption: "Shibuya Rain" },
      ],
    },
    {
      id: "album-02",
      title: "Analog Days",
      cover: "/images/gallery/analog_01.jpg",
      description: "Shot on film. Portra 400 & Kodak Gold.",
      meta: "2023 · Various",
      photos: [
        { src: "/images/gallery/analog_01.jpg", caption: "Morning Light" },
        { src: "/images/gallery/analog_02.jpg", caption: "The Old Bridge" },
      ],
    },
  ],
};