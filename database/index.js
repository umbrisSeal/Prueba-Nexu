const sequelize = require('./sequelize.config.js');

const Model = require('./models/model.model.js');
const Brand = require('./models/brand.model.js');


Brand.hasMany(Model, { foreignKey: 'brandID' });
Model.belongsTo(Brand, { foreignKey: 'brandID' });


module.exports = {
    sequelize,
    Model,
    Brand,
};