'use strict';
const { Model } = require('sequelize');
const { sequelize } = require('../config/dbconnect');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Products, { foreignKey: 'userId' });
      Users.hasMany(models.Carts,{foreignKey:'userId'})
      Users.hasMany(models.Orders,{foreignKey:"userId"})
    }
  }
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image:DataTypes.STRING,
  }, { sequelize, modelName: 'Users' });
  return Users;
};
