'use strict';

const Narudzbina = require('../models/3narudzbina');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stavkanarudzbines',
    [
        {id: 1, naziv:"Test1", jelo_id:2, narudzbina_id:1 },
        {id: 2, naziv:"Test2",jelo_id:1, narudzbina_id:1},
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stavkanarudzbines', null, {});
  }
};
