import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { join } from "node:path";

const dir = "/workspace/.grok/og-stage";
const html = pathToFileURL(join(dir, "fav-qc.html")).href;
const executablePath =
  "/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell";

const browser = await chromium.launch({
  executablePath,
  args: ["--no-sandbox", "--disable-gpu", "--font-render-hinting=none"],
});

for (const size of [16, 32, 128]) {
  const page = await browser.newPage({
    viewport: { width: size, height: size },
    deviceScaleFactor: 1,
  });
  await page.goto(html, { waitUntil: "networkidle" });
  await page.screenshot({
    path: join("/workspace/.grok", `fav-qc-${size}.png`),
    type: "png",
    omitBackground: false,
  });
  await page.close();
}
await browser.close();
console.log("wrote fav-qc 16/32/128");
