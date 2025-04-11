'use strict';
const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Cartitems',{
         id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
         cartId:{
           type:DataTypes.STRING,
           allowNull:false
         },
         productId:{
           type:DataTypes.STRING,
           allowNull:false
         }
       })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Cartitems')
  }
};
