const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://maxpetz.com/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 3000));

  const images = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return imgs.map(img => img.src);
  });

  fs.writeFileSync('main_images.txt', images.join('\n'));
  console.log('Done writing main images');
  await browser.close();
})();
