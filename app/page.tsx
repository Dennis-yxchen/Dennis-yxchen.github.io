import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { siteConfig } from "@/data/config";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col w-full">

        {/* 1. Hero / Intro Section (手动放置，它是特殊的) */}
        <SectionContainer id="hero" className="pt-32">
          <div className="hud-border bg-retro-surface p-10 max-w-2xl corner-brackets shadow-hard">
            <h1 className="font-display text-4xl mb-4 text-retro-ink">
              HELLO_WORLD
            </h1>
            <p className="font-mono text-retro-dim">
              System is ready. Awaiting content modules.
            </p>
          </div>
        </SectionContainer>

        {/* 2. 动态渲染其他 Section */}
        {siteConfig.navItems.slice(1).map((item, index) => (
          <SectionContainer
            key={item.id}
            id={item.id}
            title={item.label}
            index={`0${index + 1}`} // 生成 01, 02 编号
          >
            {/* 临时占位符 */}
            <div className="h-64 w-full border border-dashed border-retro-ink/30 flex items-center justify-center font-mono text-retro-dim/50">
              [ MODULE: {item.label} IS LOADING... ]
            </div>
          </SectionContainer>
        ))}

      </main>

      <Footer />
    </>
  );
}