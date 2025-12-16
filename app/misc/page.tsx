import { SectionContainer } from "@/components/ui/SectionContainer";
import { siteConfig } from "@/data/config";
import Image from "next/image";
import { Disc, Play } from "lucide-react";

export default function MiscPage() {
  const musicItems = siteConfig.misc.filter(i => i.type === 'music');
  const photoItems = siteConfig.misc.filter(i => i.type === 'photo');

  return (
    <SectionContainer id="misc" title="MISC_DATA_FRAGMENTS" index="03">
      
      {/* 1. 音频日志模块 */}
      <div className="mb-16">
        <h3 className="font-mono text-xs text-retro-dim mb-4 flex items-center gap-2">
          <Disc size={14} className="animate-spin-slow" /> AUDIO_LOGS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {musicItems.map((item) => (
            <a 
              key={item.id}
              href={item.src} 
              target="_blank"
              className="flex items-center gap-4 p-4 border border-retro-ink/20 bg-retro-surface hover:border-retro-primary hover:translate-x-1 transition-all group"
            >
              <div className="w-10 h-10 bg-retro-ink flex items-center justify-center text-retro-bg group-hover:bg-retro-primary group-hover:text-retro-ink transition-colors">
                <Play size={16} fill="currentColor" />
              </div>
              <div>
                <div className="font-display font-bold text-sm text-retro-ink">{item.title}</div>
                <div className="font-mono text-xs text-retro-dim">{item.meta}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 2. 视觉档案模块 */}
      <div>
        <h3 className="font-mono text-xs text-retro-dim mb-4">VISUAL_RECORDS</h3>
        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          {photoItems.map((item) => (
            <div key={item.id} className="break-inside-avoid relative group">
              <div className="border-4 border-white shadow-hard relative overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* 悬停显示的详细信息遮罩 */}
                <div className="absolute inset-0 bg-retro-primary/90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-display font-bold text-retro-ink text-xl">{item.title}</span>
                  <span className="font-mono text-xs text-retro-ink/70 mt-1">{item.meta}</span>
                </div>
              </div>
              <p className="font-mono text-[10px] text-retro-dim mt-2 text-right">
                IMG_REF: {item.id}
              </p>
            </div>
          ))}
        </div>
      </div>

    </SectionContainer>
  );
}