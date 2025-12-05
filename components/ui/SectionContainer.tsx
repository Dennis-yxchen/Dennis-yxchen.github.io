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
        "relative min-h-screen w-full max-w-5xl mx-auto px-6 py-24 flex flex-col justify-center",
        className
      )}
    >
      {/* 装饰性标题：工程图纸风格 */}
      {title && (
        <div className="absolute top-12 left-6 md:left-0 flex items-center gap-4 opacity-40 select-none pointer-events-none">
          {index && (
            <span className="font-mono text-sm font-bold tracking-widest text-retro-primary">
              {index}.
            </span>
          )}
          <span className="font-display font-bold tracking-widest uppercase text-retro-ink text-sm">
            {title}
          </span>
          {/* 装饰线 */}
          <div className="h-px w-24 bg-retro-ink/30" />
        </div>
      )}

      {children}
    </section>
  );
}