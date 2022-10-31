const puppeteer = require('puppeteer');

async function auth() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://todoist.com/auth/login');
  await page.type('input[id=element-0]', 'aksac3@gmail.com');
  await page.type('input[id=element-3]', 'Password');
  await page.evaluate(() => {
    document.querySelector('input[type=submit]').click();
  });
}
auth();
