'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sastojaks',
    [
        {id:1, kategorijasastojka_id: 1, naziv:"Kecap" , kolicina: 1000},
        {id:2, kategorijasastojka_id: 1, naziv:"Majonez", kolicina: 1000},
        {id:3, kategorijasastojka_id: 1, naziv:"Sweet chilli", kolicina: 1000},
        {id:4, kategorijasastojka_id: 3, naziv:"Pavlaka", kolicina: 1000},
        {id:5, kategorijasastojka_id: 3, naziv:"Tartar", kolicina: 1000},
        {id:6, kategorijasastojka_id: 4, naziv:"Luk" , kolicina: 1000},
        {id:7, kategorijasastojka_id: 4, naziv:"Kukuruz", kolicina: 1000},
        {id:8, kategorijasastojka_id: 4, naziv:"Pecurke", kolicina: 1000},
        {id:9, kategorijasastojka_id: 4, naziv:"Krastavac", kolicina: 1000},
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sastojaks', null, {});
  }
};
