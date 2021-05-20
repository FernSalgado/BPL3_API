var Router = require('express');

var memberController = require('../controllers/memberController');
var TheHiddenController = require('../controllers/theHiddenControler');

const routes = new Router();

routes.get('/member', memberController.getAll);
routes.get('/Teams',memberController.getTeams);
routes.get('/Team1', TheHiddenController.getTeam1Items);
routes.get('/Team2', TheHiddenController.getTeam2Items);
routes.get('/Team3', TheHiddenController.getTeam3Items);
module.exports = routes;