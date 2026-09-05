"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GalleryItem } from "@/app/types";
import { cn } from "@/lib/utils";

interface GalleryViewerProps {
  album: GalleryItem;
  onClose: () => void;
}

export function GalleryViewer({ album, onClose }: GalleryViewerProps) {
  const [current, setCurrent] = useState(0);
  const total = album.photos.length;
  const photo = album.photos[current];

  const goPrev = useCallback(() => {
    setCurrent((index) => (index === 0 ? total - 1 : index - 1));
  }, [total]);

  const goNext = useCallback(() => {
    setCurrent((index) => (index === total - 1 ? 0 : index + 1));
  }, [total]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && total > 1) goPrev();
      if (event.key === "ArrowRight" && total > 1) goNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [goNext, goPrev, onClose, total]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-retro-ink/75 p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-dialog-title"
    >
      <div
        className="relative w-full max-w-5xl border border-retro-ink/30 bg-retro-bg shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-retro-ink/15 px-4 py-3 sm:px-5">
          <div>
            <h2 id="gallery-dialog-title" className="font-semibold tracking-tight">{album.title}</h2>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-retro-dim">
              {current + 1} / {total}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-retro-dim transition-colors hover:bg-retro-primary-soft hover:text-retro-ink"
            aria-label="Close photo viewer"
          >
            <X size={19} />
          </button>
        </div>

        <div className="relative bg-[#eeeae0]">
          <div className="relative aspect-[3/2] w-full overflow-hidden">
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.caption || album.title}
              fill
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-contain"
            />
          </div>

          {total > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-retro-bg/90 text-retro-ink shadow transition-colors hover:bg-retro-primary-soft"
                aria-label="Previous photo"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-retro-bg/90 text-retro-ink shadow transition-colors hover:bg-retro-primary-soft"
                aria-label="Next photo"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        <div className="flex min-h-14 items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <p className="text-sm text-retro-dim">{photo.caption}</p>
          {total > 1 && (
            <div className="flex gap-2" aria-label="Choose photo">
              {album.photos.map((item, index) => (
                <button
                  key={item.src}
                  onClick={() => setCurrent(index)}
                  className={cn(
                    "h-2 w-2 transition-colors",
                    index === current ? "bg-retro-primary" : "bg-retro-ink/20 hover:bg-retro-ink/40"
                  )}
                  aria-label={`View photo ${index + 1}`}
                  aria-current={index === current ? "true" : undefined}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
