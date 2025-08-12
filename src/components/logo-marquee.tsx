'use client';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';

const LogoMarquee = () => {
  // Array of logo files to display
  const logos = [
    '/client-logos/mporium-logo.png',
    '/client-logos/rightmove-logo.png',
    '/client-logos/simba-logo.png',
    '/client-logos/konfer-logo.png',
    '/client-logos/bhf-logo.png',
    '/client-logos/barclays-logo.png',
    '/client-logos/hsbc-logo.png',
    '/client-logos/ogilvy-logo.png',
    '/client-logos/open-banking-logo.png',
    '/client-logos/american-express-logo.png',
  ];

  return (
    <div className="flex size-full items-center justify-center bg-background">
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent>
          {logos.map((logo, index) => (
            <MarqueeItem className="mx-8" key={index}>
              <img
                alt={`Logo ${index + 1}`}
                className="w-auto h-auto max-h-48 dark:invert"
                src={logo}
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
