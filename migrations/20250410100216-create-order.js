'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Orders',{
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      cart_id:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      userId:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      total_amount:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      order_date:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        
       
      },
      shipping_address:{
        type:DataTypes.TEXT,
        allowNull:false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders')
  }
  }

