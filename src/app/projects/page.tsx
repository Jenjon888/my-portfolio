import Link from 'next/link';
import { HeroHeader } from '@/components/header';
import { SharedFooter } from '@/components/shared-footer';

export default function ProjectsPage() {
  return (
    <main className="font-sans min-h-dvh bg-background text-foreground">
      <HeroHeader />

      {/* Projects hero */}
      <section className="container pt-8 pb-[40px]">
        <h1 className="headline leading-[0.95]">Projects</h1>
        <p className="muted mt-3 max-w-[56ch] text-[14px] sm:text-[15px]">
          All work and explorations. Selected features below.
        </p>
      </section>

      {/* Projects grid */}
      <section className="container pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Type Hype */}
          <Link
            href="/type-hype"
            className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <div className="grid-image overflow-hidden">
              <div className="aspect-[16/10] grid place-items-center bg-zinc-900/60">
                <span className="opacity-70 text-sm">Type Hype preview</span>
              </div>
              <div className="p-4 flex items-start justify-between">
                <div>
                  <div className="font-semibold text-[18px]">
                    Type Hype, Massive Assembly
                  </div>
                  <div className="muted text-[12px] mt-1">
                    Design, Animation — 2022
                  </div>
                </div>
                <span className="muted text-[12px] group-hover:translate-x-0.5 transition-transform">
                  View →
                </span>
              </div>
            </div>
          </Link>

          {/* Placeholder tiles */}
          <div className="grid-image aspect-[16/10] grid place-items-center">
            <span className="opacity-50 text-sm">Project coming soon</span>
          </div>
          <div className="grid-image aspect-[16/10] grid place-items-center md:col-span-2">
            <span className="opacity-50 text-sm">
              More projects to be added
            </span>
          </div>
        </div>
      </section>

      <SharedFooter />
    </main>
  );
}
