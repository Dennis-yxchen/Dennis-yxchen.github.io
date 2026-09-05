import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/data/config";

const externalLinkClass =
  "btn-press inline-flex shrink-0 items-center gap-2 whitespace-nowrap border border-retro-ink bg-retro-surface px-3 py-2 text-[0.82rem] font-medium hover:bg-retro-primary-soft";

export default function HomePage() {
  const featuredPublications = siteConfig.publications.slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-6xl">
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
          <div>
            <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-retro-dim">
              <span className="text-retro-primary">00</span>
              <span>About Me</span>
            </div>

            <h1 className="max-w-3xl whitespace-nowrap font-display text-4xl font-bold leading-[1.06] tracking-[-0.035em] text-retro-ink sm:text-5xl lg:text-[3.35rem]">
              {siteConfig.profile.displayName}
            </h1>

            <div className="mt-6 max-w-[38rem] text-base leading-7 text-retro-ink/80 sm:text-[1.025rem]">
              {siteConfig.profile.bio}
            </div>

            <div className="mt-5 flex flex-col gap-2 text-sm text-retro-dim sm:flex-row sm:flex-wrap sm:gap-x-6">
              <a
                href={siteConfig.profile.affiliationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-retro-accent"
              >
                <GraduationCap size={16} className="text-retro-ink/55" />
                {siteConfig.profile.affiliation}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-retro-ink/55" />
                {siteConfig.profile.location}
              </span>
            </div>

            <div className="mt-7 flex flex-nowrap gap-2 overflow-x-auto pb-1">
              <a className={externalLinkClass} href={`mailto:${siteConfig.profile.email}`}>
                <Mail size={15} /> Email
              </a>
              <a className={externalLinkClass} href={siteConfig.profile.googleScholar} target="_blank" rel="noreferrer">
                <GraduationCap size={15} /> Google Scholar
              </a>
              <a className={externalLinkClass} href={siteConfig.profile.github} target="_blank" rel="noreferrer">
                <Github size={15} /> GitHub
              </a>
              <Link className="btn-press ml-auto inline-flex shrink-0 items-center gap-2 whitespace-nowrap border border-retro-ink bg-retro-ink px-3 py-2 text-[0.82rem] font-medium text-retro-bg hover:bg-retro-primary hover:text-retro-ink" href="/cv">
                CV <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <figure className="mx-auto w-full max-w-[260px] lg:mx-0 lg:justify-self-end">
            <div className="relative aspect-square overflow-hidden border border-dashed border-retro-ink/35 bg-retro-surface p-1.5">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={siteConfig.profile.avatar || "/images/avatar_placeholder.jpg"}
                  alt="Yuxuan Chen holding a camera"
                  fill
                  priority
                  sizes="(max-width: 1024px) 280px, 260px"
                  className="object-cover object-[center_38%]"
                  style={{
                    filter: "saturate(0.72) sepia(0.14) contrast(0.96) brightness(0.98)",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-retro-primary/[0.045] mix-blend-multiply" />
              </div>
            </div>
          </figure>
        </div>
      </section>

      <section className="grid gap-12 border-t border-retro-ink/15 py-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)] lg:gap-16 lg:py-16">
        <div>
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-retro-dim"><span className="text-retro-primary">01</span> / Updates</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">News</h2>
            </div>
          </div>

          <ol className="divide-y divide-retro-ink/12 border-y border-retro-ink/12">
            {siteConfig.news.map((item, index) => (
              <li key={`${item.date}-${index}`} className="grid gap-2 py-4 sm:grid-cols-[88px_1fr] sm:gap-5">
                <time className="font-mono text-xs font-medium uppercase tracking-wide text-retro-dim">
                  {item.date}
                </time>
                <div className="text-[0.98rem] leading-7 text-retro-ink/80">{item.content}</div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="panel-lift self-start border border-retro-ink/18 bg-retro-surface p-6">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-retro-accent">Research focus</p>
          <h2 className="mt-2 text-xl font-bold tracking-tight">Current interests</h2>
          <ul className="mt-5 space-y-4">
            {siteConfig.researchInterests.map((interest) => (
              <li key={interest} className="flex gap-3 text-sm leading-6 text-retro-ink/75">
                <span className="mt-[0.62rem] h-1.5 w-1.5 shrink-0 bg-retro-ink/65" />
                <span>{interest}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-6 text-retro-dim">
            Previous work also spans graph machine learning and machine learning for bioinformatics.
          </p>
        </aside>
      </section>

      <section className="border-t border-retro-ink/15 py-12 lg:py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-retro-dim"><span className="text-retro-primary">02</span> / Selected work</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">Recent publications</h2>
          </div>
          <Link href="/publications" className="inline-flex items-center gap-2 text-sm font-medium text-retro-ink underline decoration-retro-primary/60 underline-offset-4 hover:decoration-retro-ink">
            View all publications <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid gap-4">
          {featuredPublications.map((publication) => (
            <article key={publication.id} className="panel-lift grid gap-3 border border-retro-ink/15 bg-retro-surface p-5 sm:grid-cols-[72px_1fr] sm:p-6">
              <div>
                <span className="font-mono text-sm font-semibold text-retro-primary">{publication.year}</span>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-retro-dim">{publication.venue}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight">{publication.title}</h3>
                <p className="mt-2 text-sm leading-6 text-retro-dim">{publication.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-retro-ink/15 py-12 lg:py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-retro-dim"><span className="text-retro-primary">03</span> / Open source</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">Featured projects</h2>
          </div>
          <Link href="/research" className="inline-flex items-center gap-2 text-sm font-medium text-retro-ink underline decoration-retro-primary/60 underline-offset-4 hover:decoration-retro-ink">
            Explore projects <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {siteConfig.research.map((project) => {
            const destination = project.links.website || project.links.code || project.links.paper;
            return (
              <a
                key={project.id}
                href={destination}
                target="_blank"
                rel="noreferrer"
                className="panel-lift group flex min-h-48 flex-col border border-retro-ink/20 bg-retro-surface p-5 hover:border-retro-ink/45"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-retro-dim">{project.role}</span>
                  <ArrowUpRight size={16} className="text-retro-dim transition-colors group-hover:text-retro-ink" />
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-retro-dim">{project.description}</p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="border-t border-retro-ink/15 py-12 lg:py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-retro-dim"><span className="text-retro-primary">04</span> / Background</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">Research journey</h2>
          </div>
          <Link href="/cv" className="btn-press-sm inline-flex items-center gap-2 border border-retro-ink bg-retro-surface px-3 py-2 text-sm font-medium hover:bg-retro-primary-soft">
            Full CV <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {siteConfig.experience.map((experience) => (
            <article
              key={`${experience.title}-${experience.institution}`}
              className="panel-lift border border-retro-ink/15 bg-retro-surface p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <p className="font-mono text-xs uppercase tracking-[0.11em] text-retro-dim">
                  Previous research
                </p>
                {experience.period && (
                  <time className="shrink-0 font-mono text-xs uppercase tracking-wide text-retro-dim">
                    {experience.period}
                  </time>
                )}
              </div>
              <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight">{experience.title}</h3>
              <p className="mt-2 text-sm font-medium text-retro-accent">{experience.institution}</p>
              <p className="mt-4 text-sm leading-6 text-retro-dim">{experience.details[0]}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
