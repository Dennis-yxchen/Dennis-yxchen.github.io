import { siteConfig } from "@/data/config";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl border-t border-retro-ink/15 py-8">
      <div className="flex flex-col justify-between gap-4 text-sm text-retro-dim sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {siteConfig.profile.name}
        </p>
        <div className="flex gap-5 font-mono text-xs uppercase tracking-wide">
          {siteConfig.profile.github && (
            <a href={siteConfig.profile.github} target="_blank" rel="noreferrer" className="text-retro-ink transition-colors hover:text-retro-primary">
              GitHub
            </a>
          )}
          {siteConfig.profile.email && (
            <a href={`mailto:${siteConfig.profile.email}`} className="text-retro-ink transition-colors hover:text-retro-primary">
              Email
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
