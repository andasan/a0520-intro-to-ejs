//imports
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/main-routes');

//setups
const app = express();
app.set('view engine', 'ejs');

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use(routes);

//server
app.listen(3000);