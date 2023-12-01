'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Kategorijas',
    [ 
        {id: 11, naziv: "Klasične Pizze", opis: "Klasika je najbolja"},
        {id: 22, naziv: "Veganske Pizze", opis: "Zeleni krug"},
        {id: 33, naziv: "Pizze sa Morskim Plodovima", opis: "Pica iz mora"},
        {id: 44, naziv: "Pizze sa Mesom", opis: "Domace carstvo"},
        {id: 55, naziv: "Dječiji Meni", opis: "Deciji uzitak"}
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Kategorijas', null, {});
  }
};
