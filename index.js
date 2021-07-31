const Instagram = require('./src/instagram');
const instagram = new Instagram();
(async () => {
   await instagram.launchBrowser();
   await instagram.createNewPage();
   await instagram.navigateTo('https://www.instagram.com/accounts/login/');
   await instagram.login();
})();
