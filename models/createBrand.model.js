const { Brand } = require('../database/index.js');

async function createBrandModel(newBrandName, res) {
    try {
        const brandExists = await Brand.findOne({ where: { brandName: newBrandName } });

        if(!brandExists) {
            await Brand.create({ brandName: newBrandName });
        } else {
            res.error = true;
            res.customStatus = 409;
            res.errorMessage = "Brand already exists.";
        }

    } catch {
        res.error = true;
        res.customStatus = 500;
        res.errorMessage = "Internal Server Error";
    }
}

module.exports = createBrandModel;