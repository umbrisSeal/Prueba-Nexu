const { Model } = require('../database/index.js');

async function getFilteredBrandsModel(req, res) {
    try {
        const modelsByBrands = await Model.findAll({
            where: { brandID: req.params.id },
            // {"id": 1264, "name": "NSX", "average_price": 3818225},
            attributes: [
                ['modelID', 'id'],
                ['modelName', 'name'],
                ['modelAveragePrice', 'average_price'],
            ],
            raw: true,
        });

        res.data = modelsByBrands;

    } catch {
        res.error = true;
        res.customStatus = 500;
        res.errorMessage = "Internal Server Error";
    }
}

module.exports = getFilteredBrandsModel;