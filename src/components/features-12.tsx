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
          Turning ideas into products people love
          </h2>
          <p>
          Design is not just about appearance. It is about how something works, how it feels to use, and how well it performs. I bring together creativity, strategy, and technical experience to design products that are clear, usable, and built to achieve both user and business goals.
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
                  I have extensive knowledge and experience across design, development, animation, and consulting. A true unicorn. My approach is direct and focused. Every decision is based on research, shaped by user needs, and aligned with business goals. The aim is always clarity and impact.
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
                  I work closely with development teams to make sure design moves smoothly into build. My experience and understanding of coding also help remove friction and keep the product experience consistent from concept through delivery.
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
                  I am a devoted learner of technology and keep up to date with the latest advances, especially with the rapid movement of AI. I look for ways to use these technologies to design solutions that are relevant today and adaptable for the future.
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
                  Good design is built on understanding. Research and testing allow me to uncover real user needs, validate ideas, and make confident design decisions. It is an essential part of product development and vital to the success of any product.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Image wrapper balanced left/right padding */}
          <div className="group relative flex overflow-hidden rounded-[6px] border border-zinc-200/50 dark:border-white/10 bg-gradient-to-br from-background to-muted/50 p-1.5 shadow-lg backdrop-blur-sm">
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
