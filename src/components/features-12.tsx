'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Target, Users, TrendingUp, Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BorderBeam } from '@/components/magicui/border-beam';

export default function Features() {
  type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4';
  const [activeItem, setActiveItem] = useState<ImageKey>('item-1');

  const images = {
    'item-1': {
      image: '/product-strategy.jpg',
      alt: 'Product strategy and direction',
    },
    'item-2': {
      image: '/collaboration.jpg',
      alt: 'Collaboration with development',
    },
    'item-3': {
      image: '/innovation.jpg',
      alt: 'Staying ahead of the curve',
    },
    'item-4': {
      image: '/user-research.jpg',
      alt: 'User research and testing',
    },
  };

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-stone-50 dark:bg-stone-900/50">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            The foundation for impactful design
          </h2>
          <p>
            Design is more than how it looks. It&apos;s how it works, how it
            feels, and how it performs. I combine strategy, creativity, and deep
            technical understanding to create products that deliver real
            outcomes for users and businesses.
          </p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={value => setActiveItem(value as ImageKey)}
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Target className="size-4" />
                  Product Strategy and Direction
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    With over 25 years across design, development, animation,
                    and consulting, I bring a clear point of view to product. I
                    focus on clarity, alignment, and impact. Every decision is
                    rooted in research, shaped by user needs, and aligned with
                    business goals.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Users className="size-4" />
                  Collaboration with Development
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    I work closely with engineering teams from the start. That
                    means cleaner handoffs, and faster releases. I understand
                    their language and think in systems. Every component, every
                    flow, every edge case is considered and covered.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <TrendingUp className="size-4" />
                  Staying Ahead of the Curve
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    I stay current because it matters. Whether it&apos;s AI,
                    spatial UI, blockchain interfaces, or the latest front-end
                    frameworks, I&apos;m always learning, testing, and pushing
                    what&apos;s possible.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Search className="size-4" />
                  User Research and Testing
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    Real insight comes from real users. I run interviews,
                    usability tests, and concept validation to make sure
                    we&apos;re always building the right thing.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Image wrapper balanced left/right padding */}
          <div className="group relative flex overflow-hidden rounded-[6px] border border-zinc-200/50 dark:border-white/10 bg-gradient-to-br from-background to-muted/50 p-3 shadow-lg backdrop-blur-sm">
            <div className="aspect-[4/3] relative w-full rounded-[6px] ring-1 ring-zinc-200/60 dark:ring-white/10 shadow-xl bg-zinc-50/30 dark:bg-zinc-900/40">
              <AnimatePresence mode="sync">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{ willChange: 'opacity' }}
                  className="absolute inset-0 size-full overflow-hidden rounded-[6px] border border-zinc-200/40 dark:border-white/10 bg-black/80 shadow-2xl"
                >
                  <Image
                    src={images[activeItem].image}
                    className="size-full object-cover object-center dark:mix-blend-lighten"
                    alt={images[activeItem].alt}
                    width={1207}
                    height={929}
                    priority
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
