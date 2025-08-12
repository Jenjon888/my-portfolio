'use client';

import { cn } from '../lib/utils';
import { useTheme } from './theme-provider';
import Image from 'next/image';

export const Logo = ({
  className,
  uniColor,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  const { theme } = useTheme();
  
  // Use different logos based on theme
  const logoSrc = theme === 'dark' ? '/logo-light.png' : '/logo-dark.png';
  
  return (
    <Image
      src={logoSrc}
      alt="Logo"
      width={78}
      height={18}
      className={cn('h-5 w-auto', className)}
      priority
    />
  );
};

export const LogoIcon = ({
  className,
  uniColor,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  const { theme } = useTheme();
  
  // Use different logos based on theme
  const logoSrc = theme === 'dark' ? '/logo-light.png' : '/logo-dark.png';
  
  return (
    <Image
      src={logoSrc}
      alt="Logo"
      width={18}
      height={18}
      className={cn('size-5', className)}
      priority
    />
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  const { theme } = useTheme();
  
  // Use different logos based on theme
  const logoSrc = theme === 'dark' ? '/logo-light.png' : '/logo-dark.png';
  
  return (
    <Image
      src={logoSrc}
      alt="Logo"
      width={71}
      height={25}
      className={cn('size-7 w-7', className)}
      priority
    />
  );
};
