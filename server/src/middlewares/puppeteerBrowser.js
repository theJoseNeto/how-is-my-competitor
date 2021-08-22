const Instagram = require("../instagram");
const instagram = new Instagram();

exports.startBrowser = async (req, res, next) => {
   if (instagram.browser === null) {
      await instagram.launchBrowser(false);
      await instagram.createNewPage();
   }

   next();
}
