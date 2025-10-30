"use client"

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Moon, Sun } from 'lucide-react';
import { useLocale } from '@/components/locale-provider';

export function Footer() {
  const { theme, setTheme } = useTheme();
  const { locale } = useLocale();
  
  const tooltips = {
    es: {
      toLight: 'Cambiar a modo claro',
      toDark: 'Cambiar a modo oscuro'
    },
    en: {
      toLight: 'Switch to light mode',
      toDark: 'Switch to dark mode'
    }
  };
  
  return (
    <footer id="footer" data-component="footer" className="border-t bg-bg">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary"></div>
              <span className="text-xl font-bold text-primary">SMLA</span>
            </div>
            <p className="text-text text-sm">
              Construimos refugios. Regeneramos montañas.
            </p>
            <div className="pt-2">
              <Button
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="h-8 w-8 bg-accent hover:bg-accent/90 text-white dark:text-gray-900"
                title={theme === 'dark' ? tooltips[locale].toLight : tooltips[locale].toDark}
              >
                <Moon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Sun className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">{theme === 'dark' ? tooltips[locale].toLight : tooltips[locale].toDark}</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-text">Enlaces</h3>
            <div className="space-y-2">
              <a href="/" className="block text-text hover:text-primary transition-colors text-sm">
                Inicio
              </a>
              <a href="/hotel" className="block text-text hover:text-primary transition-colors text-sm">
                Hotel
              </a>
              <a href="/conservacion" className="block text-text hover:text-primary transition-colors text-sm">
                Conservación
              </a>
              <a href="/contacto" className="block text-text hover:text-primary transition-colors text-sm">
                Contacto
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-text">Legal</h3>
            <div className="space-y-2">
              <a href="/legal" className="block text-text hover:text-primary transition-colors text-sm">
                Términos y condiciones
              </a>
              <a href="/privacy" className="block text-text hover:text-primary transition-colors text-sm">
                Política de privacidad
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-text">Síguenos</h3>
            <div className="flex space-x-4 items-center">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-text text-sm">
            © 2024 SMLA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
