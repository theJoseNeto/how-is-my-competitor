const app = require('express')();
const mongoose = require('mongoose')
const routes = require('./src/routes/routes');

const port = 3000;
app.use(routes);


app.listen(port);