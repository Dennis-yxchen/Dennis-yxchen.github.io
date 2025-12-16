import { cn } from "@/lib/utils";

interface PlanetSketchProps {
  className?: string;
}

export function PlanetSketch({ className }: PlanetSketchProps) {
  return (
    <div className={cn("select-none pointer-events-none", className)}>
      <svg 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g transform="translate(60, 60) rotate(-20) translate(-60, -60)">
          
          {/* --- Layer 1: 后环 (Back Rings) --- */}
          {/* 1.1 主环 (粗) - 氧化红 */}
          <path 
            d="M 12 60 A 48 14 0 0 1 108 60" 
            stroke="var(--color-terminal-red)" 
            strokeWidth="6"
            strokeLinecap="butt"
          />
          {/* 1.2 副环 (细) - 放在主环外侧 */}
          <path 
            d="M 6 60 A 54 16 0 0 1 114 60" 
            stroke="var(--color-terminal-red)" 
            strokeWidth="1"
            strokeLinecap="butt"
            opacity="0.8"
          />

          {/* --- Layer 2: 星球本体 --- */}
          {/* 纯色扁平填充，无光影 */}
          <circle 
            cx="60" 
            cy="60" 
            r="32" 
            fill="var(--color-terminal-gold)" 
          />

          {/* --- Layer 3: 前环 (Front Rings) --- */}
          {/* 3.1 主环 (粗) */}
          <path 
            d="M 108 60 A 48 14 0 0 1 12 60" 
            stroke="var(--color-terminal-red)" 
            strokeWidth="6" 
            strokeLinecap="butt"
          />
          {/* 3.2 副环 (细) */}
          <path 
            d="M 114 60 A 54 16 0 0 1 6 60" 
            stroke="var(--color-terminal-red)" 
            strokeWidth="1"
            strokeLinecap="butt"
            opacity="0.8"
          />
          
          {/* 装饰点 (保留青色平衡点) */}
          <circle cx="10" cy="45" r="3" fill="var(--color-terminal-teal)" />

        </g>
      </svg>
    </div>
  );
}