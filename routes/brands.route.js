const express = require('express');
const brands = express.Router();

const getBrandsController = require('../controllers/getBrands.controller.js');
const createBrandController = require('../controllers/createBrand.controller.js');
const getFilteredBrandsController = require('../controllers/getFilteredBrands.controller.js');
const createModelController = require('../controllers/createModel.controller.js');

brands.get('/', getBrandsController);
brands.post('/', createBrandController);
brands.get('/:id/models', getFilteredBrandsController);
brands.post('/:id/models', createModelController);


module.exports = brands;