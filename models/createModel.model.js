const { Brand, Model } = require('../database/index.js');

async function createModelModel(req, res) {
    if(res.error) return;
    const { name, average_price } = req.body;
    const brandID = req.params.id;

    try {
        const brandExists = await Brand.findOne({ where: { brandID: brandID}} );
        const modelNameExists = await Model.findOne({ where: { modelName: name }});

        if(modelNameExists) {
            res.error = true;
            res.customStatus = 409;
            res.errorMessage = "Specified name for the new model already exists.";
            return;
        }
        if(brandExists) {
            // Add new model.
            await Model.create({
                modelName: name,
                modelAveragePrice: average_price ?? 0,
                brandID: brandID
            });

        } else {
            res.error = true;
            res.customStatus = 404;
            res.errorMessage = "Specified ID in URL does not match any existing brand ID.";
        }


    } catch {
        res.error = true;
        res.customStatus = 500;
        res.errorMessage = "Internal Server Error";
    }
}

module.exports = createModelModel;