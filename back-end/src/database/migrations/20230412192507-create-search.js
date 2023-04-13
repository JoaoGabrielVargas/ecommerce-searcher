'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('searches', { 
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      thumbnail: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      permalink: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      } 
    });
     
  },

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable('searches');
  }
};
