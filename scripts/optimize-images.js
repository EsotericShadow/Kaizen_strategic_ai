/**
 * Image Optimization Script
 * Converts PNG/JPG images to WebP and compresses them
 * Requires: sharp (install with npm install sharp)
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_IMAGES_DIR = path.join(__dirname, '../public/images');
const QUALITY = 85; // WebP quality (0-100)
const MAX_WIDTH = 1920; // Max width for images

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Calculate dimensions
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > MAX_WIDTH) {
      height = Math.round((height * MAX_WIDTH) / width);
      width = MAX_WIDTH;
    }
    
    // Convert to WebP and compress
    await image
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
    
    return { originalSize, newSize, reduction };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function processDirectory(dir, basePath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath, relativePath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      
      // Only process PNG and JPG/JPEG files
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const outputDir = path.dirname(fullPath);
        const baseName = path.basename(entry.name, ext);
        const outputPath = path.join(outputDir, `${baseName}.webp`);
        
        // Skip if WebP already exists and is newer
        if (fs.existsSync(outputPath)) {
          const inputTime = fs.statSync(fullPath).mtime;
          const outputTime = fs.statSync(outputPath).mtime;
          if (outputTime > inputTime) {
            console.log(`⏭️  Skipping ${relativePath} (WebP already exists and is newer)`);
            continue;
          }
        }
        
        await optimizeImage(fullPath, outputPath);
      }
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`📁 Processing: ${PUBLIC_IMAGES_DIR}\n`);
  
  if (!fs.existsSync(PUBLIC_IMAGES_DIR)) {
    console.error(`❌ Directory not found: ${PUBLIC_IMAGES_DIR}`);
    process.exit(1);
  }
  
  const totalStats = {
    originalSize: 0,
    newSize: 0,
    count: 0,
  };
  
  const entries = fs.readdirSync(PUBLIC_IMAGES_DIR, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(PUBLIC_IMAGES_DIR, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath, entry.name);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const baseName = path.basename(entry.name, ext);
        const outputPath = path.join(PUBLIC_IMAGES_DIR, `${baseName}.webp`);
        const result = await optimizeImage(fullPath, outputPath);
        if (result) {
          totalStats.originalSize += result.originalSize;
          totalStats.newSize += result.newSize;
          totalStats.count++;
        }
      }
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`   Processed: ${totalStats.count} images`);
  console.log(`   Original size: ${(totalStats.originalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Optimized size: ${(totalStats.newSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Total reduction: ${((totalStats.originalSize - totalStats.newSize) / totalStats.originalSize * 100).toFixed(1)}%`);
  console.log('\n✨ Done!');
}

main().catch(console.error);

