# Placeholder Images

This directory contains placeholder images for the SMLA website. Replace these with actual images before production deployment.

## Required Images

- `hero-bg.jpg` - Hero background (1920x1080px)
- `andes-landscape.jpg` - Andes landscape section (1200x600px)
- `hotel-hero.jpg` - Hotel page hero (1920x1080px)
- `hotel-usp-1.jpg` - Hotel USP 1 (800x600px)
- `hotel-usp-2.jpg` - Hotel USP 2 (800x600px)
- `hotel-usp-3.jpg` - Hotel USP 3 (800x600px)
- `hotel-usp-4.jpg` - Hotel USP 4 (800x600px)
- `og-image.jpg` - Open Graph image (1200x630px)

## Image Guidelines

- **Format**: JPG or WebP
- **Quality**: High resolution, optimized for web
- **Style**: Natural, mountain landscapes, sustainable architecture
- **Alt text**: Descriptive for accessibility
- **License**: Ensure proper rights for commercial use

## Optimization

Use Next.js Image component for automatic optimization:
```tsx
import Image from 'next/image';

<Image
  src="/hero-bg.jpg"
  alt="Montañas de los Andes"
  fill
  className="object-cover"
  priority
/>
```

