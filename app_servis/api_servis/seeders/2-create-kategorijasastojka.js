'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('KategorijaSastojkas',
    [
        {id:1, naziv:"Sos", tip: "ml"},
        {id:2, naziv:"Zacin", tip: "g"},
        {id:3, naziv:"Namaz", tip: "ml"},
        {id:4, naziv:"Povrce", tip: "g"},
        {id:5, naziv:"Voce", tip: "g"},
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('KategorijaSastojkas', null, {});
  }
};
