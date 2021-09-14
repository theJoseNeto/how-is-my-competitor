const puppeteer = require('puppeteer');
class Browser {

   constructor() {
      this.browser = null;
      this.page = null;
   }

   async launchBrowser() {
      try {

         this.browser =
            await puppeteer.launch(
               {
                  headless: true,
                  timeout: 0,
                  args: ['--start-maximized']
               }
            )
         console.log('scrapper started!');
      } catch (error) {
         console.log(error);
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
      try {

         this.page = await this.browser.newPage();
         await this.configPage(this.page);

      } catch (error) {

         console.error(error);

      }
   }

   async navigateTo(url) {
      await this.page.goto(url);
      await this.page.waitForTimeout(10000);

   }




}


module.exports = Browser;