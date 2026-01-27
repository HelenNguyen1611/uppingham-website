// src/lib/i18n/pathname.ts
// Define locale-based URL mappings. Key = internal route (logical route, matches app/[locale]/...).
// Value = locale-specific URL segment. Proxy rewrites e.g. /vi/lien-he → internal /vi/contact.
export const pathnames = {
  '/': { en: '/', vi: '/' },
  '/about': { en: '/about', vi: '/gioi-thieu' },
  '/about/headmaster': { en: '/about/headmaster', vi: '/gioi-thieu/hieu-truong' },
  '/admissions': { en: '/admissions', vi: '/tuyen-sinh' },
  '/contact': { en: '/contact', vi: '/lien-he' },
  '/learning': { en: '/learning', vi: '/hoc-tap' },
  '/careers': { en: '/careers', vi: '/tuyen-dung' },
  '/student-portal': { en: '/student-portal', vi: '/cong-hoc-sinh' },
  '/parent-portal': { en: '/parent-portal', vi: '/cong-phu-huynh' },
  '/staff-portal': { en: '/staff-portal', vi: '/cong-can-bo' },
  '/community': { en: '/community', vi: '/community' },
  '/life': { en: '/life', vi: '/life' },
  '/news': { en: '/news', vi: '/news' },
  '/our-campuses': { en: '/our-campuses', vi: '/our-campuses' },
} as const;