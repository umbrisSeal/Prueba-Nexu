const createModelModel = require("../models/createModel.model");
const createModelView = require("../views/createModel.view");

async function createModelController(req, res) {
    const { name, average_price } = req.body;

    if(!name) {
        res.customStatus = 400;
        res.error = true;
        res.errorMessage = "Request body must include field 'name'."
    }
    if(name && average_price && average_price <= 100000) {
        res.customStatus = 400;
        res.error = true;
        res.errorMessage = "Average price must be higher than 100,000.";
    }

    await createModelModel(req, res);
    createModelView(res);
}

module.exports = createModelController;

// {"name": "Prius", "average_price": 406400}