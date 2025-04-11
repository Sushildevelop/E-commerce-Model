'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('Products',{
    id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
    productname:{
      type:DataTypes.STRING,
      allowNull:false
    },
    price:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    stock_quantity:{
      type:DataTypes.STRING,
      allowNull:false
    },
    image:{
        type:DataTypes.STRING
    },
    userId:{
      type:DataTypes.INTEGER,
      allowNull:false
    }


   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('Products')
  }
};
