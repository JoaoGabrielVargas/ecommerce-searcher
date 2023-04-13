'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('searches', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
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
    });
     
  },

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable('searches');
  }
};
