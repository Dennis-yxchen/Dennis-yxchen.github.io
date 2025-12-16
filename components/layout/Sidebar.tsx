"use client";

import { siteConfig } from "@/data/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    // 侧边栏容器：固定宽度，高度 100vh，带有右边框
    <aside className="fixed top-0 left-0 h-screen w-64 bg-retro-bg border-r border-retro-ink/10 flex flex-col z-50">

      {/* 1. 顶部装饰：三色条纹 (Teal, Yellow, Red) */}
      <div className="flex h-3 w-full border-b border-retro-ink/10">
        <div className="flex-1 bg-[var(--color-terminal-teal)]" />
        <div className="flex-1 bg-[var(--color-terminal-gold)]" />
        <div className="flex-1 bg-[var(--color-terminal-red)]" />
      </div>

      {/* 2. LOGO 区域 */}
      <div className="p-8 pb-4">
        <h1 className="font-display text-2xl font-bold tracking-tighter text-retro-ink uppercase chromatic-text">
          {siteConfig.profile.name.split(" ")[0]}
          <span className="opacity-40">_LAB</span>
        </h1>
        <p className="font-mono text-xs text-retro-dim mt-2">
          :: SYSTEM ONLINE ::
        </p>
      </div>

      {/* 3. 导航按钮区域 (像实验终端的控制面板) */}
      <nav className="flex-1 px-6 py-8 flex flex-col gap-4">
        {siteConfig.navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                // 基础样式：长方体按钮，有边框
                "relative flex items-center gap-3 px-4 py-3 w-full",
                "font-mono text-sm font-bold tracking-tight transition-all duration-200",
                "border border-retro-ink bg-retro-surface",
                "btn-press", // 引入自定义的按压效果

                // 状态样式：激活 vs 未激活
                isActive
                  ? "shadow-button translate-x-1 bg-retro-primary text-retro-ink" // 激活：变琥珀色，保持投影
                  : "shadow-button hover:translate-x-1 hover:bg-white text-retro-dim hover:text-retro-ink" // 未激活：悬停移动
              )}
            >
              {/* 图标 */}
              <span className={cn("transition-opacity", isActive ? "opacity-100" : "opacity-60")}>
                {item.icon}
              </span>

              {/* 文字 */}
              <span>{item.label}</span>

              {/* 装饰：激活状态下右侧显示一个小指示灯 */}
              {isActive && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-retro-ink animate-pulse" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* 4. 底部状态信息 */}
      <div className="p-6 border-t border-retro-ink/10">
        <div className="font-mono text-[10px] text-retro-dim opacity-60 leading-tight">
          MEM: 64KB OK<br/>
          TERM: VT-100<br/>
          V. 2.0.45
        </div>
      </div>
    </aside>
  );
}