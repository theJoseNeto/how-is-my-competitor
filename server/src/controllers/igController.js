require('dotenv').config();
const Instagram = require('../instagram/index');
const instagram = new Instagram;


exports.index = async (req, res) => {
   res.send('<h1>My competitor app</h1>')
}

exports.loginInstagram = async (req, res) => {

   await instagram.launchBrowser(false); //headless? Choice true or false.
   await instagram.createNewPage();

   await instagram.login(process.env.USER, process.env.PASS).then(() => {

      res.json({ "user logado": true });

      instagram.browser.close();
   });

}

exports.getMainData = async (require, response) => {
   await instagram.launchBrowser(false);
   await instagram.createNewPage();

   await instagram.mainProfileData('thejoseneto.io')
      .then(result => {
         instagram.browser.close();
         response.send(result)
      });

}
