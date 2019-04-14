const express = require('express');
const routes = require('./routes');
const config = require('./config');
const middlewares = require('./middleware');

const app = express();

middlewares(app);

app.use('/', routes);

const server = app.listen(config.port);

module.exports = server;