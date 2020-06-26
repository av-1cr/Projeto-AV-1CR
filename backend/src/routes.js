const express = require('express');
const routes = express.Router();
const SessionController = require('./controllers/SessionController');
const UsuarioController = require('./controllers/UsuarioController');

routes.post('/sessions', SessionController.Create);

routes.get('/usuario/GetForRgpm/:rgpm', UsuarioController.GetForRgpm);

module.exports = routes;