const Browser = require("./browser");
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
         const followers = data[1].innerHTML;
         return followers;

      });

      return data;
   }

   async mainProfileData(competitor) {

      let data = { username: competitor };

      await this.goToProfile(competitor);
      await this.numberOfPosts().then(res => data.posts = res);
      await this.numberOfFollowers().then(res => data.followers = res);
      return data;

   }

   async getAllLinks(competitor) {

      await this.goToProfile(competitor);

      const data = await this.page.evaluate(() => {
         let allLinks = [];

         const posts = document.querySelectorAll('article a');

         posts.forEach(link => allLinks.push(link.href));

         return allLinks;
      })

      return data;


   }

   async analysePostData(competitor) {

      const links = await this.getAllLinks(competitor);

      return links;



   }

}

module.exports = Instagram;

// numero de likes
//selector da div = Nm9Fw -> class
//selector do a = zV_Nj >span -> class


// data: 
//selctor  da div = k_Q0X I0_K8  NnvRN -> class
//selector da tag time = _1o9PC Nzb55 -> class

//||