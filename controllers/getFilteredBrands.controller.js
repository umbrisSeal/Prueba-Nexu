const getFilteredBrandsModel = require("../models/getFilteredBrands.models");
const getFilteredBrandsView = require("../views/getFilteredBrands.view");

async function getFilteredBrandsController(req, res) {
    await getFilteredBrandsModel(req, res);
    getFilteredBrandsView(res);
}

module.exports = getFilteredBrandsController;