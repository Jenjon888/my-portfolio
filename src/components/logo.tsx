'use client';

import { cn } from '../lib/utils';
import Image from 'next/image';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/jenjo.png"
      alt="Jenjo Logo"
      width={78}
      height={18}
      className={cn('h-5 w-auto', className)}
      priority
    />
  );
};

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/jenjo.png"
      alt="Jenjo Logo"
      width={18}
      height={18}
      className={cn('size-5', className)}
      priority
    />
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/jenjo.png"
      alt="Jenjo Logo"
      width={71}
      height={25}
      className={cn('size-7 w-7', className)}
      priority
    />
  );
};
