import * as playwright from "playwright";

async function main() {
  // launch browser
  const browser = await playwright.chromium.launch();
  // create context
  const context = await browser.newContext();
  // create page
  const page = await context.newPage();

  // do things with the browser
  await page.goto(`https://scottspence.com`);
  await page.screenshot({ path: `output/${playwright.chromium.name()}.png` });

  // close the browser
  await browser.close();
}

main();
