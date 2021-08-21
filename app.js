const app = require('express')();
const routes = require('./src/routes/routes');

const port = 3000;

app.use(routes)
app.listen(port, () => {
      
   console.log(`http://localhost:${port}`)
});