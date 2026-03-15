import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, relative } from 'path';

const IMAGES_DIR = 'public/images';
const QUALITY = 80;
const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getFiles(fullPath));
    } else if (EXTENSIONS.includes(extname(entry.name).toLowerCase())) {
      // Skip logo files (keep as PNG for transparency)
      if (entry.name.startsWith('logo')) continue;
      files.push(fullPath);
    }
  }
  return files;
}

async function convert() {
  const files = await getFiles(IMAGES_DIR);
  let totalSaved = 0;

  for (const file of files) {
    const webpPath = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const originalStats = await stat(file);

    await sharp(file)
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const webpStats = await stat(webpPath);
    const saved = originalStats.size - webpStats.size;
    const pct = ((saved / originalStats.size) * 100).toFixed(1);
    totalSaved += saved;

    console.log(`✅ ${relative('.', file)} → .webp (${pct}% smaller, ${(webpStats.size / 1024).toFixed(0)}KB)`);
  }

  console.log(`\n📊 Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📁 ${files.length} images converted`);
}

convert().catch(console.error);
