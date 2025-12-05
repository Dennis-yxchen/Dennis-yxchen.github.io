"use client";

import { siteConfig } from "@/data/config";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b-2 border-retro-ink">
      {/* 背景层：高饱和琥珀色 + 轻微噪点 */}
      <div className="absolute inset-0 bg-retro-primary bg-noise opacity-100" />

      <div className="relative mx-auto max-w-7xl px-4 flex items-center justify-between h-16">

        {/* Logo / Home */}
        <Link
          href="#hero"
          className="font-display font-bold text-xl tracking-tighter text-retro-ink hover:text-white transition-colors uppercase"
        >
          {siteConfig.profile.name.split(" ")[0]}
          <span className="opacity-50">.OS</span>
        </Link>

        {/* Desktop Nav - 模拟物理按钮排 */}
        <div className="hidden md:flex items-stretch h-full">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "flex items-center gap-2 px-6 h-full",
                "font-mono text-sm font-bold tracking-tight text-retro-ink",
                "border-l border-retro-ink/20", // 按钮间的分隔线
                "hover:bg-white/20 hover:text-retro-ink transition-colors", // Hover 变亮效果
                "active:bg-retro-ink/10" // 点击反馈
              )}
            >
              {/* 如果 config 里配了 icon 就显示 */}
              <span className="opacity-70">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Nav Placeholder (简单版) */}
        <div className="md:hidden text-xs font-mono text-retro-ink/60">
          [MENU]
        </div>
      </div>
    </nav>
  );
}