const puppeteer = require('puppeteer');

class Browser {

   constructor() {
      this.browser = null;
      this.page = null;
   }
   async launchBrowser() {
      this.browser = await puppeteer.launch({ headless: false, timeout: 0 });
   }
   async createNewPage() {
      this.page = await this.browser.newPage();
   }

   async navigateTo(url) {
      await this.page.goto(url);
      await this.page.waitForTimeout(5000);

   }

}


module.exports = Browser;