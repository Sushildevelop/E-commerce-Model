'use strict';
const { Model } = require('sequelize');
const { sequelize } = require('../config/dbconnect');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
        Products.belongsTo(models.Users, { foreignKey: 'userId' });
        Products.hasMany(models.Carts,{foreignKey:'productId'})
      }
  }
  Products.init({
    productname: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description:DataTypes.STRING,
    stock_quantity:DataTypes.STRING,
    image:DataTypes.STRING,
    userId:DataTypes.INTEGER
   
  }, { sequelize, modelName: 'Products' ,timestamps: false});
  return Products;
};