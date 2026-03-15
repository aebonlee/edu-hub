/**
 * OG Image Generator (1200x630)
 * DreamIT Edu Hub — Open Graph 미리보기 이미지 생성
 */
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WIDTH = 1200;
const HEIGHT = 630;

// SVG template (1200x630)
const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="50%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#7C3AED"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#60A5FA"/>
      <stop offset="100%" stop-color="#A78BFA"/>
    </linearGradient>
  </defs>

  <!-- Background gradient -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Decorative circles -->
  <circle cx="1050" cy="120" r="200" fill="rgba(255,255,255,0.03)"/>
  <circle cx="1100" cy="500" r="150" fill="rgba(255,255,255,0.03)"/>
  <circle cx="150" cy="550" r="120" fill="rgba(255,255,255,0.03)"/>

  <!-- Accent line -->
  <rect x="80" y="240" width="80" height="4" rx="2" fill="url(#accent)"/>

  <!-- DreamIT Logo text -->
  <text x="80" y="200" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" fill="rgba(255,255,255,0.6)" letter-spacing="2">
    DreamIT Biz
  </text>

  <!-- Main title -->
  <text x="80" y="310" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="900" fill="#FFFFFF" letter-spacing="-1">
    Edu Hub
  </text>

  <!-- Subtitle -->
  <text x="80" y="375" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="400" fill="rgba(255,255,255,0.8)">
    IT Education Learning Hub
  </text>

  <!-- Description -->
  <text x="80" y="440" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="400" fill="rgba(255,255,255,0.55)">
    22 Courses across 4 Categories
  </text>

  <!-- Category badges -->
  <rect x="80" y="490" width="100" height="36" rx="18" fill="rgba(255,255,255,0.12)"/>
  <text x="130" y="514" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" fill="rgba(255,255,255,0.8)" text-anchor="middle">Liberal</text>

  <rect x="196" y="490" width="120" height="36" rx="18" fill="rgba(255,255,255,0.12)"/>
  <text x="256" y="514" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" fill="rgba(255,255,255,0.8)" text-anchor="middle">Business</text>

  <rect x="332" y="490" width="120" height="36" rx="18" fill="rgba(255,255,255,0.12)"/>
  <text x="392" y="514" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" fill="rgba(255,255,255,0.8)" text-anchor="middle">Computer</text>

  <rect x="468" y="490" width="140" height="36" rx="18" fill="rgba(255,255,255,0.12)"/>
  <text x="538" y="514" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" fill="rgba(255,255,255,0.8)" text-anchor="middle">Certification</text>

  <!-- URL -->
  <text x="80" y="590" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="500" fill="rgba(255,255,255,0.4)">
    edu-hub.dreamitbiz.com
  </text>
</svg>`;

const outputPath = path.join(__dirname, '..', 'public', 'assets', 'images', 'og-default.png');

sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)
  .then(() => console.log(`OG image generated: ${outputPath}`))
  .catch((err) => console.error('Error:', err));
