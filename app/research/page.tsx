import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, FileText, Github } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Projects",
  description: "Open-source projects by Yuxuan Chen in AI agents, code reasoning, and autonomous financial agents.",
};

export default function ResearchPage() {
  return (
    <SectionContainer id="projects" title="Open-source projects" index="02">
      <p className="mb-10 max-w-3xl text-base leading-8 text-retro-dim">
        I contribute to open-source systems spanning self-improving AI agents,
        repository-scale code reasoning, and autonomous agents in financial markets.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        {siteConfig.research.map((project) => (
          <article
            key={project.id}
            className="panel-lift group flex flex-col border border-retro-ink/20 bg-retro-surface hover:border-retro-ink/45"
          >
            {project.image ? (
              <div className="relative h-52 overflow-hidden border-b border-retro-ink/12 bg-[#f6f3e8]">
                <Image
                  src={project.image}
                  alt={`${project.title} project artwork`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="diffused-glow object-contain p-7"
                />
              </div>
            ) : (
              <div className="flex h-36 items-end border-b border-retro-ink/12 bg-retro-primary-soft/45 p-6">
                <span className="font-mono text-sm uppercase tracking-[0.18em] text-retro-dim">
                  Agent benchmark / Financial markets
                </span>
              </div>
            )}

            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-xs uppercase tracking-[0.13em] text-retro-primary">
                {project.role}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-retro-ink">
                {project.title}
              </h2>
              <p className="mt-3 text-[0.98rem] leading-7 text-retro-dim">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} topics`}>
                {project.topics.map((topic) => (
                  <li
                    key={topic}
                    className="border border-retro-ink/15 px-2.5 py-1 font-mono text-xs text-retro-dim"
                  >
                    {topic}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-press-sm inline-flex items-center gap-2 border border-retro-ink bg-retro-surface px-3 py-2 text-sm font-medium hover:bg-retro-primary-soft"
                  >
                    Website <ArrowUpRight size={14} />
                  </a>
                )}
                {project.links.code && (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-press-sm inline-flex items-center gap-2 border border-retro-ink bg-retro-surface px-3 py-2 text-sm font-medium hover:bg-retro-primary-soft"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
                {project.links.paper && (
                  <a
                    href={project.links.paper}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-press-sm inline-flex items-center gap-2 border border-retro-ink bg-retro-surface px-3 py-2 text-sm font-medium hover:bg-retro-primary-soft"
                  >
                    <FileText size={14} /> Paper
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
