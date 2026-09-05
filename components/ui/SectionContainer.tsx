import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id: string;
  title?: string;
  index?: string;
  children: ReactNode;
  className?: string;
}

export function SectionContainer({
  id,
  title,
  index,
  children,
  className
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-6xl py-12 sm:py-16 lg:py-20",
        className
      )}
    >
      {title && (
        <div className="mb-10 flex items-center gap-3">
          {index && (
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-retro-primary">
              {index}
            </span>
          )}
          <h1 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-retro-ink">
            {title}
          </h1>
        </div>
      )}

      {children}
    </section>
  );
}
