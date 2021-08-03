const puppeteer = require('puppeteer');

class Browser {

   constructor() {
      this.browser = null;
      this.page = null;
   }
   async launchBrowser() {
      this.browser = await puppeteer.launch({
         headless: false,
         timeout: 0,
         args: ['--start-maximized']
      });

   }
   async createNewPage() {
      this.page = await this.browser.newPage();
      await this.page.setViewport({ width: 1200, height: 640 });
   }

   async navigateTo(url) {
      await this.page.goto(url);
      await this.page.waitForTimeout(5000);

   }



}


module.exports = Browser;