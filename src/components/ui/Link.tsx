import * as React from 'react';
import NextLink from 'next/link';
import { cn } from '@/lib/utils/cn';

type LinkVariant = 'default' | 'menuFooter';

const variantClasses: Record<LinkVariant, string> = {
  default: 'text-primary-dark-blue',
  menuFooter:
    'text-primary-dark-blue text-[16px] leading-normal font-[450] font-tt-norms',
};

export type LinkProps = React.ComponentProps<typeof NextLink> & {
  className?: string;
  variant?: LinkVariant;
};

export function Link({ className, variant = 'default', ...props }: LinkProps) {
  return (
    <NextLink
      {...props}
      className={cn(
        'transition-opacity hover:opacity-80',
        variantClasses[variant],
        className
      )}
    />
  );
}
