const server = require('express')();
const { json } = require('express');

const port = 3333;

const cors = require('cors');
const routes = require('./src/routes/routes');

server.use(json());

server.use(cors());
server.use(routes);

server.listen(port,);
