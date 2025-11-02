# Image Optimization Guide

## Overview
All images have been optimized and converted to WebP format for faster loading and better performance.

## Optimization Results
- **Total reduction**: 85% (57.33MB → 8.58MB)
- **Background overlay**: 95% reduction (17MB → 0.85MB)
- **Standard images**: 85% average reduction

## How It Works

### 1. Automatic Optimization
Next.js automatically optimizes images when deployed on Vercel:
- Serves WebP/AVIF formats when supported by browser
- Responsive images based on device size
- Lazy loading for better performance

### 2. Source Images
All source images have been converted to WebP format:
- PNG/JPG originals remain for fallback
- WebP versions created in same directory
- CSS updated to use WebP versions

### 3. Using Images

#### In CSS (Background Images)
Use WebP directly:
```css
background-image: url('/images/brand/asset_warped_line_badge.webp');
```

#### In Components
Use Next.js Image component:
```tsx
import Image from 'next/image';

<Image 
  src="/images/brand/kaizen_logo.svg"
  alt="Kaizen Strategic AI"
  width={200}
  height={50}
/>
```

Next.js will automatically:
- Convert to WebP/AVIF when possible
- Generate responsive sizes
- Lazy load images
- Add blur placeholder

## Re-optimizing Images

To optimize new or updated images:

```bash
npm run optimize-images
```

This script will:
1. Find all PNG/JPG images in `public/images`
2. Convert to WebP format (85% quality)
3. Resize images larger than 1920px
4. Maintain original files as fallback

## Performance Tips

1. **Use Next.js Image component** - Automatic optimization
2. **Specify dimensions** - Prevents layout shift
3. **Use WebP in CSS** - Already optimized for fastest loading
4. **Lazy load** - Images below fold load on demand
5. **Responsive sizes** - Next.js serves appropriate size for device

## Mobile Performance

Images are now optimized for mobile:
- Smaller file sizes (85% reduction)
- WebP format (better compression)
- Responsive sizing (appropriate for device)
- Lazy loading (loads as needed)

## CDN (Vercel)

When deployed on Vercel:
- Images served from global CDN
- Automatic optimization on-the-fly
- WebP/AVIF conversion
- Responsive image sizing
- No additional configuration needed

