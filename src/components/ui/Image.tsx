import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/lib/utils/cn';

export type ImageProps = NextImageProps & {
  className?: string;
  hoverZoom?: boolean;
  wrapperClassName?: string;
};

export function Image({
  className,
  hoverZoom = false,
  wrapperClassName,
  ...props
}: ImageProps) {
  if (!hoverZoom) {
    return <NextImage className={cn(className)} {...props} />;
  }

  return (
    <span className={cn('group block overflow-hidden', wrapperClassName)}>
      <NextImage
        className={cn(
          'transition-transform duration-500 ease-out group-hover:scale-105',
          className,
        )}
        {...props}
      />
    </span>
  );
}
