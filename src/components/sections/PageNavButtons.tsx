import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

export type PageNavButtonItem = {
  label: string;
  href: string;
};

type PageNavButtonsProps = {
  items: PageNavButtonItem[];
  className?: string;
};

/**
 * Renders a row of navigation buttons (e.g. 3 links before footer).
 * Use for same-level or sibling page navigation.
 */
export function PageNavButtons({ items, className }: PageNavButtonsProps) {
  if (!items.length) return null;

  return (
    <section
      className={cn('relative z-20 border-t border-dark-stone', className)}
      aria-label="Page navigation"
    >
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {items.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center justify-center min-h-[60px] px-6 py-4',
                'font-tt-norms font-[450] text-base lg:text-xl text-primary',
                'border-2 border-primary bg-transparent',
                'hover:bg-primary hover:text-white transition-colors',
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
