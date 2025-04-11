'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    static associate(models) {
      Carts.belongsTo(models.Users, { foreignKey: 'userId' });
      Carts.belongsTo(models.Products, { foreignKey: 'productId' });
      Carts.hasMany(models.Orders,{foreignKey:'cart_id'})
      Carts.hasMany(models.Cartitems,{foreignKey:"cartId"})
    }
  }
  Carts.init({
    userId: DataTypes.STRING,
    productId: DataTypes.STRING
    
  }, { sequelize, modelName: 'Carts',timestamps:false });
  return Carts;
};