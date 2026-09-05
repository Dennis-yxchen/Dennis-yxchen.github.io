import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Misc",
  description: "Friends and personal links from Yuxuan Chen.",
};

export default function MiscPage() {
  return (
    <SectionContainer id="misc" title="Miscellaneous" index="05">
      <section className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.13em] text-retro-primary">
          Friends
        </p>
        <p className="mt-4 max-w-2xl text-base leading-8 text-retro-dim">
          I am grateful to these friends for their support and companionship.
        </p>

        <div className="mt-7 divide-y divide-retro-ink/15 border-y border-retro-ink/15">
          {siteConfig.friends.map((friend, index) => (
            <a
              key={friend.url}
              href={friend.url}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-[42px_minmax(0,1fr)_auto] items-center gap-4 py-5"
            >
              <span className="font-mono text-xs text-retro-dim">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-semibold tracking-tight text-retro-ink underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-retro-primary">
                {friend.name}
              </span>
              <ArrowUpRight
                size={16}
                className="text-retro-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-retro-ink"
              />
            </a>
          ))}
        </div>
      </section>
    </SectionContainer>
  );
}
