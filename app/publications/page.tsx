import { SectionContainer } from "@/components/ui/SectionContainer";
import { siteConfig } from "@/data/config";
import { FileText, Code, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { AtomicDivider } from "@/components/ui/AtomicDivider";

export default function PublicationsPage() {
  return (
    <SectionContainer id="publications" title="DATA_ARCHIVE" index="02">
      <div className="flex flex-col gap-4">
        {siteConfig.publications.map((pub) => (
          <div 
            key={pub.id}
            className={cn(
              "relative flex flex-col md:flex-row gap-4 p-4 border transition-all hover:bg-white/40",
              // 如果是 Highlight 论文，边框是实线且更深；普通论文是虚线
              pub.highlight 
                ? "border-retro-ink bg-retro-surface shadow-hard" 
                : "border-retro-ink/20 border-dashed"
            )}
          >
            {/* 左侧：年份和会议 */}
            <div className="w-32 shrink-0 font-mono text-xs flex flex-col gap-1">
              <span className="text-retro-primary font-bold text-lg">{pub.year}</span>
              <span className="text-retro-dim uppercase">{pub.venue}</span>
              {pub.highlight && (
                <div className="flex items-center gap-1 text-retro-signal text-[10px] mt-2">
                  <Star size={10} fill="currentColor" />
                  <span>SELECTED</span>
                </div>
              )}
            </div>

            {/* 中间：内容 */}
            <div className="flex-1 space-y-1">
              <h3 className="font-display font-bold text-lg leading-tight text-retro-ink">
                {pub.title}
              </h3>
              <p className="font-mono text-xs text-retro-dim">
                {pub.authors.map((author, i) => (
                  <span key={i} className={author.includes("Your Name") ? "text-retro-ink font-bold underline decoration-retro-primary" : ""}>
                    {author}{i < pub.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>

            {/* 右侧：操作按钮 */}
            <div className="flex md:flex-col gap-2 shrink-0">
              {pub.links.pdf && (
                <a href={pub.links.pdf} className="flex items-center justify-center gap-2 px-3 py-1 text-xs font-mono border border-retro-ink hover:bg-retro-ink hover:text-retro-bg transition-colors">
                  <FileText size={12} /> PDF
                </a>
              )}
              {pub.links.code && (
                <a href={pub.links.code} className="flex items-center justify-center gap-2 px-3 py-1 text-xs font-mono border border-retro-ink/30 hover:border-retro-accent hover:text-retro-accent transition-colors">
                  <Code size={12} /> CODE
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <AtomicDivider className="mt-16 opacity-50 scale-75" />
    </SectionContainer>
  );
}