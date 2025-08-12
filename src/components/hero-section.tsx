import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { TextEffect } from '@/components/ui/text-effect';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { HeroHeader } from './header';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { Highlighter } from '@/components/magicui/highlighter';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        {/* Animated Grid Pattern Background */}
        <div className="absolute inset-0 -z-30">
          <AnimatedGridPattern
            width={32}
            height={32}
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            className="text-muted-foreground/20"
          />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
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
              className="absolute inset-0 -z-20"
            >
              <Image
                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                alt="background"
                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                width="3276"
                height="4095"
              />
            </AnimatedGroup>
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-5xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]"
                >
                  I design thoughtful experiences
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg"
                >
                  For real world users - always users first
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
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
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    {/* <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">Start Building</span>
                                            </Link>
                                        </Button> */}
                  </div>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background relative z-10 pb-16">
          <div className="m-auto max-w-5xl px-6">
            {/* <h2 className="text-center text-lg font-medium">Your favorite companies are our partners.</h2> */}
            <div className="mx-auto mt-12 max-w-4xl">
              <Marquee>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent speed={40} pauseOnHover={true}>
                  <MarqueeItem className="mx-8">
                    <img
                      className="w-auto h-auto max-h-32 dark:invert"
                      src="/client-logos/mporium-logo.png"
                      alt="Mporium Logo"
                    />
                  </MarqueeItem>
                  <MarqueeItem className="mx-8">
                    <img
                      className="w-auto h-auto max-h-32 dark:invert"
                      src="/client-logos/rightmove-logo.png"
                      alt="Rightmove Logo"
                    />
                  </MarqueeItem>
                  <MarqueeItem className="mx-8">
                    <img
                      className="w-auto h-auto max-h-32 dark:invert"
                      src="/client-logos/simba-logo.png"
                      alt="Simba Logo"
                    />
                  </MarqueeItem>
                  <MarqueeItem className="mx-8">
                    <img
                      className="w-auto h-auto max-h-32 dark:invert"
                      src="/client-logos/konfer-logo.png"
                      alt="Konfer Logo"
                    />
                  </MarqueeItem>
                  <MarqueeItem className="mx-8">
                    <img
                      className="w-auto h-auto max-h-32 dark:invert"
                      src="/client-logos/bhf-logo.png"
                      alt="BHF Logo"
                    />
                  </MarqueeItem>
                  <MarqueeItem className="mx-8">
                    <img
                      className="w-auto h-auto max-h-32 dark:invert"
                      src="/client-logos/barclays-logo.png"
                      alt="Barclays Logo"
                    />
                  </MarqueeItem>
                  <MarqueeItem className="mx-8">
                    <img
                      className="w-auto h-auto max-h-32 dark:invert"
                      src="/client-logos/hsbc-logo.png"
                      alt="HSBC Logo"
                    />
                  </MarqueeItem>
                  <MarqueeItem className="mx-8">
                    <img
                      className="w-auto h-auto max-h-32 dark:invert"
                      src="/client-logos/ogilvy-logo.png"
                      alt="Ogilvy Logo"
                    />
                  </MarqueeItem>
                  <MarqueeItem className="mx-8">
                    <img
                      className="w-auto h-auto max-h-32 dark:invert"
                      src="/client-logos/open-banking-logo.png"
                      alt="Open Banking Logo"
                    />
                  </MarqueeItem>
                  <MarqueeItem className="mx-8">
                    <img
                      className="w-auto h-auto max-h-32 dark:invert"
                      src="/client-logos/american-express-logo.png"
                      alt="American Express Logo"
                    />
                  </MarqueeItem>
                </MarqueeContent>
              </Marquee>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
