import { createNavigation } from 'next-intl/navigation';
import { pathnames } from './pathname';
import { type Locale } from './config';
import { routing } from './routing';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

// Helper function to get localized pathname in server components
export function getLocalizedPathname(
  pathname: keyof typeof pathnames,
  locale: Locale,
): string {
  const pathnameConfig = pathnames[pathname];
  if (pathnameConfig && typeof pathnameConfig === 'object' && locale in pathnameConfig) {
    return `/${locale}${pathnameConfig[locale as keyof typeof pathnameConfig]}`;
  }
  // Fallback: if pathname not in mapping, return with locale prefix
  return `/${locale}${pathname}`;
}
