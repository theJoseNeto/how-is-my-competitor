const puppeteer = require('puppeteer');
class Browser {

   constructor() {
      this.browser = null;
      this.page = null;
   }
   
   async launchBrowser(hdless = Boolean) {
      try {

         this.browser =
            await puppeteer.launch(
               {
                  headless: hdless,
                  timeout: 0,
                  args: ['--start-maximized']
               }
            )

         if (this.browser.isConnected()) console.log('ON');

      } catch (error) {
         console.log(error);
         return false;
      }

   }
   async configPage(page) {
      try {
         await page.setViewport({ width: 1200, height: 700 });
         await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
         await page.setDefaultNavigationTimeout(0);

      } catch (error) {
         console.log('Não foi possível aplicar as configurações da página : ' + error)
      }
   }



   async createNewPage() {
      this.page = await this.browser.newPage();
      await this.configPage(this.page);

   }

   async navigateTo(url) {
      await this.page.goto(url);
      await this.page.waitForTimeout(10000);

   }




}


module.exports = Browser;