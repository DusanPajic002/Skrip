'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sastojaks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      naziv: {
        allowNull: false,
        type: Sequelize.STRING
      },
      kolicina: {
        type: Sequelize.INTEGER
      },
      kategorijasastojka_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'KategorijaSastojkas', 
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sastojaks');
  }
};