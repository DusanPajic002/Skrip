'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Narudzbinas',
    [
        {id:1, naziv:"Test2", zakazano_vreme:"11:22", cena: 1200,adresa: "Zah"},
        {id:2, naziv:"Test3", zakazano_vreme:"11:12", cena: 300,adresa: "Zah"},
        {id:3, naziv:"Test4", zakazano_vreme:"11:32", cena: 300,adresa: "Zah"},
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Narudzbinas', null, {});
  }
};
