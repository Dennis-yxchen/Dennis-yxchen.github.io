import { SectionContainer } from "@/components/ui/SectionContainer";
import { siteConfig } from "@/data/config";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AtomicDivider } from "@/components/ui/AtomicDivider";

export default function HomePage() {
  return (
    <SectionContainer id="hero" title="IDENTITY_VERIFICATION" index="00">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* 左侧：文字信息 */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            {/* 1. 给 h1 加上 opacity-0 */}
            <h1 
              className="text-5xl md:text-6xl font-display font-bold tracking-tighter text-retro-ink uppercase chromatic-text opacity-0 animate-retro-fade" 
              style={{ animationDelay: '0.15s' }}
            >
              {siteConfig.profile.name}
            </h1>

            {/* 2. 给 p 加上 opacity-0，并移除 style 里多余的 opacity 和 fillMode (CSS类里已经有了) */}
            <p 
              className="text-xl font-mono text-retro-primary tracking-tight opacity-0 animate-retro-fade" 
              style={{ animationDelay: '0.35s' }}
            >
              &gt; {siteConfig.profile.title}
            </p>
          </div>

          <div className="font-mono text-retro-ink/80 leading-relaxed max-w-lg text-sm md:text-base border-l-2 border-retro-primary pl-4">
            {siteConfig.profile.bio}
          </div>

          {/* 装饰性数据块 */}
          <div className="grid grid-cols-2 gap-4 text-xs font-mono text-retro-dim pt-4 opacity-70">
            <div>LOC: {siteConfig.profile.location}</div>
            <div>MAIL: {siteConfig.profile.email}</div>
            <div>STATUS: ONLINE</div>
          </div>

          <div className="pt-4">
            <Link 
              href="/research"
              className="inline-flex items-center gap-2 px-6 py-3 bg-retro-ink text-retro-bg font-bold font-mono hover:bg-retro-primary hover:text-retro-ink transition-colors btn-press"
            >
              ACCESS_RESEARCH <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* 右侧：头像 (带复古滤镜) */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
          {/* 装饰框 */}
          <div className="absolute inset-0 border-2 border-retro-ink translate-x-2 translate-y-2 opacity-30" />
          <div className="absolute inset-0 corner-brackets overflow-hidden border border-retro-ink/20">
            <Image
              src={siteConfig.profile.avatar || "/images/avatar_placeholder.jpg"}
              alt="Avatar"
              fill
              className="object-cover opacity-90 grayscale sepia hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          </div>
        </div>

      </div>
      <div className="mt-12">
        <AtomicDivider className="scale-75"/>
      </div>
    </SectionContainer>
  );
}