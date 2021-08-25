const Browser = require("../browser");
const path = require('path');
const fs = require('fs').promises;

class Instagram extends Browser {

   async login(user, pass) {


      try {

         await this.navigateTo('https://www.instagram.com/accounts/login/')
         await this.page.type('input[type="text"]', user);
         await this.page.type('input[type="password"]', pass);
         await this.page.click('button[type="submit"]');
         await this.page.waitForTimeout(8000);

      } catch (error) {

         console.log('erro ao tentar fazer login', error)
      }
   }

   async cookiesSession() {
      const cookiesString = await fs.readFile('../cookies/instagramSession.json');
      const cookies = JSON.parse(cookiesString);
      await this.page.setCookie(...cookies);
   }

   async goToProfile(username) {
      await this.page.goto(`https://www.instagram.com/${username}`);
      await this.page.waitForTimeout(5000);
   }

   async numberOfPosts() {

      const data = await this.page.evaluate(() => {

         const data = document.querySelectorAll('ul.k9GMp span.g47SY');
         const posts = data[0].innerHTML;
         return posts;

      });

      return data;
   }

   async numberOfFollowers() {

      const data = await this.page.evaluate(() => {

         const data = document.querySelectorAll('ul.k9GMp span.g47SY');
         const followers = data[1].title;
         return followers;

      });

      return data;
   }

   async bioData() {
      const bio = await this.page.evaluate(() => {
         const text = document.querySelector('div.-vDIg span');
         if (text === null || text === undefined || text === false) return "Não há nada na bio";
         return text.innerHTML;
      });

      return bio;
   }


   async mainProfileData(competitor) {
      let data = {};

      await this.goToProfile(competitor);

      await this.numberOfPosts().then(res => data.posts = res);

      await this.numberOfFollowers().then(res => data.followers = res);

      await this.bioData().then(res => data.bio = res);

      return data;

   }


   async getDataPosts() {
      await this.page.evaluate(() => {
         window.scrollTo(100000)
      })
   }


}

module.exports = Instagram;

// numero de likes
//selector da div = Nm9Fw -> class
//selector do a = zV_Nj >span -> class


// data: 
//selctor  da div = k_Q0X I0_K8  NnvRN -> class
//selector da tag time = _1o9PC Nzb55 -> class

