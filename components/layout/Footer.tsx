import { siteConfig } from "@/data/config";

export function Footer() {
  return (
    <footer className="w-full border-t border-retro-ink/20 bg-retro-surface py-12 relative z-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-retro-dim">

        {/* 左侧版权 */}
        <div>
          © {new Date().getFullYear()} {siteConfig.profile.name}.
          <span className="ml-2 opacity-50">ALL SYSTEMS NOMINAL.</span>
        </div>

        {/* 右侧链接 */}
        <div className="flex gap-6">
          {siteConfig.profile.github && (
            <a href={siteConfig.profile.github} target="_blank" className="hover:text-retro-primary transition-colors">
              GITHUB
            </a>
          )}
          {siteConfig.profile.email && (
            <a href={`mailto:${siteConfig.profile.email}`} className="hover:text-retro-primary transition-colors">
              EMAIL
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}