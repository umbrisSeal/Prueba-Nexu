const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize.config');

const Brand = sequelize.define('Brand', {
    brandID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'BrandID'
    },
    brandName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        field: 'BrandName'
    }
}, {
    tableName: 'brands',
    timestamps: false
});

module.exports = Brand;