import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
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
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        spaceGrotesk.variable,
        jetbrainsMono.variable,
        "min-h-screen relative selection-amber"
      )}>
        {/* 背景噪点层 - 固定不动 */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40 bg-noise mix-blend-multiply"></div>

        {/* 主内容区域 */}
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}