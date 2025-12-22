import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export type IconProps = React.SVGAttributes<SVGSVGElement> & {
  size?: number;
  title?: string;
};

export function Icon({ size = 20, className, title, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : 'presentation'}
      className={cn('shrink-0', className)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {props.children}
    </svg>
  );
}
