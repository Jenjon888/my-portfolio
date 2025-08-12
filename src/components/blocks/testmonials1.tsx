'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const testimonials = [
    {
      quote:
        'Jennifer Jones has a rare ability to get into the minds of users as a UX designer and then produce exceptionally high-quality responsive UI designs. In that process, she provides features that remarkably extend the usefulness of systems in respect of the tasks the user need to undertake.',
      name: 'Mark van Harmelen',
      role: 'Medify, CTO',
    },
    {
      quote:
        'Jen worked with us on a really complicated project consistently delivered above and beyond our expectations. She is fast, detailed and well documented. I would be happy to recommend Jen for any UX project.',
      name: 'Paul Hopley',
      role: 'Product Manager, Mortgage Gym',
    },
    {
      quote:
        'Jen is hard working, passionate and strives for perfection. She works well with developers in an agile environment and can deliver to tight deadlines.',
      name: 'Michael Smith',
      role: 'Senior Software Engineer, CoGo',
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      prev => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  if (!mounted) {
    return (
      <section className="pt-16 md:pt-32 pb-2 md:pb-4">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl relative pb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">
              Client Feedback
            </h2>
            <blockquote className="min-h-[200px] md:min-h-[240px] flex flex-col">
              <p className="text-lg font-semibold sm:text-xl md:text-3xl text-foreground flex-1">
                Loading...
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-16 md:pt-32 pb-2 md:pb-4">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl relative pb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Client Feedback
          </h2>
          <blockquote className="min-h-[200px] md:min-h-[240px] flex flex-col">
            <p className="text-base font-semibold leading-relaxed text-foreground flex-1">
              "{currentTestimonial.quote}"
            </p>

            <div className="mt-6">
              <cite className="font-medium text-foreground text-sm">
                {currentTestimonial.name}
              </cite>
              <div className="text-muted-foreground text-xs mt-0.5">
                {currentTestimonial.role}
              </div>
            </div>
          </blockquote>

          {/* Navigation Controls */}
          <div className="absolute right-0 bottom-0 flex items-center gap-3">
            {/* Arrow Navigation */}
            <div className="flex gap-1.5">
              <button
                onClick={prevTestimonial}
                className="p-1.5 rounded-full border border-gray-300 dark:border-stone-600 bg-white dark:bg-stone-800 hover:bg-gray-50 dark:hover:bg-stone-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-3 w-3" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-1.5 rounded-full border border-gray-300 dark:border-stone-600 bg-white dark:bg-stone-800 hover:bg-gray-50 dark:hover:bg-stone-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-5 h-1 rounded transition-colors ${
                    index === currentIndex
                      ? 'bg-gray-600 dark:bg-stone-300'
                      : 'bg-gray-300 dark:bg-stone-600 hover:bg-gray-400 dark:hover:bg-stone-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
