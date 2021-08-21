require('dotenv').config();

const Instagram = require('../instagram/index');
const instagram = new Instagram();



exports.index = async (request, response) => {
   await instagram.launchBrowser(true)
   await instagram.createNewPage().then(() => {
      response.send('Browser Running!');
   })


}

exports.login = async (request, response) => {

   const result = await instagram.login(
      process.env.USER,
      process.env.PASS
   );

   response.send(result);
}


exports.getMainData = async (request, response) => {
   try {
      await instagram.mainProfileData('thejoseneto.io').then(result => {
         response.json(result);
      })

   } catch (e) {
      console.log(e);
   }

}