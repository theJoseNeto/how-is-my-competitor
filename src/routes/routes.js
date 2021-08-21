const { login, index, getMainData } = require('../controllers/instagramContrtoller');

const routes = require('express').Router();

routes.get('/', index);
routes.get('/login', login);
routes.get('/maindata', getMainData);

module.exports = routes;