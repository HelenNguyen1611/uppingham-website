import NextLink, { LinkProps as NextLinkProps } from 'next/link';
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

export type LinkProps = NextLinkProps & {
  className?: string;
  variant?: 'tag' | 'menuFooter' | 'body' | 'smallHeading';
  children: React.ReactNode;
};

export function Link({
  href,
  children,
  className,
  variant = 'body',
  ...props
}: LinkProps) {
  const classes = cn(variantClasses[variant], className);
  return (
    <NextLink href={href} className={classes} {...props}>
      {children}
    </NextLink>
  );
}
