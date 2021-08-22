require('dotenv').config();

const Instagram = require('../instagram/index');
const instagram = new Instagram();


exports.index = async (request, response) => {
   response.send('<h1>Running...</h1>');
}



