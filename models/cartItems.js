'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cartitems extends Model {
    static associate(models) {
    //   Carts.belongsTo(models.Users, { foreignKey: 'userId' });
    //   Carts.belongsTo(models.Products, { foreignKey: 'productId' });
    //   Carts.hasMany(models.Orders,{foreignKey:'cart_id'})
    Cartitems.belongsTo(models.Carts,{foreignKey:"cartId"})
    Cartitems.belongsTo(models.Users,{foreignKey:"cartId"})
    Cartitems.belongsTo(models.Products,{foreignKey:"productId"})
    }
  }
  Cartitems.init({
    cartId: DataTypes.STRING,
    productId: DataTypes.STRING
    
  }, { sequelize, modelName: 'Cartitems',timestamps:false });
  return Cartitems;
};