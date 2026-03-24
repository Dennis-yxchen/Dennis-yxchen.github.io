import { SectionContainer } from "@/components/ui/SectionContainer";
import { siteConfig } from "@/data/config";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function ResearchPage() {
  return (
    <SectionContainer id="research" title="RESEARCH_PROTOCOLS" index="01">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {siteConfig.research.map((project, idx) => (
          <div 
            key={project.id} 
            className="group relative flex flex-col gap-4"
          >
            {/* 图片区域：带边框和切角 */}
            <div className="relative aspect-video w-full hud-border corner-brackets bg-retro-surface overflow-hidden shadow-hard group-hover:shadow-hard-sm transition-all">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
              )}
            </div>

            {/* 文字区域 */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-display text-xl font-bold text-retro-ink group-hover:text-retro-primary transition-colors">
                  {project.title}
                </h3>
                {project.link && (
                  <a href={project.link} target="_blank" className="text-retro-dim hover:text-retro-accent">
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              
              <p className="text-sm font-mono text-retro-dim leading-relaxed">
                {project.description}
              </p>

              {/* 技术栈标签 */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-0.5 text-[10px] font-mono border border-retro-ink/30 text-retro-ink/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}