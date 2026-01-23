import * as React from 'react';
import NextLink from 'next/link';
import { cn } from '@/lib/utils/cn';

type LinkVariant = 'tag' | 'menuFooter' | 'body' | 'smallHeading';

const variantClasses: Record<LinkVariant, string> = {
  tag: 'text-primary-dark-blue text-[20px] leading-[32px] font-[400]',
  menuFooter:
    'text-primary-dark-blue text-[16px] leading-normal font-[450] font-tt-norms',
  body: 'text-primary-dark-blue text-[20px] leading-[30px] font-[450] font-tt-norms',
  smallHeading:
    'text-primary-dark-blue text-[20px] font-[400] font-tag text-secondary',
};

export type LinkProps = React.ComponentProps<typeof NextLink> & {
  className?: string;
  variant?: LinkVariant;
};

export function Link({ className, variant = 'body', ...props }: LinkProps) {
  return (
    <NextLink
      {...props}
      className={cn(
        'transition-opacity hover:opacity-80',
        variantClasses[variant],
        className,
      )}
    />
  );
}
