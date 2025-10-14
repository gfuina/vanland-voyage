const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const imageExtensions = ['.jpg', '.jpeg', '.JPG', '.JPEG', '.webp'];

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const fileName = path.basename(filePath);
  const fileSize = fs.statSync(filePath).size;
  
  console.log(`\nOptimizing: ${filePath}`);
  console.log(`Original size: ${(fileSize / 1024).toFixed(2)} KB`);

  try {
    let sharpInstance = sharp(filePath);
    
    // Get metadata to preserve orientation
    const metadata = await sharpInstance.metadata();
    
    if (ext === '.webp') {
      // Optimize WebP
      await sharpInstance
        .webp({ quality: 85, effort: 6 })
        .toFile(filePath + '.tmp');
    } else {
      // Convert JPG/JPEG to optimized format
      // Keep original format but optimize
      await sharpInstance
        .jpeg({ quality: 85, progressive: true, mozjpeg: true })
        .toFile(filePath + '.tmp');
    }

    const newSize = fs.statSync(filePath + '.tmp').size;
    console.log(`New size: ${(newSize / 1024).toFixed(2)} KB`);
    console.log(`Saved: ${((fileSize - newSize) / 1024).toFixed(2)} KB (${(((fileSize - newSize) / fileSize) * 100).toFixed(1)}%)`);

    // Replace original with optimized
    fs.renameSync(filePath + '.tmp', filePath);
  } catch (error) {
    console.error(`Error optimizing ${fileName}:`, error.message);
    // Clean up tmp file if exists
    if (fs.existsSync(filePath + '.tmp')) {
      fs.unlinkSync(filePath + '.tmp');
    }
  }
}

async function findAndOptimizeImages(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await findAndOptimizeImages(filePath);
    } else if (imageExtensions.includes(path.extname(file))) {
      await optimizeImage(filePath);
    }
  }
}

console.log('🖼️  Starting image optimization...\n');
console.log('📁 Scanning:', publicDir);

findAndOptimizeImages(publicDir)
  .then(() => {
    console.log('\n✅ Image optimization complete!');
  })
  .catch((error) => {
    console.error('❌ Error:', error);
    process.exit(1);
  });

