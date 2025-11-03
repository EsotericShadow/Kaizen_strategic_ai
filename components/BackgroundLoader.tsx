'use client';

import { useEffect } from 'react';

/**
 * Preloads background images for better mobile performance
 * Forces images to load immediately to prevent loading delays
 */
export default function BackgroundLoader() {
  useEffect(() => {
    // Preload both mobile and desktop versions
    // This ensures images are in browser cache before CSS tries to use them
    
    // Mobile WebP
    const mobileWebP = new Image();
    mobileWebP.src = '/images/brand/background_abstract_dark_overlay-mobile.webp';
    
    // Mobile PNG fallback
    const mobilePNG = new Image();
    mobilePNG.src = '/images/brand/background_abstract_dark_overlay-mobile.png';
    
    // Desktop WebP
    const desktopWebP = new Image();
    desktopWebP.src = '/images/brand/background_abstract_dark_overlay.webp';
    
    // Handle errors and log for debugging
    const handleError = (type: string) => {
      console.warn(`Background image failed to load: ${type}`);
    };
    
    mobileWebP.onerror = () => handleError('mobile-webp');
    mobilePNG.onerror = () => handleError('mobile-png');
    desktopWebP.onerror = () => handleError('desktop-webp');
    
    // Force immediate load by accessing image properties
    mobileWebP.onload = () => {
      console.log('Mobile WebP background loaded');
    };
    mobilePNG.onload = () => {
      console.log('Mobile PNG background loaded');
    };
    desktopWebP.onload = () => {
      console.log('Desktop WebP background loaded');
    };
  }, []);

  return null; // This component doesn't render anything
}

