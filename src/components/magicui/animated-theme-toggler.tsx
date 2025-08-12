'use client';

import { Moon, SunDim } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/theme-provider';

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateIsDark = () => {
      if (theme === 'dark') {
        setIsDark(true);
      } else if (theme === 'light') {
        setIsDark(false);
      } else if (theme === 'system') {
        setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    };

    updateIsDark();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => updateIsDark();
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, mounted]);

  const changeTheme = () => {
    if (!mounted) return;
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button ref={buttonRef} className={cn(className)}>
        <div className="relative">
          <SunDim className="h-4 w-4 opacity-100" />
        </div>
      </button>
    );
  }

  return (
    <button ref={buttonRef} onClick={changeTheme} className={cn(className)}>
      <div className="relative">
        <SunDim
          className={cn(
            'h-4 w-4 absolute inset-0 transition-opacity duration-300 ease-in-out',
            !isDark ? 'opacity-100' : 'opacity-0'
          )}
        />
        <Moon
          className={cn(
            'h-4 w-4 absolute inset-0 transition-opacity duration-300 ease-in-out',
            isDark ? 'opacity-100' : 'opacity-0'
          )}
        />
      </div>
    </button>
  );
};
