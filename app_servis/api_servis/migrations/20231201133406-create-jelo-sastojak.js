'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JeloSastojaks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      jelo_id: {
        
        allowNull: false,
        type: Sequelize.INTEGER
      },
      sastojak_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('JeloSastojaks');
  }
};