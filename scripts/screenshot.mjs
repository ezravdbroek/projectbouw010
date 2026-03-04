import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const screenshotDir = resolve(__dirname, '..', 'screenshots');
mkdirSync(screenshotDir, { recursive: true });

const BASE_URL = process.argv[2] || 'http://localhost:4321';
const rawPages = process.argv[3] || 'index';
const pages = rawPages.split(',').map(p => {
  // Normalize: treat "index" or "/" or Windows-mangled paths as "/"
  p = p.trim();
  if (p === 'index' || p === '' || p.includes('Program Files')) return '/';
  return p.startsWith('/') ? p : `/${p}`;
});

const viewports = [
  { name: 'desktop', width: 1920, height: 1080 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 },
];

const browser = await chromium.launch();

for (const route of pages) {
  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();

    const url = `${BASE_URL}${route}`;
    const slug = route === '/' ? 'index' : route.replace(/^\/|\/$/g, '').replace(/\//g, '-');
    const filename = `${slug}-${vp.name}.png`;

    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      // Force all fade-in elements visible and scroll to top for screenshot
      await page.evaluate(async () => {
        document.querySelectorAll('.fade-in').forEach(el => {
          el.classList.add('is-visible');
        });
        // Trigger counter animations
        document.querySelectorAll('[data-count]').forEach(el => {
          el.textContent = el.getAttribute('data-count');
        });
        window.scrollTo(0, 0);
        await new Promise(r => setTimeout(r, 300));
      });
      await page.screenshot({ path: resolve(screenshotDir, filename), fullPage: true });
      console.log(`OK  ${filename}`);
    } catch (err) {
      console.error(`FAIL  ${filename}: ${err.message}`);
    }

    await context.close();
  }
}

await browser.close();
console.log(`\nScreenshots saved to: ${screenshotDir}`);
