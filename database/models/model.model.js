const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize.config');

const Model = sequelize.define('Model', {
    modelID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'ModelID'
    },
    modelName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'ModelName'
    },
    modelAveragePrice: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'ModelAveragePrice',
    },
    brandID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'BrandID',
        references: {
            model: 'brands',
            key: 'BrandID'
        }
    }
}, {
    tableName: 'models',
    timestamps: false,
});

module.exports = Model;