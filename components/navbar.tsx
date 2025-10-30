"use client"

import { Button } from '@/components/ui/button';
import { Menu, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLocale } from '@/components/locale-provider';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  
  const navLinks = {
    es: {
      home: 'Inicio',
      hotel: 'Hotel',
      conservation: 'Conservación',
      contact: 'Contacto',
      cta: 'Hablemos'
    },
    en: {
      home: 'Home',
      hotel: 'Hotel',
      conservation: 'Conservation',
      contact: 'Contact',
      cta: 'Get in touch'
    }
  };

  return (
    <nav id="header" data-component="navbar" className="sticky top-0 z-50 w-full border-b bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo (clickable) */}
        <a href="/" className="flex items-center space-x-2" aria-label="Ir al inicio" data-element="brand">
          <div className="h-8 w-8 rounded bg-primary"></div>
          <span className="text-xl font-bold text-primary">SMLA</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 ml-auto" data-element="nav-links">
          <a href="/hotel" className="text-text hover:text-primary transition-colors">
            {navLinks[locale].hotel}
          </a>
          <a href="/conservacion" className="text-text hover:text-primary transition-colors">
            {navLinks[locale].conservation}
          </a>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-5 ml-6" data-element="actions">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20">
            {navLinks[locale].cta}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-2"
            onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
            title={locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">{locale.toUpperCase()}</span>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-bg">
          <div className="container py-4 space-y-4">
            <a href="/hotel" className="block text-text hover:text-primary transition-colors">
              {navLinks[locale].hotel}
            </a>
            <a href="/conservacion" className="block text-text hover:text-primary transition-colors">
              {navLinks[locale].conservation}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
