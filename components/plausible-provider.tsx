"use client"

import { useEffect } from 'react';

interface PlausibleProviderProps {
  children: React.ReactNode;
}

export function PlausibleProvider({ children }: PlausibleProviderProps) {
  useEffect(() => {
    const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
    
    if (domain && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.defer = true;
      script.setAttribute('data-domain', domain);
      script.src = 'https://plausible.io/js/script.js';
      document.head.appendChild(script);
    }
  }, []);

  return <>{children}</>;
}
