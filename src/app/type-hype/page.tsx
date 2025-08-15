import { HeroHeader } from '@/components/header';
import { SharedFooter } from '@/components/shared-footer';

export default function TypeHypePage() {
  return (
    <main className="font-sans min-h-dvh bg-background text-foreground">
      <HeroHeader />

      {/* Hero headline */}
      <section className="container pt-8 pb-[60px]">
        <h1 className="headline leading-[0.95]">Medify</h1>
      </section>

      {/* Device mockup area */}
      <section className="container">
        <div className="w-full aspect-[16/9] bg-zinc-900/60 grid place-items-center border border-white/10 rounded-lg">
          <div className="text-center text-sm opacity-60">
            Mockup placeholder
          </div>
        </div>
      </section>

      {/* Meta row (under mockup) */}
      <section className="container grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 text-[11px] sm:text-xs muted">
        <div>
          <div className="opacity-60">Brand</div>
          <div>Massive Assembly</div>
        </div>
        <div>
          <div className="opacity-60">Led by Massive Assembly</div>
          <div>Freelance collaboration with Massive Assembly</div>
        </div>
        <div>
          <div className="opacity-60">Role</div>
          <div>Design, Animation</div>
        </div>
        <div className="text-right sm:text-left">
          <div className="opacity-60">Year</div>
          <div>2022</div>
        </div>
      </section>

      {/* Description */}
      <section className="container py-6">
        <p className="section-title">
          Type Hype is an exploration and study of video creation that is hyped
          with type.
        </p>
      </section>

      {/* Image grid */}
      <section className="container pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="grid-image aspect-[4/5]"></div>
          ))}
        </div>
      </section>

      <SharedFooter />
    </main>
  );
}
