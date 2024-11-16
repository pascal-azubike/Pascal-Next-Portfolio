const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directory setup
const FAVICON_DIR = path.join(__dirname, 'public', 'favicon');
if (!fs.existsSync(FAVICON_DIR)) {
    fs.mkdirSync(FAVICON_DIR, { recursive: true });
}

// SVG content with exact matching design
const svgContent = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="512" height="512" rx="64" fill="#18181b"/>
  
  <!-- Letter A - Complete capital A -->
  <path d="
    M180 416L256 160L332 416H300L256 256L212 416H180Z
    M212 320H300L288 352H224L212 320Z" 
    fill="#06b6d4"/>
  
  <!-- Letter P - Complete capital P -->
  <path d="
    M332 160V416H364V320H400C440 320 472 288 472 240C472 192 440 160 400 160H332ZM364 192H400C422 192 440 210 440 240C440 270 422 288 400 288H364V192Z"
    fill="#06b6d4"/>
</svg>`;

fs.writeFileSync(path.join(FAVICON_DIR, 'favicon.svg'), svgContent);

// Generate PNG files
async function generateFavicons() {
    const sizes = [16, 32, 180, 192, 512];
    const names = [
        'favicon-16x16.png',
        'favicon-32x32.png',
        'apple-touch-icon.png',
        'android-chrome-192x192.png',
        'android-chrome-512x512.png'
    ];

    for (let i = 0; i < sizes.length; i++) {
        await sharp(Buffer.from(svgContent))
            .resize(sizes[i], sizes[i])
            .toFile(path.join(FAVICON_DIR, names[i]));
    }

    // Copy 32x32 as favicon.ico
    fs.copyFileSync(
        path.join(FAVICON_DIR, 'favicon-32x32.png'),
        path.join(FAVICON_DIR, 'favicon.ico')
    );
}

generateFavicons().catch(console.error);