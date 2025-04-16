const { Model } = require('../database/index.js');


async function editModelModel(req, res) {
    if (res.error) return;
    const { average_price } = req.body;
    const modelID = req.params.id;

    try {
        const modelExists = await Model.findOne({ where: { modelID: modelID }});

        if(modelExists) {
            // Update model
            modelExists.modelAveragePrice = average_price;
            await modelExists.save();

        } else {
            res.error = true;
            res.customStatus = 404;
            res.errorMessage = "Provided ID does not match any model in the database.";
        }

    } catch {
        res.error = true;
        res.customStatus = 500;
        res.errorMessage = "Internal Server Error";
    }
}

module.exports = editModelModel;