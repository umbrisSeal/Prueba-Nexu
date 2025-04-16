const getFilteredModelsModel = require("../models/getFilteredModels.model");
const getFilteredModelView = require("../views/getFilteredModels.view");


async function getFilteredModelsController(req, res) {

    await getFilteredModelsModel(req, res);
    getFilteredModelView(res);
    
}

module.exports = getFilteredModelsController;