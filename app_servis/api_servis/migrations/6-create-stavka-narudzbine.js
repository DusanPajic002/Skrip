'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StavkaNarudzbines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      naziv: {
        type: Sequelize.STRING
      },
      jelo_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      narudzbina_id: {
          allowNull: false,
          type: Sequelize.INTEGER
      }
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StavkaNarudzbines');
  }
};