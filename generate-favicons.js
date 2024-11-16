const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directory setup
const FAVICON_DIR = path.join(__dirname, 'public', 'favicon');
if (!fs.existsSync(FAVICON_DIR)){
    fs.mkdirSync(FAVICON_DIR, { recursive: true });
}

// Save the SVG content
const svgContent = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="64" fill="#18181b"/>
  <path d="M170 416L256 160L342 416H300L256 288L212 416H170Z" fill="#06b6d4"/>
  <path d="M256 160H342C364 160 382 178 382 200V276C382 298 364 316 342 316H256V160ZM298 276H340V200H298V276Z" fill="#06b6d4" fillOpacity="0.8"/>
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