import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { join } from "node:path";

const dir = "/workspace/.grok/og-stage";
const html = pathToFileURL(join(dir, "banner.html")).href;
const out = join(dir, "banner-raw.png");
const executablePath =
  "/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell";

const browser = await chromium.launch({
  executablePath,
  args: ["--no-sandbox", "--disable-gpu", "--font-render-hinting=none"],
});
const page = await browser.newPage({
  viewport: { width: 2400, height: 528 },
  deviceScaleFactor: 1,
});
await page.goto(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(200);
await page.screenshot({ path: out, type: "png", omitBackground: false });
await browser.close();
console.log("wrote", out);
