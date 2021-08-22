const { login, index, getMainData } = require('../controllers/instagramContrtoller');

const { startBrowser } = require('../middlewares/puppeteerBrowser');

const routes = require('express').Router();

routes.get('/', startBrowser, index);




module.exports = routes;