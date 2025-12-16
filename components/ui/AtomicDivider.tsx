import { cn } from "@/lib/utils";

interface AtomicDividerProps {
  className?: string;
}

export function AtomicDivider({ className }: AtomicDividerProps) {
  return (
    <div className={cn("relative flex items-center justify-center w-full py-12 opacity-80", className)}>
      
      {/* 左侧线条：从透明渐变到实色 */}
      <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-transparent to-retro-ink/30" />
      
      {/* 核心星芒 SVG */}
      <div className="mx-4 relative shrink-0 text-retro-primary animate-pulse-slow">
        {/* 外发光效果 */}
        <div className="absolute inset-0 bg-retro-primary blur-md opacity-40 rounded-full" />
        
        {/* 不对称星芒形状 */}
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="relative drop-shadow-[0_0_8px_rgba(255,191,0,0.5)]"
        >
          {/* 一个拉长的四角星：上下长，左右短 */}
          <path d="M12 0 C 13 8, 15 11, 24 12 C 15 13, 13 16, 12 24 C 11 16, 9 13, 0 12 C 9 11, 11 8, 12 0 Z" />
        </svg>
      </div>

      {/* 右侧线条：从实色渐变到透明 */}
      <div className="h-px w-full max-w-[200px] bg-gradient-to-l from-transparent to-retro-ink/30" />

      {/* 装饰性的小圆点，增加细节 */}
      <div className="absolute flex gap-8 pointer-events-none">
        <div className="w-1 h-1 rounded-full bg-retro-accent opacity-50" />
        <div className="w-1 h-1 rounded-full bg-retro-signal opacity-50" />
      </div>

    </div>
  );
}