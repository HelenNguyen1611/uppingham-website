// src/lib/i18n/pathnames.ts
export const pathnames = {
  '/': {
    en: '/',
    vi: '/'
  },
  '/admissions': {
    en: '/admissions',
    vi: '/tuyen-sinh'  // ← Translated
  },
  '/contact': {
    en: '/contact',
    vi: '/lien-he'  // ← Translated
  },
  '/learning': {
    en: '/learning',
    vi: '/hoc-tap'  // ← Translated
  },
  '/careers': {
    en: '/careers',
    vi: '/tuyen-dung'  // ← Translated
  },
  '/student-portal': {
    en: '/student-portal',
    vi: '/cong-hoc-sinh'  // Translated    
  },
  '/parent-portal': {
    en: '/parent-portal',
    vi: '/cong-phu-huynh'  // Translated
  },
  '/staff-portal': {
    en: '/staff-portal',
    vi: '/cong-can-bo'  // Translated
  },
  // ...
} as const;