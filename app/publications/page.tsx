import type { Metadata } from "next";
import { ArrowUpRight, FileText, Github } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Publications",
  description: "Publications by Yuxuan Chen on AI agents, simulation, code reasoning, and agent evaluation.",
};

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <p className="text-sm leading-6 text-retro-dim">
      {authors.map((author, index) => {
        const isYuxuan = author.includes("Yuxuan Chen");
        const isOmission = author.includes("authors omitted");
        return (
          <span key={`${author}-${index}`}>
            <span
              className={
                isYuxuan
                  ? "font-semibold text-retro-ink underline decoration-retro-primary decoration-2 underline-offset-2"
                  : isOmission
                    ? "font-mono text-xs"
                    : ""
              }
            >
              {author}
            </span>
            {index < authors.length - 1 ? ", " : ""}
          </span>
        );
      })}
    </p>
  );
}

export default function PublicationsPage() {
  return (
    <SectionContainer id="publications" title="Publications" index="01">
      <div className="mb-10 flex flex-col gap-3 text-retro-dim sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl leading-7">
          Research on self-improving agents, LLM-based simulation, repository-scale reasoning, and agent evaluation.
        </p>
        <a
          href={siteConfig.profile.googleScholar}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-retro-ink underline decoration-retro-primary/60 underline-offset-4 hover:decoration-retro-ink"
        >
          Google Scholar <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="divide-y divide-retro-ink/15 border-y border-retro-ink/15">
        {siteConfig.publications.map((publication) => (
          <article
            key={publication.id}
            className="grid gap-4 py-7 sm:grid-cols-[78px_minmax(0,1fr)] sm:gap-7 lg:grid-cols-[82px_minmax(0,1fr)_auto]"
          >
            <div>
              <p className="font-mono text-lg font-semibold text-retro-primary">{publication.year}</p>
            </div>

            <div className="min-w-0">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.11em] text-retro-dim">
                {publication.venue}
              </p>
              <h2 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-retro-ink">
                {publication.title}
              </h2>
              <div className="mt-2">
                <AuthorList authors={publication.authors} />
              </div>
              {publication.description && (
                <p className="mt-3 max-w-3xl text-sm leading-6 text-retro-dim">
                  {publication.description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-start gap-2 sm:col-start-2 lg:col-start-auto lg:justify-end">
              {publication.links.pdf && (
                <a
                  href={publication.links.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-press-sm inline-flex items-center gap-1.5 border border-retro-ink bg-retro-surface px-3 py-1.5 text-sm hover:bg-retro-primary-soft"
                >
                  <FileText size={13} /> PDF
                </a>
              )}
              {publication.links.code && (
                <a
                  href={publication.links.code}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-press-sm inline-flex items-center gap-1.5 border border-retro-ink bg-retro-surface px-3 py-1.5 text-sm hover:bg-retro-primary-soft"
                >
                  <Github size={13} /> Code
                </a>
              )}
              {publication.links.project && (
                <a
                  href={publication.links.project}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-press-sm inline-flex items-center gap-1.5 border border-retro-ink bg-retro-surface px-3 py-1.5 text-sm hover:bg-retro-primary-soft"
                >
                  Project <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 font-mono text-xs text-retro-dim">* Equal contribution.</p>
    </SectionContainer>
  );
}
