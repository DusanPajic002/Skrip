'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('JeloSastojaks',
    [
        {id:1, jelo_id:4, sastojak_id:1},
        {id:2, jelo_id :3 , sastojak_id:2},
        {id:3, jelo_id :5 , sastojak_id:2},
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('JeloSastojaks', null, {});
  }
};
