import { SectionContainer } from "@/components/ui/SectionContainer";
import { siteConfig } from "@/data/config";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import { ConstructivistArt } from "@/components/ui/ConstructivistArt";

export default function GalleryPage() {
  const items = siteConfig.gallery;

  return (
    <SectionContainer id="gallery" title="PHOTO_GALLERY" index="03">
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col gap-4"
            >
              <div className="relative aspect-[4/3] w-full hud-border corner-brackets bg-retro-surface overflow-hidden shadow-hard group-hover:shadow-hard-sm transition-all">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-retro-ink group-hover:text-retro-primary transition-colors">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-sm font-mono text-retro-dim leading-relaxed">
                    {item.description}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {item.meta && (
                    <span className="px-2 py-0.5 text-[10px] font-mono border border-retro-ink/30 text-retro-ink/70">
                      {item.meta}
                    </span>
                  )}
                  {item.location && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-retro-dim">
                      <MapPin size={10} /> {item.location}
                    </span>
                  )}
                  {item.date && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-retro-dim">
                      <Calendar size={10} /> {item.date}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-24 h-24 border-2 border-dashed border-retro-ink/20 flex items-center justify-center mb-6">
            <span className="font-mono text-3xl text-retro-ink/20">⌗</span>
          </div>
          <p className="font-mono text-sm text-retro-dim">NO_DATA_LOADED</p>
          <p className="font-mono text-xs text-retro-dim/60 mt-2">
            在 data/config.tsx 的 gallery 数组中添加照片
          </p>
        </div>
      )}

      <ConstructivistArt />
    </SectionContainer>
  );
}
