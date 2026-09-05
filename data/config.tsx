import { SiteConfig } from "@/app/types";
import { BookOpen, Camera, FileText, FolderGit2, UserRound, UsersRound } from "lucide-react";

const linkClass = "font-medium text-retro-ink underline decoration-retro-primary/70 underline-offset-4 transition-colors hover:text-retro-accent hover:decoration-retro-ink";

export const siteConfig: SiteConfig = {
  profile: {
    name: "Yuxuan Chen",
    displayName: "Yuxuan Chen",
    title: "MPhil Student · AI Agents",
    email: "yxchen02@connect.hku.hk",
    github: "https://github.com/Dennis-yxchen",
    googleScholar: "https://scholar.google.com/citations?user=eGfLU8cAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/yuxuan-chen-86890934b",
    instagram: "https://www.instagram.com/dennis_c405",
    location: "Hong Kong",
    affiliation: "The University of Hong Kong",
    affiliationUrl: "https://www.hku.hk/",
    avatar: "/images/profile-photo.jpg",
    bio: (
      <>
        I am a second-year MPhil student in the School of Computing and Data
        Science at the University of Hong Kong, advised by Prof. Chao Huang. My
        research focuses on self-improving AI agents, agent memory, and
        large-language-model-based simulation.
      </>
    ),
  },

  navItems: [
    { label: "About", path: "/", icon: <UserRound size={17} /> },
    { label: "Publications", path: "/publications", icon: <BookOpen size={17} /> },
    { label: "Projects", path: "/research", icon: <FolderGit2 size={17} /> },
    { label: "CV", path: "/cv", icon: <FileText size={17} /> },
    { label: "Photography", path: "/photography", icon: <Camera size={17} /> },
    { label: "Misc", path: "/misc", icon: <UsersRound size={17} /> },
  ],

  news: [
    {
      date: "Jul 2026",
      content: (
        <>
          <a className={linkClass} href="https://open-space.cloud/">OpenSpace v2</a>,
          the skill management layer for AI agents, was released.
        </>
      ),
    },
    {
      date: "Jul 2026",
      content: (
        <>
          Our work <a className={linkClass} href="https://aclanthology.org/2026.findings-acl.396/">Law in Silico</a> was
          published in Findings of ACL 2026.
        </>
      ),
    },
    {
      date: "Mar 2026",
      content: (
        <>
          We released <a className={linkClass} href="https://github.com/HKUDS/OpenSpace">OpenSpace v1</a>, enabling
          AI agents to learn, evolve, and share reusable skills across tasks.
        </>
      ),
    },
    {
      date: "Mar 2026",
      content: (
        <>
          We released <a className={linkClass} href="https://github.com/HKUDS/FastCode">FastCode</a>, a fast and
          cost-efficient framework for repository-scale code understanding.
        </>
      ),
    },
    {
      date: "Dec 2025",
      content: (
        <>
          We released <a className={linkClass} href="https://github.com/HKUDS/AI-Trader">AI-Trader</a>, a benchmark
          and platform for autonomous agents in real-time financial markets.
        </>
      ),
    },
    {
      date: "Dec 2025",
      content: (
        <>
          Our work on LLM-agent generalization using <a className={linkClass} href="https://proceedings.neurips.cc/paper_files/paper/2025/hash/d0251bbbc0288f241b878775ba1735dc-Abstract-Datasets_and_Benchmarks_Track.html">Concordia</a> was
          published at the NeurIPS 2025 Datasets and Benchmarks Track.
        </>
      ),
    },
    {
      date: "Jan 2025",
      content: (
        <>
          <a className={linkClass} href="https://openreview.net/forum?id=3ms8EQY7f8">Simulating Human-like Daily Activities with Desire-driven Autonomy</a> was
          accepted at ICLR 2025.
        </>
      ),
    },
    {
      date: "Dec 2024",
      content: (
        <>
          Our team (BIGAI NLCo) ranked <strong className="font-semibold text-retro-ink">#9</strong> in the NeurIPS
          2024 Concordia Contest.
        </>
      ),
    },
  ],

  researchInterests: [
    "Self-improving AI agents that learn from experience, feedback, and reusable skills",
    "Recursive self-improvement in agentic systems",
    "Memory systems for AI agents",
    "LLM-based agent simulation across domains",
  ],

  research: [
    {
      id: "openspace",
      title: "OpenSpace",
      role: "Contributor",
      description: "A skill management layer that helps AI agents retrieve, evaluate, share, and continuously improve reusable skills.",
      topics: ["AI Agents", "Skill Evolution", "Agent Memory"],
      image: "/images/Remove background project.png",
      links: {
        website: "https://open-space.cloud/",
        code: "https://github.com/HKUDS/OpenSpace",
      },
    },
    {
      id: "fastcode",
      title: "FastCode",
      role: "Contributor",
      description: "A structural-scouting and cost-aware framework for accurate, token-efficient repository-scale code understanding.",
      topics: ["Code Agents", "Repository Reasoning", "Efficiency"],
      image: "/images/gemini-svg.svg",
      links: {
        code: "https://github.com/HKUDS/FastCode",
        paper: "https://arxiv.org/abs/2603.01012",
      },
    },
    {
      id: "ai-trader",
      title: "AI-Trader",
      role: "Contributor",
      description: "A fully automated platform and live benchmark for autonomous agents operating across real-time financial markets.",
      topics: ["Autonomous Agents", "Benchmarking", "Financial Markets"],
      links: {
        website: "https://ai4trade.ai/",
        code: "https://github.com/HKUDS/AI-Trader",
        paper: "https://arxiv.org/abs/2512.10971",
      },
    },
  ],

  publications: [
    {
      id: "law-in-silico",
      title: "Law in Silico: Simulating Legal Society with LLM-Based Agents",
      authors: ["Yiding Wang*", "Yuxuan Chen*", "Fanxu Meng", "Xifan Chen", "Xiaolei Yang", "Muhan Zhang"],
      venue: "Findings of ACL",
      year: "2026",
      description: "An LLM-agent framework for simulating legal societies through individual and institutional decision-making.",
      links: { pdf: "https://aclanthology.org/2026.findings-acl.396.pdf" },
    },
    {
      id: "fastcode-paper",
      title: "FastCode: Fast and Cost-Efficient Code Understanding and Reasoning",
      authors: ["Zhonghang Li*", "Zongwei Li*", "Yuxuan Chen", "Han Shi", "Jiawei Li", "Jierun Chen", "Haoli Bai", "Chao Huang"],
      venue: "arXiv preprint",
      year: "2026",
      description: "Structural scouting and cost-aware context construction for repository-scale code reasoning.",
      links: {
        pdf: "https://arxiv.org/pdf/2603.01012",
        code: "https://github.com/HKUDS/FastCode",
      },
    },
    {
      id: "ai-trader-paper",
      title: "AI-Trader: Benchmarking Autonomous Agents in Real-Time Financial Markets",
      authors: ["Tianyu Fan", "Yuhao Yang", "Yangqin Jiang", "Yifei Zhang", "Yuxuan Chen", "Chao Huang"],
      venue: "arXiv preprint",
      year: "2025",
      description: "A live benchmark for evaluating autonomous LLM agents across stocks and cryptocurrency markets.",
      links: {
        pdf: "https://arxiv.org/pdf/2512.10971",
        code: "https://github.com/HKUDS/AI-Trader",
        project: "https://ai4trade.ai/",
      },
    },
    {
      id: "concordia",
      title: "Evaluating Generalization Capabilities of LLM-Based Agents in Mixed-Motive Scenarios Using Concordia",
      authors: ["Chandler Smith", "Marwa Abdulhai", "Manfred Díaz", "[54 authors omitted]", "Yuxuan Chen", "[28 authors omitted]"],
      venue: "NeurIPS Datasets & Benchmarks",
      year: "2025",
      description: "An evaluation of how LLM agents generalize cooperative behavior across unseen partners and social scenarios.",
      links: { pdf: "https://proceedings.neurips.cc/paper_files/paper/2025/file/d0251bbbc0288f241b878775ba1735dc-Paper-Datasets_and_Benchmarks_Track.pdf" },
    },
    {
      id: "d2a",
      title: "Simulating Human-like Daily Activities with Desire-driven Autonomy",
      authors: ["Yiding Wang*", "Yuxuan Chen*", "Fangwei Zhong", "Long Ma", "Yizhou Wang"],
      venue: "ICLR",
      year: "2025",
      description: "A desire-driven autonomous agent that proposes and selects activities using a dynamic value system inspired by human needs.",
      links: { pdf: "https://openreview.net/pdf?id=3ms8EQY7f8" },
    },
  ],

  education: [
    {
      institution: "The University of Hong Kong",
      program: "MPhil in Computer Science · School of Computing and Data Science",
      period: "2025–Present",
    },
    {
      institution: "The University of Hong Kong",
      program: "BEng in Computer Science",
      period: "2021–2025",
    },
    {
      institution: "Peking University",
      program: "Undergraduate Exchange Programme · Computer Science",
    },
  ],

  experience: [
    {
      title: "LLM Agents for Human Activity Simulation",
      institution: "Beijing Institute for General Artificial Intelligence (BIGAI)",
      period: "Mar 2024–Sep 2024",
      details: [
        "Worked with Prof. Fangwei Zhong on LLM agents for simulating human-like daily activities.",
        "Designed simulation environments and evaluation protocols for realistic activity generation.",
        "Developed the work that became the D2A paper accepted at ICLR 2025.",
      ],
    },
    {
      title: "Graph Augmentation Benchmarking",
      institution: "Center for Machine Learning Research, Peking University",
      details: [
        "During an exchange program, benchmarked graph augmentation methods under the supervision of Prof. Wentao Zhang.",
      ],
    },
  ],

  friends: [
    { name: "Entong He", url: "https://heentong.github.io/" },
    { name: "Yuemin Yu", url: "https://yuyueminaustin.github.io/" },
    { name: "Yiding Wang", url: "https://yiding-w.github.io/" },
    { name: "Yaowen Ye", url: "https://helloelwin.github.io/" },
    { name: "Zheyu Fan", url: "https://lorduky.github.io/" },
    { name: "Yichuan Song", url: "https://www.linkedin.com/in/lovestaiga-199257246/" },
  ],

  gallery: [
    {
      id: "personal-work",
      title: "Between Walls",
      cover: "/images/photo.jpg",
      description: "A quiet study of light, architecture, and an interrupted silhouette.",
      meta: "Personal work",
      photos: [
        { src: "/images/photo.jpg", caption: "Between Walls" },
      ],
    },
  ],
};
