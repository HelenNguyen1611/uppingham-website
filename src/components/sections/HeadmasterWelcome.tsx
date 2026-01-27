'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { Image } from '@/components/ui/Image';
import { cn } from '@/lib/utils/cn';

const contentWrapperClass = cn(
  'font-tt-norms text-left text-primary-dark-blue',
  '[&_p]:text-[20px] [&_p]:leading-[30px] [&_p]:font-[450] [&_p]:mb-8 [&_p:last-of-type]:mb-0',
  '[&_blockquote]:text-xl [&_blockquote]:lg:text-2xl [&_blockquote]:leading-snug [&_blockquote]:text-secondary [&_blockquote]:font-[400] [&_blockquote]:my-8 [&_blockquote_strong]:font-[600]',
  '[&_footer]:mt-10 [&_footer]:pt-4 [&_footer_p]:mb-0 [&_footer_p:first-child]:font-[450] [&_footer_p:first-child]:text-[length:var(--heading-h4)] [&_footer_p:last-child]:text-[20px] [&_footer_p:last-child]:leading-[30px] [&_footer_p:last-child]:text-primary',
);

type HeadmasterWelcomeProps = {
  /** Pass from server via getTranslations to avoid long HTML in client messages. */
  imageSrc?: string;
  heading?: string;
  bodyHtml?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function HeadmasterWelcome({
  imageSrc,
  heading,
  bodyHtml: bodyHtmlProp,
  ctaLabel,
  ctaHref,
}: HeadmasterWelcomeProps) {
  const t = useTranslations('headmasterWelcome');
  const locale = useLocale();
  const resolvedCtaHref = ctaHref ?? `/${locale}${t('ctaButtonHref')}`;
  const bodyHtml = bodyHtmlProp ?? t('bodyHtml');

  return (
    <section className="relative pt-50 pb-25">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 2xl:gap-30 items-start">
          {/* Left Column - Tagline + Image */}
          <div className="flex flex-col gap-15">
            <Heading as="h2" variant="h2" align="left" className="uppercase">
              {t('tagline')}
            </Heading>
            <div className="relative w-full aspect-[780/874]">
              <Image
                src={t('imageSrc')}
                alt={t('imageAlt')}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column - Content (single HTML body) */}
          <div className="flex flex-col gap-8 heademaster-right-column">
            <div
              className={contentWrapperClass}
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />

            <div className="mt-4">
              <Button
                href={ctaHref}
                variant="primary"
                size="lg"
                className="min-w-[300px]"
              >
                {t('ctaButton')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
