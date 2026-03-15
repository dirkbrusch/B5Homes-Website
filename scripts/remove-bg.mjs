import sharp from 'sharp';
import path from 'path';

const INPUT = process.argv[2];
const OUTPUT = process.argv[3] || INPUT.replace(/\.png$/, '-transparent.png');

async function removeCheckerboard() {
  const image = sharp(INPUT).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const out = Buffer.from(data);

  for (let i = 0; i < width * height; i++) {
    const offset = i * channels;
    const r = data[offset];
    const g = data[offset + 1];
    const b = data[offset + 2];

    // Detect checkerboard pattern: light gray (#C0C0C0..#CCCCCC) and white (#F0F0F0..#FFFFFF)
    // Both are near-neutral (r ≈ g ≈ b) and bright
    const avg = (r + g + b) / 3;
    const maxDiff = Math.max(Math.abs(r - avg), Math.abs(g - avg), Math.abs(b - avg));

    // If the pixel is near-neutral gray/white (low saturation, high brightness)
    if (maxDiff < 12 && avg > 185) {
      out[offset + 3] = 0; // Make transparent
    }
  }

  await sharp(out, { raw: { width, height, channels } })
    .png()
    .toFile(OUTPUT);

  console.log(`Done: ${OUTPUT} (${width}x${height})`);
}

removeCheckerboard().catch(console.error);
