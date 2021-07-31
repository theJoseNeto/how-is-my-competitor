const Browser = require("../browser");

class Instagram extends Browser {

   async login(user, pass) {
      await this.page.type('input[type="text"]', user);
      await this.page.type('input[type="password"]', pass);

      await this.page.click('button[type="submit"]');
      await this.page.waitForTimeout(8000);
   }
   async goToProfile(username) {
      await this.page.goto(`https://www.instagram.com/${username}`);
      await this.page.waitForTimeout(5000);
   }



}






module.exports = Instagram;