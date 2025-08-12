import Link from 'next/link';
import { HeroHeader } from '@/components/header';
import { SharedFooter } from '@/components/shared-footer';

export default function AboutPage() {
  return (
    <main className="font-sans min-h-dvh bg-background text-foreground">
      <HeroHeader />

      <section className="container pt-8 pb-[40px]">
        <h1 className="headline leading-[0.95]">About</h1>
        <p className="muted mt-3 max-w-[60ch] text-[14px] sm:text-[15px]">
          We are a design-led studio exploring bold typography, motion, and
          systems thinking. We collaborate with brands and teams to craft
          distinctive, high-clarity experiences.
        </p>
      </section>

      <section className="container pb-12">
        <div className="space-y-4">
          <h2 className="section-title">Approach</h2>
          <p className="text-sm leading-6 text-muted-foreground">
            Our work combines strong typographic hierarchies with restrained
            motion to communicate intent quickly. We prototype in the medium,
            iterate with real content, and scale systems that teams can own.
          </p>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="section-title mb-4">Skills & Technologies</h2>
        <div className="overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-3 bg-muted/50 text-[12px]">
            <div className="px-3 py-2">Design</div>
            <div className="px-3 py-2">Development</div>
            <div className="px-3 py-2">Tools</div>
          </div>
          {[
            'UX Research',
            'Wireframing & Prototyping',
            'UI & Visual Design',
            'Design Systems',
            'Usability Testing',
          ].map((label, idx) => (
            <div
              key={idx}
              className="grid grid-cols-3 text-[12px] border-t border-border"
            >
              <div className="px-3 py-2 text-muted-foreground">{label}</div>
              <div className="px-3 py-2 text-muted-foreground/60">
                {idx === 0
                  ? 'HTML5 & CSS3'
                  : idx === 1
                    ? 'JavaScript (ES6+) & TypeScript'
                    : idx === 2
                      ? 'React & Next.js'
                      : idx === 3
                        ? 'React Native'
                        : 'SASS / Styled‑Components'}
              </div>
              <div className="px-3 py-2 text-muted-foreground/60">
                {idx === 0
                  ? 'Git & GitHub'
                  : idx === 1
                    ? 'VS Code'
                    : idx === 2
                      ? 'Jira'
                      : idx === 3
                        ? 'Figma'
                        : 'Adobe CC'}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/"
            className="grid-image px-4 py-3 text-sm text-foreground/90"
          >
            ← Back to Home
          </Link>
          <Link
            href="/type-hype"
            className="grid-image px-4 py-3 text-sm text-foreground/90"
          >
            View: Type Hype
          </Link>
          <a
            href="mailto:hello@example.com"
            className="grid-image px-4 py-3 text-sm text-foreground/90"
          >
            Contact
          </a>
        </div>
      </section>

      <SharedFooter />
    </main>
  );
}
