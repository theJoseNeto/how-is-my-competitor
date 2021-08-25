const app = require('express')();
const routes = require('./src/routes/routes');
const port = 3333;

app.use(routes);

app.listen(port);
