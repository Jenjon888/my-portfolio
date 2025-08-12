import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { HeroHeader } from '@/components/header';
import { SharedFooter } from '@/components/shared-footer';
import { BorderBeam } from '@/components/magicui/border-beam';
import Link from 'next/link';

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroHeader />

      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium tracking-tight text-foreground mb-4">
            Case Studies
          </h1>
          {/* <p className="text-lg text-muted-foreground">
            Explore my recent work and the impact it has created.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Multi-Brand Design System */}
          <Link href="/case-studies/multi-brand-design-system" className="group block">
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col relative">
              <BorderBeam size={50} duration={6} colorFrom="#3b82f6" colorTo="#1d4ed8" />
              <div className="h-48 bg-purple-700/60 grid place-items-center relative overflow-hidden">
                <img 
                  src="/plan_14.jpg" 
                  alt="Multi-Brand Design System"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  Multi-Brand Design System
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  Developed a comprehensive multi-brand design system for a financial client, creating foundations, components, and documentation to ensure consistency and scalability across various brands while preserving unique identities.
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

          {/* UX Research & Design Chatbot */}
          <Link href="/case-studies/ux-chatbot" className="group block">
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col relative">
              <BorderBeam size={50} duration={6} colorFrom="#3b82f6" colorTo="#1d4ed8" />
              <div className="h-48 bg-blue-700/60 grid place-items-center relative overflow-hidden">
                <img 
                  src="/chatbot.avif" 
                  alt="UX Research & Design Chatbot"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  UX Research & Design Chatbot
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  An AI-powered mentor that helps people learn UX research and design through practical guidance and grounded knowledge, built from a curated library of methods and case studies.
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

          {/* Crypto AI Portfolio and Insights Platform */}
          <Link href="/case-studies/crypto-ai-portfolio" className="group block">
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col relative">
              <BorderBeam size={50} duration={6} colorFrom="#3b82f6" colorTo="#1d4ed8" />
              <div className="h-48 bg-green-700/60 grid place-items-center relative overflow-hidden">
                <img 
                  src="/crypto.jpg" 
                  alt="Crypto AI Portfolio and Insights Platform"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  Crypto AI Portfolio Platform
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  A full stack crypto portfolio platform that turns real-time market data into clear insights, automated trading recommendations, and a single view of holdings across exchanges and wallets.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Crypto
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    AI
                  </span>
                </div>
                <div className="mt-auto pt-4 text-[12px] text-muted-foreground font-medium group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/medify" className="group block">
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col relative">
              <BorderBeam size={50} duration={6} colorFrom="#3b82f6" colorTo="#1d4ed8" />
              <div className="h-48 bg-zinc-800 grid place-items-center relative overflow-hidden">
                <img 
                  src="/medify.jpg" 
                  alt="Medify GAMSAT Platform"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  Education Technology - Medify
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  A responsive web app designed to help students prepare for the
                  GAMSAT exam using ReactJS and AWS, featuring interactive
                  tutorials and practice tests.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Education
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    React
                  </span>
                </div>
                <div className="mt-auto pt-4 text-[12px] text-muted-foreground font-medium group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>



          <Link href="/case-studies/mortgage-gym" className="group block">
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col">
              <div className="h-48 bg-zinc-800 grid place-items-center relative overflow-hidden">
                <img 
                  src="/mortgage_gym.jpg" 
                  alt="Mortgage Gym Platform"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  Mortgage Gym
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  A comprehensive training and certification platform designed to
                  help mortgage professionals enhance their skills and stay
                  compliant with industry regulations.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Finance
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Training
                  </span>
                </div>
                <div className="mt-auto pt-4 text-[12px] text-muted-foreground font-medium group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/cogo" className="group block">
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col">
              <div className="h-48 bg-zinc-800 grid place-items-center relative overflow-hidden">
                <img 
                  src="/cogo_2.jpg" 
                  alt="Cogo Sustainable Living App"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  Cogo
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  An innovative mobile application that helps users track their
                  carbon footprint and make sustainable lifestyle choices through
                  intuitive design and gamification.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Sustainability
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Mobile
                  </span>
                </div>
                <div className="mt-auto pt-4 text-[12px] text-muted-foreground font-medium group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/hsbc" className="group block">
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col">
              <div className="h-48 bg-zinc-800 grid place-items-center relative overflow-hidden">
                <img 
                  src="/hsbc.jpg" 
                  alt="HSBC Digital Banking"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  HSBC
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  A complete overhaul of HSBC's digital banking platform,
                  focusing on accessibility, security, and user experience for
                  millions of customers worldwide.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Banking
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Digital
                  </span>
                </div>
                <div className="mt-auto pt-4 text-[12px] text-muted-foreground font-medium group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/mporium" className="group block">
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col">
              <div className="h-48 bg-zinc-800 grid place-items-center relative overflow-hidden">
                <img 
                  src="/mop2.jpeg" 
                  alt="Mporium Mobile Commerce"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  Mporium
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  A mobile-first commerce platform that combines shopping,
                  loyalty programs, and social features to create a seamless
                  retail experience for modern consumers.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Commerce
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Mobile
                  </span>
                </div>
                <div className="mt-auto pt-4 text-[12px] text-muted-foreground font-medium group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/tech-data" className="group block">
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col">
              <div className="h-48 bg-zinc-800 grid place-items-center relative overflow-hidden">
                <img 
                  src="/td6.jpg" 
                  alt="Tech Data B2B Platform"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  Tech Data
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  A comprehensive B2B platform redesign for technology
                  distribution, streamlining procurement processes and improving
                  partner relationships.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    B2B
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Technology
                  </span>
                </div>
                <div className="mt-auto pt-4 text-[12px] text-muted-foreground font-medium group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/skinart" className="group block">
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col">
              <div className="h-48 bg-zinc-800 grid place-items-center relative overflow-hidden">
                <img 
                  src="/skinart_large2.jpg" 
                  alt="SkinArt Digital Art Platform"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  SkinArt
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  An innovative platform that allows users to create, share, and
                  apply custom digital art to gaming skins and virtual items
                  across multiple platforms.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Digital Art
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Gaming
                  </span>
                </div>
                <div className="mt-auto pt-4 text-[12px] text-muted-foreground font-medium group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/reeusa" className="group block">
            <div className="rounded-[6px] border border-border bg-card overflow-hidden h-[400px] flex flex-col">
              <div className="h-48 bg-zinc-800 grid place-items-center relative overflow-hidden">
                <img 
                  src="/cogo_7.jpg" 
                  alt="Reeusa Sustainable Marketplace"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="opacity-100 text-sm relative z-10 text-white font-medium transition-transform duration-300 delay-75 group-hover:scale-110 drop-shadow-lg">
                  Reeusa
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  A marketplace platform connecting consumers with sustainable
                  and eco-friendly products, promoting conscious consumption
                  through intuitive design and transparent product information.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Marketplace
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2 py-0.5 text-[10px]">
                    Sustainability
                  </span>
                </div>
                <div className="mt-auto pt-4 text-[12px] text-muted-foreground font-medium group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <SharedFooter />
    </main>
  );
}
