const puppeteer = require('puppeteer');
const fs = require('fs/promises');

async function start() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://randomtodolistgenerator.herokuapp.com/library');

  const taskTitle = await page.evaluate(() => Array.from(document.querySelectorAll('#section-to-print > div.tasks-card-container.row > div > div > div > div.flexbox.task-title')).map((x) => x.textContent));
  await fs.writeFile('taskTitle.txt', taskTitle.join('\r\n'));
  const taskDesc = await page.evaluate(() => Array.from(document.querySelectorAll('#section-to-print > div.tasks-card-container.row > div > div > div > p')).map((x) => x.textContent));
  await fs.writeFile('taskDesc.txt', taskDesc.join('\r\n'));
  const taskType = await page.evaluate(() => Array.from(document.querySelectorAll('#section-to-print > div.tasks-card-container.row > div > div > div > div > div > span')).map((x) => x.textContent));
  await fs.writeFile('taskType.txt', taskType.join('\r\n'));
  await browser.close();
}
start();
