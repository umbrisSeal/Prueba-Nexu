const { Op } = require('sequelize');
const { Model } = require('../database/index.js');


async function getFilteredModelsModel(req, res) {
    const lower = req.query.lower ? parseInt(req.query.lower) : undefined;
    const greater = req.query.greater ? parseInt(req.query.greater) : undefined;

    const whereCondition = {};

    if(greater) {
        whereCondition.modelAveragePrice = { [Op.between]: [lower ?? 0, greater] };
    } else {
        whereCondition.modelAveragePrice = { [Op.gte]: lower ?? 0 };
    }

    try {
        const filteredModels = await Model.findAll({
            attributes: [
                // {"id": 3, "name": "RDX", "average_price": 395753}
                ['modelID', 'id'],
                ['modelName', 'name'],
                ['modelAveragePrice', 'average_price']
            ],
            where: whereCondition,
        });

        res.data = filteredModels;

    } catch {
        res.error = true;
        res.customStatus = 500;
        res.errorMessage = "Internal Server Error"
    }
}

module.exports = getFilteredModelsModel;