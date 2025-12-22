'use client';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  const t = useTranslations('common');

  return (
    <main className="p-10">
      <Button variant="primary">{t('discoverCampus')}</Button>
    </main>
  );
}
