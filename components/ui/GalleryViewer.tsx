"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { GalleryItem } from "@/app/types";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryViewerProps {
  album: GalleryItem;
  onClose: () => void;
}

export function GalleryViewer({ album, onClose }: GalleryViewerProps) {
  const [current, setCurrent] = useState(0);
  const total = album.photos.length;
  const photo = album.photos[current];

  const goPrev = useCallback(() => {
    setCurrent((i) => (i === 0 ? total - 1 : i - 1));
  }, [total]);

  const goNext = useCallback(() => {
    setCurrent((i) => (i === total - 1 ? 0 : i + 1));
  }, [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, goPrev, goNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-retro-ink/80 backdrop-blur-sm" />

      {/* card */}
      <div
        className="relative w-full max-w-3xl bg-retro-bg border-2 border-retro-ink shadow-[6px_6px_0px_0px_var(--color-retro-ink)] animate-retro-fade"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ─── top bar: cassette deck header ─── */}
        <div className="flex items-center justify-between px-4 py-2 border-b-2 border-retro-ink bg-retro-ink text-retro-bg">
          <div className="flex items-center gap-3">
            {/* tape reels */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full border-2 border-retro-primary" />
              <span className="w-6 h-[2px] bg-retro-primary/60" />
              <span className="w-3 h-3 rounded-full border-2 border-retro-primary" />
            </div>
            <span className="font-mono text-xs tracking-widest text-retro-primary uppercase">
              {album.title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-retro-primary/20 transition-colors"
          >
            <X size={16} className="text-retro-bg" />
          </button>
        </div>

        {/* ─── image area ─── */}
        <div className="relative bg-retro-ink/5">
          <div className="relative aspect-[3/2] w-full overflow-hidden">
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.caption || album.title}
              fill
              className="object-contain"
            />

          </div>

          {/* nav arrows */}
          {total > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-retro-ink/70 border border-retro-ink text-retro-bg hover:bg-retro-ink transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-retro-ink/70 border border-retro-ink text-retro-bg hover:bg-retro-ink transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* ─── bottom bar: transport controls ─── */}
        <div className="flex items-center justify-between px-4 py-3 border-t-2 border-retro-ink">
          {/* counter */}
          <div className="font-mono text-xs text-retro-dim flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-retro-signal rounded-full animate-blink-slow" />
            <span className="tabular-nums">
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          {/* caption */}
          <div className="font-mono text-xs text-retro-ink/70 text-right max-w-[60%] truncate">
            {photo.caption || ""}
          </div>
        </div>

        {/* ─── progress dots ─── */}
        {total > 1 && (
          <div className="flex justify-center gap-1.5 pb-3">
            {album.photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "w-1.5 h-1.5 transition-all",
                  i === current
                    ? "bg-retro-primary w-4"
                    : "bg-retro-ink/20 hover:bg-retro-ink/40"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
