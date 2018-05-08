const express = require('express');
const path = require('path');
const ejs = require('ejs');
const config = require('./config');
const Routes = require('./routes');
const logger = require('./config/logger');

const router = new Routes(express.Router()).register();
const app = express();

try {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'dist')));
  app.use('/', router);
  app.set('view engine', 'ejs');
  app.engine('.html', ejs.renderFile);
  app.set('views', path.join(__dirname, 'views'));
} catch (e) {
  logger.log('error', 'error in loading middelwares', { detail: e.toString() });
  app.close();
}

app.listen(config.port);

module.exports = app;
