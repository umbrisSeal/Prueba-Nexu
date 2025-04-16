const fs = require('fs').promises;
const path = require('path');
const { Model, Brand, sequelize } = require('../database/index.js'); 


async function populateDatabase() {

    try {
        console.log("Trying to read json file...");
        // Read file
        const dataPath = path.join(__dirname, '..', 'models.json');
        const fileContent = await fs.readFile(dataPath, 'utf-8');
        const jsonData = JSON.parse(fileContent);
        console.log("JSON file read.");

        console.log("Obtaining brand names...");
        // Get brands
        const brandNamesSet = new Set(jsonData.map( (data) => data.brand_name));
        const brandNames = [...brandNamesSet];
        console.log("Brand names filtered.");

        console.log("Searching for known brand names...");
        const existingBrands = await Brand.findAll({ where: { brandName: brandNames} });
        const brandNameToIDs = {};
        console.log("Existing brands found.");

        console.log("Listing known brands...");
        for(const brand of existingBrands) {
            brandNameToIDs[brand.brandName] = brand.brandID;
        }
        console.log("Known brands listed.");

        console.log("Filtering unknown/new brands...");
        // Missing/New Brands
        const missingBrandNames = brandNames.filter( (brand) => !brandNameToIDs[brand]);
        console.log("Filtered missing brand names.");

        console.log("Creating new brand names...");
        if(missingBrandNames.length > 0) {
            // Create new brands
            const newBrands = await Brand.bulkCreate(
                missingBrandNames.map( (missingBrandName) => ({ brandName: missingBrandName}) )
            );
            // Add them to our directory.
            newBrands.forEach((brand) => {brandNameToIDs[brand.brandName] = brand.brandID});
        }
        console.log("New brand names created.");

        console.log("Registering new models...");
        // Insert new models
        for(const item of jsonData) {
            await Model.upsert(
                {
                    modelID: item.id,
                    modelName: item.name,
                    modelAveragePrice: item.average_price,
                    brandID: brandNameToIDs[item.brand_name],
                }
            );
        }
        console.log("New models registered.");
        
        console.log("SUCCESS!");

        return true;
    } catch {
        console.log("FAILED.");
        return false;
    }
}

module.exports = populateDatabase;