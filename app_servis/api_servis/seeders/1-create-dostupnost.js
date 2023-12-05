'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dostupnosts',
    [
        {id:1, naziv:"Dostupno"},
        {id:2, naziv:"Nedostupno"},
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dostupnosts', null, {});
  }
};
