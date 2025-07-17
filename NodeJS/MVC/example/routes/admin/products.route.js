const express = require('express');
const routes = express.Router();
const productsController = require('../../controllers/admin/products.controller');

routes.get('/', productsController.index);

module.exports = routes;