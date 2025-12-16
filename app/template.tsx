"use client";

// import { motion } from "framer-motion"; // 如果你不想装 framer-motion，我们可以用纯 CSS (见下文)
// 为了保持轻量和你的 tech stack 纯净，我们这里使用纯 CSS 方案，不需要 npm install framer-motion

import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    // 每次路由变化，这个 div 都会重新创建，从而触发 animate-retro-fade 动画
    <div className="animate-retro-fade min-h-screen w-full">
      {children}
    </div>
  );
}