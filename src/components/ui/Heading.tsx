import * as React from 'react';
import { cn } from '@/lib/utils/cn';

type HeadingVariant = 'h1' | 'h3' | 'h4';

const variantClasses: Record<HeadingVariant, string> = {
  h1: 'text-[72px] font-[400] uppercase leading-normal',
  h3: 'text-[36px] font-[400] uppercase leading-[50px]',
  h4: 'text-[24px] font-[450] uppercase leading-[34px]',
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
