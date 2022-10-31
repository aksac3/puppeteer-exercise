const puppeteer = require('puppeteer');

async function uploadCvs() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://https://todoist.com/app/project/2301311976');
  const element = await page.$('input[type=file]');
  await element.uploadFile('./toDoList.csv');
}
uploadCvs();
