import { type MenuData } from '@/types/menu';
import { type Locale } from '@/lib/i18n/config';

export function getMenuData(locale: Locale): MenuData {
  return [
    {
      key: 'homepage',
      href: `/${locale}`,
    },
    {
      key: 'about',
      href: `/${locale}/about`,
      children: [
        {
          key: 'headmasterWelcome',
          href: `/${locale}/about/headmaster`,
        },
        {
          key: 'uppinghamVietnam',
          href: `/${locale}/about`,
        },
        {
          key: 'ourPhilosophy',
          href: `/${locale}/about/philosophy`,
        },
        {
          key: 'governanceAdvisoryBoard',
          href: `/${locale}/about/governance`,
        },
        {
          key: 'purposePriorities',
          href: `/${locale}/about/purpose`,
        },
        {
          key: 'meetOurTeam',
          href: `/${locale}/about/team`,
        },
        {
          key: 'heritageLegacy',
          href: `/${locale}/about/heritage`,
        },
      ],
    },
    {
      key: 'learning',
      href: `/${locale}/learning`,
      children: [
        {
          key: 'academicLife',
          href: `/${locale}/learning/academic-life`,
        },
        {
          key: 'internationalCurriculum',
          children: [
            {
              key: 'juniorSchool',
              href: `/${locale}/learning/curriculum/junior-school`,
            },
            {
              key: 'seniorSchool',
              href: `/${locale}/learning/curriculum/senior-school`,
            },
            {
              key: 'sixthForm',
              href: `/${locale}/learning/curriculum/sixth-form`,
            },
          ],
        },
        {
          key: 'bilingualCurriculum',
          href: `/${locale}/learning/bilingual-curriculum`,
        },
        {
          key: 'academicSupport',
          href: `/${locale}/learning/academic-support`,
        },
        {
          key: 'academicResults',
          href: `/${locale}/learning/academic-results`,
        },
        {
          key: 'calendarTimetable',
          href: `/${locale}/learning/calendar`,
        },
      ],
    },
    {
      key: 'life',
      href: `/${locale}/life`,
      children: [
        {
          key: 'houseStructure',
          children: [
            {
              key: 'introduction',
              href: `/${locale}/life/house-structure/introduction`,
            },
            {
              key: 'typicalDay',
              href: `/${locale}/life/house-structure/typical-day`,
            },
            {
              key: 'house1',
              href: `/${locale}/life/house-structure/house-1`,
            },
            {
              key: 'house2',
              href: `/${locale}/life/house-structure/house-2`,
            },
            {
              key: 'house3',
              href: `/${locale}/life/house-structure/house-3`,
            },
          ],
        },
        {
          key: 'pastoralCare',
          href: `/${locale}/life/pastoral-care`,
        },
        {
          key: 'coCurricularActivities',
          children: [
            {
              key: 'sport',
              href: `/${locale}/life/co-curricular/sport`,
            },
            {
              key: 'music',
              href: `/${locale}/life/co-curricular/music`,
            },
            {
              key: 'theatre',
              href: `/${locale}/life/co-curricular/theatre`,
            },
            {
              key: 'artDesignTechnology',
              href: `/${locale}/life/co-curricular/art-design-technology`,
            },
          ],
        },
        {
          key: 'enrichmentProgramme',
          href: `/${locale}/life/enrichment`,
        },
        {
          key: 'busService',
          href: `/${locale}/life/bus-service`,
        },
      ],
    },
    {
      key: 'ourCampuses',
      href: `/${locale}/our-campuses`,
      children: [
        {
          key: 'hungYenCampus',
          href: `/${locale}/our-campuses/hung-yen`,
        },
        {
          key: 'dongNaiCampus',
          href: `/${locale}/our-campuses/dong-nai`,
        },
        {
          key: 'bookATour',
          href: `/${locale}/our-campuses/book-tour`,
        },
      ],
    },
    {
      key: 'admissions',
      href: `/${locale}/admissions`,
      children: [
        {
          key: 'joinUppingham',
          href: `/${locale}/admissions/join`,
        },
        {
          key: 'visitingTheSchool',
          href: `/${locale}/admissions/visiting`,
        },
        {
          key: 'admissionsGuide',
          href: `/${locale}/admissions/guide`,
        },
        {
          key: 'downloadProspectus',
          href: `/${locale}/admissions/prospectus`,
        },
        {
          key: 'tuitionsFees',
          href: `/${locale}/admissions/tuitions-fees`,
        },
        {
          key: 'termDates',
          href: `/${locale}/admissions/term-dates`,
        },
        {
          key: 'registration',
          href: `/${locale}/admissions/registration`,
        },
        {
          key: 'scholarships',
          href: `/${locale}/admissions/scholarships`,
        },
        {
          key: 'schoolShops',
          href: `/${locale}/admissions/school-shops`,
        },
      ],
    },
    {
      key: 'community',
      href: `/${locale}/community`,
      children: [
        {
          key: 'parentsPortal',
          href: `/${locale}/community/parents-portal`,
        },
        {
          key: 'studentsPortal',
          href: `/${locale}/community/students-portal`,
        },
        {
          key: 'staffPortal',
          href: `/${locale}/community/staff-portal`,
        },
        {
          key: 'oldUppinghamians',
          href: `/${locale}/community/old-uppinghamians`,
        },
      ],
    },
    {
      key: 'news',
      href: `/${locale}/news`,
    },
    {
      key: 'contact',
      href: `/${locale}/contact`,
      children: [
        {
          key: 'contactUs',
          href: `/${locale}/contact`,
        },
        {
          key: 'careers',
          href: `/${locale}/careers`,
        },
      ],
    },
  ];
}
