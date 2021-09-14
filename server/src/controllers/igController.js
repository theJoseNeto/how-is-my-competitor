require('dotenv').config();
const Instagram = require('../modules/instagram');
const ig = new Instagram;

exports.loginInstagram = async (req, res) => {
   try {
      await ig.launchBrowser();
      await ig.createNewPage();

      await ig.login(process.env.USER, process.env.PASS).then(() => {

         res.json({ 'logged': true });

         ig.browser.close();
      });
   } catch (e) {
      console.log('Erro no controller');
      ig.browser.close();
   }

}

exports.getMainData = async (req, res) => {

   try {

      await ig.launchBrowser();
      await ig.createNewPage()

         .then(async () => {

            const username = req.params.user;

            await ig.mainProfileData(username).then(async result => {
               await res.send(result);
               await ig.browser.close().then(() => {
                  console.log('scrapper encerrado');
               });
            }
            );

         })


   } catch (e) {
      console.log(e);
   }

}

exports.getPostsData = async (req, res) => {
   const user = req.params.user;
   await ig.launchBrowser();

   await ig.createNewPage().then(async () => {

      await ig.analysePostData(user).then(result => {
         res.json({ result });
      })

      await ig.browser.close().then(()=> console.log('scrapper end.'))

   })
}
