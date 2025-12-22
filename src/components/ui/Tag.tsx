import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export type TagProps = {
  className?: string;
  children: React.ReactNode;
};

export function Tag({ className, children }: TagProps) {
  return (
    <span
      className={cn(
        'text-secondary-red text-[20px] leading-[32px] font-[400] text-center',
        'font-tag',
        className
      )}
    >
      {children}
    </span>
  );
}
