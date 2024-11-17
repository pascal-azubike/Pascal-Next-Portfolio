const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

async function generateFavicons() {
  try {
    const inputPath = path.join(process.cwd(), 'public/assets/images/pascal.jpg');
    const faviconDir = path.join(process.cwd(), 'public/favicon');

    // Create favicon directory if it doesn't exist
    await fs.mkdir(faviconDir, { recursive: true });

    // Sizes for different devices
    const sizes = {
      'favicon.png': 32,  // We'll create a PNG first for favicon
      'favicon-16x16.png': 16,
      'favicon-32x32.png': 32,
      'favicon-192x192.png': 192,
      'favicon-512x512.png': 512,
      'apple-touch-icon.png': 180
    };

    for (const [filename, size] of Object.entries(sizes)) {
      const outputPath = path.join(faviconDir, filename);
      const circle = Buffer.from(
        `<svg><circle cx="${size/2}" cy="${size/2}" r="${size/2}" /></svg>`
      );

      await sharp(inputPath)
        .resize(size, size, {
          fit: 'cover',
          position: 'center'
        })
        .composite([{
          input: circle,
          blend: 'dest-in'
        }])
        .png()
        .toFile(outputPath);

      console.log(`Generated ${filename}`);
    }

    // Copy favicon.png to favicon.ico
    await fs.copyFile(
      path.join(faviconDir, 'favicon.png'),
      path.join(faviconDir, 'favicon.ico')
    );
    console.log('Generated favicon.ico');

    // Optionally remove the temporary favicon.png
    await fs.unlink(path.join(faviconDir, 'favicon.png'));

    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 