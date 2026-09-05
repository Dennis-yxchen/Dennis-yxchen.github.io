"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";

const socialLinkClass =
  "group inline-flex w-full items-center gap-3 py-1.5 text-sm text-retro-dim transition-colors hover:text-retro-ink";

const socialIconClass =
  "text-retro-ink/45 transition-colors group-hover:text-retro-primary";

function Navigation({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className={cn(
        mobile ? "flex gap-1 overflow-x-auto px-5 pb-3" : "flex flex-col gap-1"
      )}
    >
      {siteConfig.navItems.map((item, index) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              "group flex shrink-0 items-center gap-3 border transition-colors",
              mobile
                ? "px-3 py-2 text-sm"
                : "px-3 py-2.5 text-[0.95rem]",
              isActive
                ? cn("border-retro-ink bg-retro-primary text-retro-ink", !mobile && "btn-press-sm")
                : "border-transparent text-retro-dim hover:border-retro-ink/15 hover:bg-retro-surface hover:text-retro-ink"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            <span className={cn(isActive ? "text-retro-ink" : "text-retro-dim/75")}>
              {item.icon}
            </span>
            <span>{item.label}</span>
            {!mobile && (
              <span className="ml-auto font-mono text-[11px] text-retro-dim/60">
                {String(index).padStart(2, "0")}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export function Sidebar() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-retro-ink/15 bg-retro-bg/95 backdrop-blur md:hidden">
        <div className="flex h-1.5 w-full" aria-hidden="true">
          <div className="flex-1 bg-[var(--color-terminal-teal)]" />
          <div className="flex-1 bg-[var(--color-terminal-gold)]" />
          <div className="flex-1 bg-[var(--color-terminal-red)]" />
        </div>
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="/" className="font-display text-lg font-bold tracking-tight">
            Yuxuan Chen<span className="diffused-glow text-retro-primary">.</span>
          </Link>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-retro-dim">
            AI Agents
          </span>
        </div>
        <Navigation mobile />
      </header>

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r border-retro-ink/15 bg-retro-bg md:flex">
        <div className="flex h-2 w-full" aria-hidden="true">
          <div className="flex-1 bg-[var(--color-terminal-teal)]" />
          <div className="flex-1 bg-[var(--color-terminal-gold)]" />
          <div className="flex-1 bg-[var(--color-terminal-red)]" />
        </div>

        <div className="px-8 pb-7 pt-10">
          <Link href="/" className="block">
            <p className="font-display text-2xl font-bold leading-tight tracking-tight text-retro-ink">
              Yuxuan Chen<span className="diffused-glow text-retro-primary">.</span>
            </p>
          </Link>
        </div>

        <div className="px-5">
          <Navigation />
        </div>

        <div className="mx-8 mt-7 border-t border-retro-ink/15 pt-5">
          <div className="flex flex-col items-start gap-0.5">
            {siteConfig.profile.github && (
              <a className={socialLinkClass} href={siteConfig.profile.github} target="_blank" rel="noreferrer">
                <Github size={14} className={socialIconClass} /> GitHub
              </a>
            )}
            {siteConfig.profile.googleScholar && (
              <a className={socialLinkClass} href={siteConfig.profile.googleScholar} target="_blank" rel="noreferrer">
                <GraduationCap size={14} className={socialIconClass} /> Scholar
              </a>
            )}
            {siteConfig.profile.linkedin && (
              <a className={socialLinkClass} href={siteConfig.profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={14} className={socialIconClass} /> LinkedIn
              </a>
            )}
            {siteConfig.profile.instagram && (
              <a className={socialLinkClass} href={siteConfig.profile.instagram} target="_blank" rel="noreferrer">
                <Instagram size={14} className={socialIconClass} /> Instagram
              </a>
            )}
            <a className={socialLinkClass} href={`mailto:${siteConfig.profile.email}`}>
              <Mail size={14} className={socialIconClass} /> Email
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
