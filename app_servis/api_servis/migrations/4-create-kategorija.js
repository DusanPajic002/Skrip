'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kategorijas', {
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
        type: Sequelize.TEXT,
        allowNull: true
      },
      dostupnost_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Dostupnosts', 
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('kategorijas');
  }
};