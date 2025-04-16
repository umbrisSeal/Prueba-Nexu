const editModelModel = require("../models/editModel.model.js");
const editModelView = require("../views/editModel.view.js");

async function editModelController(req, res) {
    const { average_price } = req.body;
    const modelID = req.params.id;

    if(!average_price) {
        res.error = true;
        res.customStatus = 400;
        res.errorMessage = "Request body must contain field 'average_price'.";
    } else if(average_price < 100000) {
        res.error = true;
        res.customStatus = 400;
        res.errorMessage = "The value of 'average_price' must be higher than 100,000.";
    }
    if(!modelID) {
        res.error = true;
        res.customStatus = 400;
        res.errorMessage = "URL must provide a valid model ID.";
    }

    await editModelModel(req, res);
    editModelView(res);

}

module.exports = editModelController;