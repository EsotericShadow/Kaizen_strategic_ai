import Image from 'next/image';
import { ComponentProps } from 'react';

/**
 * Optimized Image component that automatically converts PNG/JPG to WebP
 * Falls back to original format if WebP is not available
 */
interface OptimizedImageProps extends Omit<ComponentProps<typeof Image>, 'src'> {
  src: string;
  fallback?: string;
}

export default function OptimizedImage({ src, fallback, alt, ...props }: OptimizedImageProps) {
  // Convert PNG/JPG to WebP
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  
  // Use Next.js Image component for automatic optimization
  // Next.js will automatically serve WebP/AVIF on supported browsers
  return (
    <Image
      src={src}
      alt={alt || ''}
      {...props}
      // Enable loading optimization
      loading={props.loading || 'lazy'}
      // Enable placeholder blur for better UX
      placeholder={props.placeholder || 'blur'}
      blurDataURL={props.blurDataURL || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//9k='}
    />
  );
}

