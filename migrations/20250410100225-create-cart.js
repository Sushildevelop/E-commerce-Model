'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Carts',{
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      userId:{
        type:DataTypes.STRING,
        allowNull:false
      },
      productId:{
        type:DataTypes.STRING
      }
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('Carts')
  }
};
