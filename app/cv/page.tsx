import type { Metadata } from "next";
import { ArrowUpRight, Github, GraduationCap, Mail } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae of Yuxuan Chen, MPhil student at the University of Hong Kong.",
};

export default function CvPage() {
  return (
    <SectionContainer id="cv" title="Curriculum vitae" index="03">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
        <div className="space-y-14">
          <section>
            <p className="font-mono text-xs uppercase tracking-[0.13em] text-retro-primary">Education</p>
            <div className="mt-5 divide-y divide-retro-ink/15 border-y border-retro-ink/15">
              {siteConfig.education.map((item) => (
                <article key={`${item.institution}-${item.program}`} className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:gap-8">
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight">{item.institution}</h2>
                    <p className="mt-1 text-retro-dim">{item.program}</p>
                  </div>
                  {item.period && (
                    <time className="font-mono text-xs uppercase tracking-wide text-retro-dim">{item.period}</time>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section>
            <p className="font-mono text-xs uppercase tracking-[0.13em] text-retro-primary">Research experience</p>
            <div className="mt-6 space-y-9">
              {siteConfig.experience.map((item) => (
                <article key={`${item.title}-${item.institution}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                    <div>
                      <h2 className="text-lg font-semibold tracking-tight">{item.title}</h2>
                      <p className="mt-1 text-sm text-retro-dim">{item.institution}</p>
                    </div>
                    {item.period && (
                      <time className="shrink-0 font-mono text-xs uppercase tracking-wide text-retro-dim">{item.period}</time>
                    )}
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-retro-dim">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-[0.65rem] h-1 w-1 shrink-0 bg-retro-primary" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <p className="font-mono text-xs uppercase tracking-[0.13em] text-retro-primary">Publications</p>
              <a
                href={siteConfig.profile.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-retro-ink underline decoration-retro-primary/60 underline-offset-4 hover:decoration-retro-ink"
              >
                Google Scholar <ArrowUpRight size={13} />
              </a>
            </div>
            <ol className="mt-5 space-y-5">
              {siteConfig.publications.map((publication) => (
                <li key={publication.id} className="grid gap-2 border-t border-retro-ink/12 pt-5 sm:grid-cols-[54px_1fr]">
                  <span className="font-mono text-xs font-semibold text-retro-primary">{publication.year}</span>
                  <div>
                    <h2 className="font-semibold leading-snug">{publication.title}</h2>
                    <p className="mt-1 text-sm text-retro-dim">{publication.venue}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="panel-lift self-start border border-retro-ink/20 bg-retro-surface p-6 lg:sticky lg:top-10">
          <h2 className="text-xl font-bold tracking-tight">{siteConfig.profile.name}</h2>
          <p className="mt-1 text-sm font-medium text-retro-accent">{siteConfig.profile.title}</p>
          <p className="mt-5 text-sm leading-6 text-retro-dim">{siteConfig.profile.affiliation}</p>

          <div className="mt-6 space-y-3 border-t border-retro-ink/12 pt-5 text-sm">
            <a className="flex items-center gap-2 hover:text-retro-accent" href={`mailto:${siteConfig.profile.email}`}>
              <Mail size={14} /> Email
            </a>
            <a className="flex items-center gap-2 hover:text-retro-accent" href={siteConfig.profile.googleScholar} target="_blank" rel="noreferrer">
              <GraduationCap size={14} /> Google Scholar
            </a>
            <a className="flex items-center gap-2 hover:text-retro-accent" href={siteConfig.profile.github} target="_blank" rel="noreferrer">
              <Github size={14} /> GitHub
            </a>
          </div>

          <p className="mt-6 border-t border-retro-ink/12 pt-5 font-mono text-[11px] uppercase tracking-[0.11em] text-retro-dim">
            Last updated · Sep 2026
          </p>
        </aside>
      </div>
    </SectionContainer>
  );
}
