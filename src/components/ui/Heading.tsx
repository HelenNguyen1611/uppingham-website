import * as React from 'react';
import { cn } from '@/lib/utils/cn';

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const variantClasses: Record<HeadingVariant, string> = {
  h1: 'text-heading-h1 font-[400] uppercase leading-normal',
  h2: 'text-heading-h2 font-[400] uppercase leading-normal',
  h3: 'text-heading-h3 font-[400] uppercase leading-normal',
  h4: 'text-heading-h4 font-[400] uppercase leading-normal',
  h5: 'text-heading-h5 font-[400] uppercase leading-normal',
  h6: 'text-heading-h6 font-[400] uppercase leading-normal',
};

export type HeadingProps<T extends React.ElementType = 'h2'> = {
  as?: T;
  variant?: HeadingVariant;
  align?: 'left' | 'center';
  className?: string;
  children: React.ReactNode;
};

export function Heading<T extends React.ElementType = 'h2'>({
  as,
  variant = 'h3',
  align = 'center',
  className,
  children,
}: HeadingProps<T>) {
  const Comp = (as ?? 'h2') as React.ElementType;

  return (
    <Comp
      className={cn(
        'font-tt-norms text-primary-dark-blue',
        variantClasses[variant],
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {children}
    </Comp>
  );
}
