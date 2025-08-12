'use client';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';
import { cn } from '@/lib/utils';
import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler';

const menuItems = [
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        data-state={menuState && 'active'}
        className={cn(
          'w-full px-2 py-1 transition-all duration-300',
          isScrolled
            ? 'bg-background/90 backdrop-blur-lg border-b shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-1 lg:gap-0 lg:py-1 min-h-[60px]">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <div className="flex items-center gap-2">
                <AnimatedThemeToggler className="lg:hidden p-2 pr-4 rounded-md hover:bg-muted transition-colors" />
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>
            </div>



            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:items-center lg:gap-6 lg:h-full">
                <ul className="hidden lg:flex gap-8 text-sm items-center">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="hidden lg:flex items-center justify-center -mt-3">
                  <AnimatedThemeToggler className="p-2 pr-4 rounded-md hover:bg-muted transition-colors" />
                </div>
                <Button
                  asChild
                  size="sm"
                  className={cn('transition-all duration-300', isScrolled && 'lg:hidden')}
                >
                  <Link href="#">
                    <span>CV</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className={cn('transition-all duration-300', isScrolled ? 'lg:inline-flex' : 'hidden')}
                >
                  <Link href="#">
                    <span>CV</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
