const { loginInstagram, getMainData, getPostsData } = require('../controllers/igController');
const loginController = require('../controllers/loginController');
const { Router } = require('express');
const route = new Router();


route.get('/', loginController.index)

route.get('/mainData/:user', getMainData);
route.get('/postData/:user', getPostsData);
route.get('/login', loginInstagram);
module.exports = route;
