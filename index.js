require('dotenv').config();
const competitor = 'thejoseneto.io';

const Instagram = require('./src/instagram');
const instagram = new Instagram();

const user = process.env.USER;
const pass = process.env.PASS;

(async () => {
   try {
      await instagram.launchBrowser();
      await instagram.createNewPage();

      await instagram.mainProfileData(competitor);
      // await instagram.browser.close();

   } catch (e) {
      console.log(e)
      await instagram.browser.close();
   }
})();
