const { login, index, getMainData } = require('../controllers/igController');

const { startBrowser } = require('../middlewares/puppeteerBrowser');

const { Router } = require('express');
const routes = new Router();


routes.get('/', startBrowser, index);


routes.post('/login', startBrowser, login)

module.exports = routes;
