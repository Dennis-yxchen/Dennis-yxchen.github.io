"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { siteConfig } from "@/data/config";
import Image from "next/image";
import { GalleryViewer } from "@/components/ui/GalleryViewer";
import { GalleryItem } from "@/app/types";
import { ConstructivistArt } from "@/components/ui/ConstructivistArt";

export default function GalleryPage() {
  const [activeAlbum, setActiveAlbum] = useState<GalleryItem | null>(null);
  const items = siteConfig.gallery;

  return (
    <SectionContainer id="gallery" title="PHOTO_GALLERY" index="03">
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((album) => (
            <button
              key={album.id}
              onClick={() => setActiveAlbum(album)}
              className="group relative flex flex-col gap-4 text-left cursor-pointer"
            >
              {/* cover */}
              <div className="relative aspect-[4/3] w-full hud-border corner-brackets bg-retro-surface overflow-hidden shadow-hard group-hover:shadow-hard-sm transition-all">
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                {/* photo count badge */}
                <div className="absolute bottom-2 right-2 bg-retro-ink/70 text-retro-bg px-2 py-0.5 font-mono text-[10px] tracking-wider">
                  {String(album.photos.length).padStart(2, "0")} FRAMES
                </div>
              </div>

              {/* info */}
              <div className="space-y-1">
                <h3 className="font-display text-xl font-bold text-retro-ink group-hover:text-retro-primary transition-colors">
                  {album.title}
                </h3>
                {album.description && (
                  <p className="text-sm font-mono text-retro-dim leading-relaxed">
                    {album.description}
                  </p>
                )}
                {album.meta && (
                  <span className="inline-block px-2 py-0.5 text-[10px] font-mono border border-retro-ink/30 text-retro-ink/70">
                    {album.meta}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-24 h-24 border-2 border-dashed border-retro-ink/20 flex items-center justify-center mb-6">
            <span className="font-mono text-3xl text-retro-ink/20">⌗</span>
          </div>
          <p className="font-mono text-sm text-retro-dim">NO_DATA_LOADED</p>
          <p className="font-mono text-xs text-retro-dim/60 mt-2">
            在 data/config.tsx 的 gallery 数组中添加相册
          </p>
        </div>
      )}

      <ConstructivistArt />

      {activeAlbum && (
        <GalleryViewer
          album={activeAlbum}
          onClose={() => setActiveAlbum(null)}
        />
      )}
    </SectionContainer>
  );
}
