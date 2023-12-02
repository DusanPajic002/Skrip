'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jelos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      naziv: {
        type: Sequelize.STRING
      },
      opis: {
        type: Sequelize.STRING
      },
      cena: {
        type: Sequelize.INTEGER
      },
      kategorija_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Kategorijas',
          key: 'id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('jelos');
  }
};