'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Kategorijas',
    [ 
        {id: 11, naziv: "Klasične Pizze", opis: "Klasika je najbolja", dostupnost_id: 1},
        {id: 22, naziv: "Veganske Pizze", opis: "Zeleni krug", dostupnost_id: 1},
        {id: 33, naziv: "Pizze sa Morskim Plodovima", opis: "Pica iz mora", dostupnost_id: 2},
        {id: 44, naziv: "Pizze sa Mesom", opis: "Domace carstvo", dostupnost_id: 1},
        {id: 55, naziv: "Dječiji Meni", opis: "Deciji uzitak", dostupnost_id: 2}
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Kategorijas', null, {});
  }
};
