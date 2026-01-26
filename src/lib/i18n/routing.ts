import {defineRouting} from 'next-intl/routing';

import {defaultLocale, locales} from './config';
import {pathnames} from './pathname';

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Always prefix routes with the locale (/en, /vi, ...)
  localePrefix: 'always',
  pathnames
});

