import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

// 1. 字体配置
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "User Portfolio | Future Retro",
  description: "Academic and personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        spaceGrotesk.variable,
        jetbrainsMono.variable,
        "min-h-screen bg-retro-bg font-mono selection:bg-retro-ink selection:text-retro-primary"
      )}>
        {/* 左侧：实验终端侧边栏 */}
        <Sidebar />

        {/* 右侧：内容视窗 (Main Viewport) */}
        {/* ml-64 留出侧边栏的宽度，min-h-screen 确保高度撑满 */}
        <main className="ml-64 min-h-screen relative flex flex-col">

          {/* 这里可以加一个顶部的装饰线或者面包屑，如果不需要可以留空 */}

          {/* 内容区域容器 */}
          <div className="flex-1 p-12 fade-in">
            {children}
          </div>

        </main>
      </body>
    </html>
  );
}