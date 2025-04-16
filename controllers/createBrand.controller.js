const createBrandModel = require("../models/createBrand.model.js");
const createBrandView = require("../views/createBrand.view.js");

async function createBrandController(req, res) {
    const { name } = req.body;

    if(name) {
        await createBrandModel(name, res);
    } else {
        res.error = true;
        res.customStatus = 400;
        res.errorMessage = "Request body must include field 'name'.";
    }

    createBrandView(res);
}

module.exports = createBrandController;