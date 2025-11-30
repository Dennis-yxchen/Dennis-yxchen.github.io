/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 琥珀色系 - 未来复古 B 风格 (High-Key)
        amber: {
          50: '#FEFDF5',  // 背景：陈旧的纸张/褪色塑料
          100: '#FFF8E1', // 浅色块背景
          200: '#FAE6B1', // 装饰线条
          500: '#F59E0B', // 主色：高饱和琥珀 (标准)
          600: '#D97706', // 激活状态/深色琥珀
          900: '#451a03', // 极深琥珀
        },
        retro: {
          bg: '#FEFDF5',        // 页面主背景
          surface: '#FFFBEB',   // 卡片/区块背景
          primary: '#FFBF00',   // 导航栏/重要按钮 (Electric Amber)
          ink: '#4A3B2A',       // 正文文字 (深古铜色，比纯黑柔和)
          dim: '#8C7E6A',       // 次要文字/注释
          accent: '#0D9488',    // 链接/数据流 (Teal/Cyan)
          signal: '#DC2626',    // 警告/强调 (Signal Red)
        }
      },
      fontFamily: {
        // 标题字体：带一点科技感
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        // 正文/代码字体：复古终端感
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backgroundImage: {
        // 细微的噪点纹理，增加"实体感"
        // 'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
        // 'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E\")",
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.7'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        // 硬边阴影，不模糊，强调 HUD 风格
        'hard': '4px 4px 0px 0px rgba(74, 59, 42, 0.1)',
        'hard-sm': '2px 2px 0px 0px rgba(74, 59, 42, 0.1)',
      }
    },
  },
  plugins: [],
};

export default config;