import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import { profile } from '../src/data/profile.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const url = process.env.CV_URL ?? 'http://localhost:4321/cv';
const out = path.resolve(__dirname, '..', 'public', profile.cvFilename);

console.log(`Fetching: ${url}`);

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  headless: true,
});

const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle0' });

await new Promise(r => setTimeout(r, 800));

await page.pdf({
  path: out,
  format: 'A4',
  printBackground: true,
  margin: { top: '15mm', right: '18mm', bottom: '15mm', left: '18mm' },
});

await browser.close();
console.log(`PDF written → ${out}`);
