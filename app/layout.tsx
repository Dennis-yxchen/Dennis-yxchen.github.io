import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
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
  title: {
    default: "Yuxuan Chen | AI Agents Researcher",
    template: "%s | Yuxuan Chen",
  },
  description:
    "Yuxuan Chen is an MPhil student at the University of Hong Kong researching self-improving AI agents, agent memory, and LLM-based simulation.",
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
        "min-h-screen bg-retro-bg text-retro-ink"
      )}>
        <Sidebar />
        <main className="min-h-screen pt-[8.5rem] md:ml-72 md:pt-0">
          <div className="min-h-screen px-5 sm:px-8 lg:px-12">
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
