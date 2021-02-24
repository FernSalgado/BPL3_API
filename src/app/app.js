var express = require('express');
var path = require('path');
var app = require('./routes');
var cors = require('cors')
require('../database');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(app);
  }
}

module.exports = new App().server;