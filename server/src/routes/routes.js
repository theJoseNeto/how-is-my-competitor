const { loginInstagram, index, getMainData } = require('../controllers/igController');

const { Router } = require('express');
const routes = new Router();

routes.get('/', index);
routes.get('/login', loginInstagram);
routes.get('/main-data', getMainData);

module.exports = routes;
