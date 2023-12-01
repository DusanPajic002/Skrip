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
      komada: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      jelo_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      narudzbina_id: {
          type: DataTypes.INTEGER,
          allowNull: false
      }
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StavkaNarudzbines');
  }
};