const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController  = require('./controllers/IncidentController');
const ProfileController  = require('./controllers/ProfileController');
const SessionController  = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('*', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('*', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('*', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;