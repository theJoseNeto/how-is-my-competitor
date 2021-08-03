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
         return text.innerText;
      });

      return bio;
   }

   async getAllposts(thisUser) {

      if (thisUser === undefined) {
         this.browser.close();
         console.log('Invalid user.')
         return;
      }


      await this.goToProfile(thisUser);

      const hrefs = await this.page.$$eval('article.ySN3v a', a => {
         let links = [];
         a.map(link => {
            links.push(link.href);
         });

         return links;
      });

      await this.page.waitForTimeout(5000);

      return hrefs;
   }

   async getPostsData(user, postsUrl = Array()) {
      const numberOfPosts = postsUrl.length();


   }

   async mainProfileData(competitor) {

      await this.goToProfile(competitor);
      
      await this.numberOfPosts().then(res => console.log(`${competitor} fez ${res} postagens`));

      await this.numberOfFollowers().then(res => console.log(`${competitor} tem ${res} seguidores`));

      await this.bioData().then(res => console.log(`Como ${competitor} estrutura sua bio: ${res}`));
   }
}





module.exports = Instagram;