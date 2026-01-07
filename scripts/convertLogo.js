const sharp = require('sharp');
const fs = require('fs');

async function convertSvgToPng() {
  try {
    const svgBuffer = fs.readFileSync('public/logo.svg');

    await sharp(svgBuffer)
      .png()
      .toFile('public/logo.png');

    console.log('✓ Successfully converted logo.svg to logo.png');
  } catch (error) {
    console.error('Error converting SVG to PNG:', error);
  }
}

convertSvgToPng();
