// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-24 gap-12 flex flex-col max-w-7xl mx-auto">
      
      {/* 顶部 Header 区域 */}
      <header className="flex flex-col md:flex-row justify-between items-end border-b-2 border-retro-ink/10 pb-6">
        <div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-retro-ink uppercase tracking-tighter">
            Design <br/> System
          </h1>
          <p className="mt-2 font-mono text-retro-dim">v.0.4.2 [NOISE_TEST_MODE]</p>
        </div>
        <div className="text-right hidden md:block">
          <div className="bg-retro-ink text-retro-bg px-4 py-1 font-mono text-sm inline-block">
            STATUS: DEBUGGING
          </div>
        </div>
      </header>

      {/* 栅格布局测试 */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* 左侧主要内容区 - 占据 8 列 */}
        <div className="md:col-span-8 space-y-8">
          
          {/* 排版测试卡片 */}
          <div className="hud-border bg-retro-surface p-8 relative">
            <div className="absolute top-0 right-0 bg-retro-ink/5 p-2 font-mono text-xs">TYPE_SPECIMEN</div>
            
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs text-retro-dim mb-2 block">// Heading Level 2</span>
                <h2 className="font-display text-3xl font-bold text-retro-ink">
                  The quick brown fox jumps over the amber dog.
                </h2>
              </div>
              
              <div>
                <span className="font-mono text-xs text-retro-dim mb-2 block">// Body Text</span>
                <p className="font-mono text-retro-ink/80 leading-7">
                  这是一个普通段落文本测试。This is a standard paragraph test to check readability against the noisy background. 
                  通过增加<span className="bg-amber-200 px-1 text-retro-ink">背景高亮</span>来测试对比度。
                  The visual noise should be very apparent now.
                </p>
              </div>

              <div className="p-4 border-l-4 border-retro-primary bg-retro-bg">
                <p className="font-display italic text-lg text-retro-ink">
                  “这是一个引用块样式测试。Blockquote styling test with primary border accent.”
                </p>
              </div>
            </div>
          </div>

          {/* 代码块测试 */}
          <div className="hud-border p-6 bg-[#2d2a24] text-amber-50 rounded-sm">
            <div className="flex justify-between text-xs text-stone-400 mb-4 font-mono border-b border-stone-600 pb-2">
              <span>terminal.tsx</span>
              <span>bash</span>
            </div>
            <pre className="font-mono text-sm overflow-x-auto">
              <code>
<span className="text-retro-primary">$</span> npm install tailwind-merge
<span className="text-gray-400"># Installing dependencies...</span>
<span className="text-green-400">✓ Done in 1.45s</span>
              </code>
            </pre>
          </div>

        </div>

        {/* 右侧侧边栏 - 占据 4 列 */}
        <div className="md:col-span-4 space-y-6">
          
          {/* 交互组件测试 */}
          <div className="hud-border corner-brackets p-6 flex flex-col gap-4">
            <h3 className="font-display text-xl font-bold">Interactive</h3>
            
            <button className="w-full py-3 bg-retro-primary text-retro-ink font-bold font-mono hover:bg-amber-400 transition-colors shadow-hard-sm active:translate-y-1 active:shadow-none border border-retro-ink">
              PRIMARY_BTN
            </button>
            
            <button className="w-full py-3 bg-transparent border border-retro-ink text-retro-ink font-mono hover:bg-retro-ink hover:text-retro-bg transition-colors">
              SECONDARY_BTN
            </button>

            <button className="w-full py-3 bg-retro-signal/10 border border-retro-signal text-retro-signal font-mono hover:bg-retro-signal hover:text-white transition-colors">
              DANGER_ZONE
            </button>
          </div>

          {/* 调色板展示 */}
          <div className="hud-border p-6">
            <h3 className="font-display text-xl font-bold mb-4">Palette</h3>
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-retro-primary border border-retro-ink"></div>
                <span>Primary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-retro-accent border border-retro-ink"></div>
                <span>Accent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-retro-ink border border-retro-ink"></div>
                <span>Ink</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-retro-surface border border-retro-ink"></div>
                <span>Surface</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <footer className="border-t border-retro-ink/20 pt-8 text-center font-mono text-retro-dim text-sm">
        <p>SYSTEM_END_OF_LINE // 2025</p>
      </footer>
    </main>
  );
}