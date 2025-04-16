const express = require('express');
const models = express.Router();

const getFilteredModelsController = require('../controllers/getFilteredModels.controller.js');
const editModelController = require('../controllers/editModel.controller.js');


models.get('/', getFilteredModelsController);
models.put('/:id', editModelController);


module.exports = models;