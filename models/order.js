'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      Orders.belongsTo(models.Carts, { foreignKey: 'cart_id' });
      Orders.belongsTo(models.Orders,{foreignKey:"userId"})
    }
  }
  Orders.init({
    cart_id: DataTypes.INTEGER,
    userId:DataTypes.INTEGER,
    total_amount: DataTypes.INTEGER,
    order_date: {
     type: DataTypes.DATE,
     defaultValue: DataTypes.NOW
    },
    shipping_address:DataTypes.TEXT
  }, { sequelize, modelName: 'Orders' ,timestamps:false});
  return Orders;
};