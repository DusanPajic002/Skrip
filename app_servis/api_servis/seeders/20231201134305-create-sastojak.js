'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sastojak',
    [
        {id:1, naziv:"Kecap"},
        {id:2, naziv:"Majonez"},
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sastojak', null, {});
  }
};
