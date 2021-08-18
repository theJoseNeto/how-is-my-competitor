const puppeteer = require('puppeteer');

class Browser {

   constructor() {
      this.browser = null;
      this.page = null;
   }

   async launchBrowser() {
      this.browser = await puppeteer.launch({
         headless: true,
         timeout: 0,
         args: ['--start-maximized']
      });

   }

   async configPage(page) {
      await page.setViewport({ width: 1200, height: 640 });
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
      await page.setDefaultNavigationTimeout(0);
   }
   async createNewPage() {
      this.page = await this.browser.newPage();
      await this.configPage(this.page);
   }

   async navigateTo(url) {
      await this.page.goto(url);
      await this.page.waitForTimeout(5000);

   }



}


module.exports = Browser;