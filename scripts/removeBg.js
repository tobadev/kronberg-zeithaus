import fs from 'fs';
import { removeBackground } from '@imgly/background-removal';

async function removeBg(inputPath, outputPath) {
  console.log(`Processing: ${inputPath}`);

  try {
    const imageBuffer = fs.readFileSync(inputPath);
    const blob = await removeBackground(imageBuffer);
    const buffer = Buffer.from(await blob.arrayBuffer());

    fs.writeFileSync(outputPath, buffer);
    console.log(`✓ Saved: ${outputPath}`);
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
  }
}

async function main() {
  const images = [
    {
      input: 'public/images/watches/lange-datograph/1.jpg',
      output: 'public/images/watches/lange-datograph/1.png'
    },
    {
      input: 'public/images/watches/lange-datograph/2.jpg',
      output: 'public/images/watches/lange-datograph/2.png'
    },
    {
      input: 'public/images/watches/lange-qp/1.jpg',
      output: 'public/images/watches/lange-qp/1.png'
    },
    {
      input: 'public/images/watches/lange-qp/2.jpg',
      output: 'public/images/watches/lange-qp/2.png'
    },
    {
      input: 'public/images/watches/lange-qp/3.jpg',
      output: 'public/images/watches/lange-qp/3.png'
    }
  ];

  for (const img of images) {
    await removeBg(img.input, img.output);
  }

  console.log('\n✓ All images processed!');
}

main();
