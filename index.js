// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require("puppeteer-extra");

// add stealth plugin and use defaults (all evasion techniques)
const pluginStealth = require("puppeteer-extra-plugin-stealth");
puppeteer.use(pluginStealth())

let browser;
const goTo = async (url) => {
  browser = await puppeteer.launch({ headless: false, ignoreDefaultArgs: ['--enable-automation'] });
  const page = await browser.newPage();
  await page.goto(url)
  
  return page;
};

const closeBrowser = async () => {
  if (!browser) {
    throw new Error('Attempted to close browser, but browser has not been launched. Did you call goTo(URL) yet?');
  }

  await browser.close();
};

module.exports = {
  goTo,
  closeBrowser
};
