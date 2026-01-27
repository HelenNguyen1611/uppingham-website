import { getPageContent } from '@/lib/data/pages';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Locale } from '@/lib/i18n/config';
import { RedLineWrapper } from '@/components/ui/RedLineWrapper';
import { Quicklink } from '@/components/ui/Quicklink';
import { HeroImage, Headmaster, PageNavButtons } from '@/components/sections';
import { getMenuData } from '@/lib/data/menu';

export async function generateMetadata(): Promise<Metadata> {
  const content = getPageContent('about');
  return {
    title:
      content?.metadata?.title ?? "Headmaster's welcome - Uppingham Vietnam",
    description:
      content?.metadata?.description ??
      "The Headmaster's welcome to Uppingham Vietnam.",
  };
}

type HeadmasterPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function HeadmasterPage({ params }: HeadmasterPageProps) {
  const { locale } = await params;
  const tHero = await getTranslations('headmasterPage.hero');
  const tMenu = await getTranslations('menu');
  const menuData = getMenuData(locale);
  const aboutChildren = menuData.find((m) => m.key === 'about')?.children ?? [];

  const navItems = [
    {
      label: tMenu('aboutSubmenu.headmasterWelcome'),
      href: `/${locale}/about/headmaster`,
    },
    {
      label: tMenu('aboutSubmenu.uppinghamVietnam'),
      href: `/${locale}/about`,
    },
    {
      label: tMenu('aboutSubmenu.ourPhilosophy'),
      href: `/${locale}/about/philosophy`,
    },
    {
      label: tMenu('aboutSubmenu.governanceAdvisoryBoard'),
      href: `/${locale}/about/governance`,
    },
    {
      label: tMenu('aboutSubmenu.purposePriorities'),
      href: `/${locale}/about/purpose`,
    },
    {
      label: tMenu('aboutSubmenu.meetOurTeam'),
      href: `/${locale}/about/team`,
    },
    {
      label: tMenu('aboutSubmenu.heritageLegacy'),
      href: `/${locale}/about/heritage`,
    },
  ];

  return (
    <>
      <RedLineWrapper autoFillFirstFold={true} />
      <Quicklink
        menuTitle="About"
        menuItems={aboutChildren}
        submenuKey="aboutSubmenu"
      />
      <HeroImage
        eyebrow={tHero('eyebrow')}
        heading={tHero('heading')}
        imageSrc={tHero('imageSrc')}
        imageAlt={tHero('heading')}
        headingAs="h1"
        headingVariant="h1"
        showCta={false}
      />
      <Headmaster />
      <PageNavButtons items={navItems} />
    </>
  );
}
