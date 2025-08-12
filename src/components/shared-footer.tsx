import { Mail } from 'lucide-react';

export const SharedFooter = () => {
  return (
    <footer className="mt-4 border-t border-border">
      <div className="container py-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted-foreground">
        <span>© 2025 jenjo.info. All rights reserved.</span>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a
            href="mailto:hello@example.com"
            className="hover:underline underline-offset-4 flex items-center gap-1"
          >
            <Mail className="h-3 w-3" />
            Get in touch
          </a>
        </div>
      </div>
    </footer>
  );
};
