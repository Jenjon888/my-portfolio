'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './theme-provider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface ThemeToggleProps {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'lg' | 'icon';
}

export function ThemeToggle({
  className,
  variant = 'ghost',
  size = 'sm',
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    console.log('Current theme:', theme);
    if (theme === 'light') {
      console.log('Switching to dark');
      setTheme('dark');
    } else if (theme === 'dark') {
      console.log('Switching to light');
      setTheme('light');
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant={variant}
        size={size}
        className={cn(
          'relative overflow-hidden transition-all duration-300 hover:scale-105',
          className
        )}
        aria-label="Loading theme toggle"
      >
        <div className="relative flex items-center justify-center">
          <Sun className="h-4 w-4" />
        </div>
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={cn(
        'relative overflow-hidden transition-all duration-300 hover:scale-105',
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative flex items-center justify-center">
        <Sun
          className={cn(
            'h-4 w-4 transition-all duration-300',
            theme === 'light'
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          )}
        />
        <Moon
          className={cn(
            'absolute h-4 w-4 transition-all duration-300',
            theme === 'dark'
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-90 scale-0 opacity-0'
          )}
        />
      </div>
    </Button>
  );
}
