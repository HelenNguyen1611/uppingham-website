import { getPageContent } from '@/lib/data/pages';
import { BlockRenderer } from '@/components/page-blocks/BlockRenderer';
import { Metadata } from 'next';
import { Locale } from '@/lib/i18n/config';
import { RedLineWrapper } from '@/components/ui/RedLineWrapper';
import { Quicklink } from '@/components/ui/Quicklink';
import { getLocalizedPathname } from '@/lib/i18n/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const content = getPageContent('contact');
  return {
    title: content?.metadata?.title || 'Contact - Uppingham Vietnam',
    description: content?.metadata?.description || '',
  };
}

type ContactPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const content = getPageContent('contact');
  const menuItems = [
    { key: 'contactUs', href: getLocalizedPathname('/contact', locale) },
    { key: 'careers', href: getLocalizedPathname('/careers', locale) },
  ];

  if (!content) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <RedLineWrapper autoFillFirstFold={true} />
      <Quicklink
        menuTitle="Contact"
        menuItems={menuItems}
        submenuKey="contactSubmenu"
      />
      <BlockRenderer sections={content.sections} />
    </>
  );
}
