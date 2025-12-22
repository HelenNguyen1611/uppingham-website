import * as React from 'react';
import { cn } from '@/lib/utils/cn';

type TextVariant = 'body' | 'bodyBold' | 'menuFooter';

const variantClasses: Record<TextVariant, string> = {
  body: 'text-[20px] leading-[30px] font-[450]',
  bodyBold: 'text-[20px] leading-[30px] font-[600]',
  menuFooter: 'text-[16px] leading-normal font-[450]',
};

export type TextProps<T extends React.ElementType = 'p'> = {
  as?: T;
  variant?: TextVariant;
  align?: 'left' | 'center';
  className?: string;
  children: React.ReactNode;
};

export function Text<T extends React.ElementType = 'p'>({
  as,
  variant = 'body',
  align = 'center',
  className,
  children,
}: TextProps<T>) {
  const Comp = (as ?? 'p') as React.ElementType;

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
