import Link from 'next/link';
import Testimonials1 from '@/components/blocks/testmonials1';
import HeroSection from '@/components/hero-section';
import Features from '@/components/features-12';
import { SharedFooter } from '@/components/shared-footer';
import { BorderBeam } from '@/components/magicui/border-beam';
import { AnimatedGroup } from '@/components/ui/animated-group';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="font-sans min-h-dvh bg-background text-foreground">
      {/* Top bar labels */}
      {/* <div className="container flex items-center justify-between py-3 text-[11px] sm:text-xs opacity-80">
        <div className="flex gap-6">
          <span>Please Call Me Champs Studio</span>
          <span className="hidden sm:inline">Selected Work</span>
        </div>
        <div className="flex gap-6">
          <span className="hidden md:inline">
            <Link href="/" className="hover:underline underline-offset-4">Home</Link>,
            {" "}
            <Link href="/about" className="hover:underline underline-offset-4">About</Link>,
            {" "}
            <Link href="/projects" className="hover:underline underline-offset-4">Projects</Link>,
            <br className="hidden md:block" />
            Play, Team, Contact, Talents
          </span>
          <span>Los Angeles, CA</span>
        </div>
      </div> */}

      {/* Hero */}
      <HeroSection />

      {/* Case Studies */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        {/* <h2 className="section-title mb-4 text-center">Case Studies</h2> */}
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1.5,
                },
              },
            },
            item: {
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring' as const,
                  bounce: 0.3,
                  duration: 2,
                },
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Card 1 */}
          <Link
            href="/case-studies/crypto-ai-portfolio"
            className="group block"
          >
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col relative group">
              <BorderBeam
                size={50}
                duration={6}
                colorFrom="#3b82f6"
                colorTo="#1d4ed8"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="h-48 bg-zinc-800 grid place-items-center relative overflow-hidden">
                <Image
                  src="/charts.png"
                  alt="Crypto AI Portfolio Manager"
                  width={400}
                  height={192}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  Crypto AI‑Powered Portfolio Manager
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  A comprehensive full-stack portfolio management platform that
                  leverages artificial intelligence to provide intelligent
                  insights, automated trading recommendations, and real-time
                  market analysis for cryptocurrency investors.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    AI
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Back‑end
                  </span>
                </div>
                <div className="mt-auto pt-4 text-[12px] text-muted-foreground font-medium group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/case-studies/ux-chatbot" className="group block">
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col relative group">
              <BorderBeam
                size={50}
                duration={6}
                colorFrom="#3b82f6"
                colorTo="#1d4ed8"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="h-48 bg-zinc-800 grid place-items-center relative overflow-hidden">
                <Image
                  src="/chatbot.avif"
                  alt="Customer Support Chatbot"
                  width={400}
                  height={192}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  UX Research & Design Chatbot
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  A proof-of-concept chatbot powered by modern LLMs, offering
                  instant guidance in UX research and design. Built from my
                  curated library of methods and case studies, it helps users
                  plan studies, critique work, and learn best practices in
                  multiple languages.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    LLM
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    UX Research
                  </span>
                </div>
                <div className="mt-auto pt-4 text-[12px] text-muted-foreground font-medium group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/case-studies/hsbc-kinetic" className="group block">
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col relative group">
              <BorderBeam
                size={50}
                duration={6}
                colorFrom="#3b82f6"
                colorTo="#1d4ed8"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="h-48 bg-red-700/70 grid place-items-center relative overflow-hidden">
                <Image
                  src="/hsbc.jpg"
                  alt="HSBC Kinetic"
                  width={400}
                  height={192}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  HSBC Kinetic
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  Led comprehensive UX design for HSBC&apos;s digital banking
                  platform, focusing on card management flows, spending
                  analytics, and seamless onboarding experiences for millions of
                  customers worldwide.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Finance
                  </span>
                </div>
                <div className="mt-auto pt-4 text-[12px] text-muted-foreground font-medium group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>

          {/* Card 4 */}
          <Link href="/case-studies/medify2" className="group block">
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col relative group">
              <BorderBeam
                size={50}
                duration={6}
                colorFrom="#3b82f6"
                colorTo="#1d4ed8"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="h-48 bg-indigo-700/60 grid place-items-center relative overflow-hidden">
                <Image
                  src="/medify.jpg"
                  alt="Medify GAMSAT Web App"
                  width={400}
                  height={192}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  Medify GAMSAT Web App
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  A comprehensive exam preparation platform for the GAMSAT
                  medical school entrance exam, built with React and AWS,
                  featuring interactive tutorials, practice tests, and
                  personalized learning paths for students.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Healthcare
                  </span>
                </div>
                <div className="mt-auto pt-4 text-[12px] text-muted-foreground font-medium group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>

          {/* Card 5 */}
          <Link
            href="/case-studies/multi-brand-design-system"
            className="group block"
          >
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col relative group">
              <BorderBeam
                size={50}
                duration={6}
                colorFrom="#3b82f6"
                colorTo="#1d4ed8"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="h-48 bg-purple-700/60 grid place-items-center relative overflow-hidden">
                <Image
                  src="/plan_14.jpg"
                  alt="Multi-Brand Design System"
                  width={400}
                  height={192}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  Multi-Brand Design System
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  Developed a comprehensive multi-brand design system for a
                  financial client, creating foundations, components, and
                  documentation to ensure consistency and scalability across
                  various brands while preserving unique identities.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Design System
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Multi-Brand
                  </span>
                </div>
                <div className="mt-auto pt-4 text-[12px] text-muted-foreground font-medium group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>

          {/* Card 6 - Cogo */}
          <Link href="/case-studies/cogo" className="group block">
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col relative group">
              <BorderBeam
                size={50}
                duration={6}
                colorFrom="#3b82f6"
                colorTo="#1d4ed8"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="h-48 bg-blue-700/60 grid place-items-center relative overflow-hidden">
                <Image
                  src="/cogo_app1.webp"
                  alt="Cogo Healthcare Platform"
                  width={400}
                  height={192}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  Cogo Healthcare Platform
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  A comprehensive healthcare platform designed to streamline
                  patient care, analytics, and management. Built with modern
                  technologies to provide intelligent insights and automated
                  recommendations for healthcare professionals.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Healthcare
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Platform
                  </span>
                </div>
                <div className="mt-auto pt-4 text-[12px] text-muted-foreground font-medium group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>
        </AnimatedGroup>
      </section>

      {/* Features */}
      <Features />

      {/* Features 11 */}
      {/* <Features11 /> */}

      {/* Testimonials (new) */}
      <Testimonials1 />

      <SharedFooter />
    </main>
  );
}
