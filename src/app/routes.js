var Router = require('express');

var memberController = require('../controllers/memberController');
var TheHiddenController = require('../controllers/theHiddenControler');

const routes = new Router();

routes.get('/member', memberController.getAll);
routes.get('/Teams',memberController.getTeams);
routes.get('/TheHidden', TheHiddenController.getAllHidden);
routes.get('/TheFeared', TheHiddenController.getAllFeared);
routes.get('/TheTwisted',TheHiddenController.getAllTwisted);
routes.get('/TheFormed',TheHiddenController.getAllFormed)
module.exports = routes;