import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/Button';

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
      className={cn('relative z-20 bg-secondary', className)}
      aria-label="Page navigation"
    >
      <div className="container py-25 ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[clamp(32px,3.2vw,50px)]">
          {items.map(({ label, href }) => (
            <Button
              key={href}
              href={href}
              variant="white"
              size="lg"
              className=" min-w-[300px]"
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
