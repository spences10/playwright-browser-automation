import * as playwright from "playwright";

async function main() {
  // use all available browsers
  const { chromium, firefox, webkit } = playwright;
  for (const browserType of [chromium, firefox, webkit]) {
    // launch browser
    const browser = await browserType.launch({ headless: false });
    // create context
    const context = await browser.newContext();
    // create page
    const page = await context.newPage();

    // do things with the browser
    await page.goto(`https://scottspence.com`);
    await page.screenshot({ path: `output/${browserType.name()}.png` });

    // close the browser
    await browser.close();
  }
}

main();
