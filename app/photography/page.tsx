"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryItem } from "@/app/types";
import { GalleryViewer } from "@/components/ui/GalleryViewer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { siteConfig } from "@/data/config";

export default function PhotographyPage() {
  const [activeAlbum, setActiveAlbum] = useState<GalleryItem | null>(null);
  const items = siteConfig.gallery;

  return (
    <SectionContainer id="gallery" title="Photography" index="04">
      <p className="mb-10 max-w-2xl text-base leading-8 text-retro-dim">
        A small personal archive. Photography sits here as a quiet counterpoint to research and code.
      </p>
      {items.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {items.map((album) => (
            <button
              key={album.id}
              onClick={() => setActiveAlbum(album)}
              className="group relative flex cursor-pointer flex-col gap-4 text-left"
              aria-label={`Open ${album.title} photo album`}
            >
              <div className="corner-brackets relative aspect-[4/3] w-full overflow-hidden border border-retro-ink/18 bg-retro-surface p-2 transition-colors group-hover:border-retro-primary">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={album.cover}
                    alt={album.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 right-3 bg-retro-ink/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-retro-bg">
                    {album.photos.length} {album.photos.length === 1 ? "photo" : "photos"}
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h2 className="font-display text-xl font-bold text-retro-ink transition-colors group-hover:text-retro-primary">
                  {album.title}
                </h2>
                {album.description && (
                  <p className="text-sm leading-6 text-retro-dim">
                    {album.description}
                  </p>
                )}
                {album.meta && (
                  <span className="inline-block font-mono text-xs uppercase tracking-wide text-retro-dim">
                    {album.meta}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-retro-dim">The photography archive is being prepared.</p>
        </div>
      )}

      {activeAlbum && (
        <GalleryViewer
          album={activeAlbum}
          onClose={() => setActiveAlbum(null)}
        />
      )}
    </SectionContainer>
  );
}
