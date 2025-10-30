"use client"

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations('common.language');
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchLanguage}
      className="flex items-center space-x-2"
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">{locale.toUpperCase()}</span>
    </Button>
  );
}



