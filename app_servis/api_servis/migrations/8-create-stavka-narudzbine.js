'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stavkanarudzbines', {
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
        type: Sequelize.INTEGER,
        references: {
          model: 'Jelos',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      narudzbina_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Narudzbinas',
            key: 'id'
          },
          onDelete: 'CASCADE'
      }
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stavkanarudzbines');
  }
};