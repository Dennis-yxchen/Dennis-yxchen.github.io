import React from 'react';

export function ConstructivistArt() {
  return (
    // 容器：增加了 mix-blend-mode 模拟复古印刷感，降低整体透明度以免抢夺文字注意力
    <div className="w-full max-w-3xl mx-auto mt-20 mb-10 opacity-60 pointer-events-none select-none overflow-hidden">
      <svg
        viewBox="0 0 600 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ filter: 'contrast(1.1) sepia(0.2)' }} // 轻微滤镜增加陈旧感
      >
        {/* definitions: 定义网格图案 */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-retro-ink)" strokeWidth="0.5" opacity="0.1"/>
          </pattern>
        </defs>

        {/* 1. 背景层：工程蓝图网格 */}
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* 2. 构成主义核心：巨大的对角线张力 */}
        <g transform="translate(300, 175)">
          {/* 主轴：深色工业杆 */}
          <line x1="-400" y1="200" x2="400" y2="-200" stroke="var(--color-retro-ink)" strokeWidth="2" opacity="0.4" />
          
          {/* 装饰线：平行轨道 */}
          <line x1="-380" y1="210" x2="420" y2="-190" stroke="var(--color-retro-ink)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
        </g>

        {/* 3. 几何主体 (Suprematism Composition) */}
        
        {/* 巨大的琥珀色圆 (代表天体/原子核) */}
        <circle 
          cx="380" 
          cy="120" 
          r="90" 
          fill="var(--color-retro-primary)" 
          opacity="0.9" 
          style={{ mixBlendMode: "multiply" }} 
        />

        {/* 青色梯形 (模拟苏联海报中的动态方块) */}
        <path 
          d="M 100 280 L 500 280 L 450 320 L 50 320 Z" 
          fill="var(--color-retro-primary)"
          opacity="0.6"
          style={{ mixBlendMode: "multiply" }} 
        />

        {/* 氧化红楔形 (经典的“红色楔子”隐喻，但颜色更沉稳) */}
        <path 
          d="M 280 280 L 420 80 L 380 280 Z" 
          fill="var(--color-retro-oxide)" 
          opacity="0.8"
          style={{ mixBlendMode: "multiply" }} 
        />

        {/* 4. 原子朋克/示波器细节 */}
        
        {/* 正弦波 (Oscilloscope wave) */}
        <path 
          d="M 50 150 Q 100 100 150 150 T 250 150 T 350 150" 
          stroke="var(--color-retro-ink)" 
          strokeWidth="2" 
          fill="none"
          opacity="0.6"
        />
        
        {/* 轨道环 (Orbit) */}
        <ellipse 
          cx="380" 
          cy="120" 
          rx="140" 
          ry="40" 
          stroke="var(--color-retro-ink)" 
          strokeWidth="1" 
          transform="rotate(-15 380 120)" 
          strokeDasharray="60 20" // 巨大的缺口，显得更透气
          opacity="0.5" 
        />

        {/* 卫星/电子 (不再闪烁，而是作为一个稳定的点) */}
        <circle cx="245" cy="155" r="6" fill="var(--color-retro-primary)" />
        <circle cx="245" cy="155" r="3" fill="var(--color-retro-surface)" />

        {/* 5. 装饰性技术数据 (Data Overlay) */}
        <g opacity="0.7">
          {/* 右侧垂直标尺 */}
          <line x1="550" y1="50" x2="550" y2="300" stroke="var(--color-retro-ink)" strokeWidth="1" />
          <line x1="545" y1="50" x2="555" y2="50" stroke="var(--color-retro-ink)" strokeWidth="1" />
          <line x1="545" y1="175" x2="555" y2="175" stroke="var(--color-retro-ink)" strokeWidth="1" />
          <line x1="545" y1="300" x2="555" y2="300" stroke="var(--color-retro-ink)" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}
