const getBrandsModel = require("../models/getBrands.model");
const getBrandsView = require("../views/getBrands.view");


async function getBrandsController(req, res) {
    await getBrandsModel(res);
    getBrandsView(res);
}


module.exports = getBrandsController;