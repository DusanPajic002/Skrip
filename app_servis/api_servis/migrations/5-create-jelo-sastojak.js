'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jelosastojaks', {
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
        type: Sequelize.INTEGER,
        references: {
          model: 'Jelos',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      sastojak_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Sastojaks',
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('jelosastojaks');
  }
};