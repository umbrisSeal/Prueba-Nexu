const { fn, col } = require('sequelize');
const { Brand, Model } = require('../database/index.js');

async function getBrandsModel(res) {
    try {
        const allBrands = await Brand.findAll({
            attributes: [
                //{"id": 5, "nombre": "Buick", "average_price": 290371},
                ['brandID', 'id'],
                ['brandName', 'nombre'],
                [fn('ROUND', fn('COALESCE', fn('AVG', col('models.modelAveragePrice')), 0)), 'average_price'],
            ],
            include: [
                {
                    model: Model,
                    attributes: [],
                    required: false, // LEFT JOIN instead INNER JOIN.
                }
            ],
            group: ['Brand.brandID'],
            raw: true, // Numbers are strings.
            order: [['brandID', 'ASC']],
        });

        res.data = allBrands;
    } catch {

        res.send("Database query error.");
        res.error = true;
    }

}

module.exports = getBrandsModel;