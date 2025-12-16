"use client";

import { siteConfig } from "@/data/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { PlanetSketch } from "@/components/ui/PlanetSketch";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-retro-bg border-r border-retro-ink/10 flex flex-col z-50">
      
      {/* 1. 顶部装饰 */}
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

      {/* 3. 导航按钮区域 */}
      <nav className="flex-1 px-6 py-8 flex flex-col gap-4">
        {siteConfig.navItems.map((item) => {
          const isActive = pathname === item.path;
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative flex items-center gap-3 px-4 py-3 w-full",
                "font-mono text-sm font-bold tracking-tight transition-all duration-200",
                "border border-retro-ink bg-retro-surface",
                "btn-press",
                isActive 
                  ? "shadow-button translate-x-1 bg-retro-primary text-retro-ink" 
                  : "shadow-button hover:translate-x-1 hover:bg-white text-retro-dim hover:text-retro-ink"
              )}
            >
              <span className={cn("transition-opacity", isActive ? "opacity-100" : "opacity-60")}>
                {item.icon}
              </span>
              <span>{item.label}</span>

              {/* 呼吸指示灯 */}
              {isActive && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-retro-oxide rounded-full shadow-[0_0_8px_var(--color-retro-oxide)] animate-blink-slow opacity-80" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* 4. 底部状态信息 */}
      <div className="p-6 border-t border-retro-ink/10 mt-auto flex justify-between items-end relative overflow-hidden">
        
        {/* 左侧文字 */}
        <div className="font-mono text-[10px] text-retro-dim opacity-60 leading-tight relative z-10">
          MEM: 64KB OK<br/>
          TERM: VT-100<br/>
          V. 2.0.45
        </div>

        {/* 右侧：素描风格星球组件 */}
        {/* 调整位置使其位于右下角 */}
        <PlanetSketch className="absolute -bottom-3 -right-0 w-28 h-28 opacity-25" />

      </div>
    </aside>
  );
}