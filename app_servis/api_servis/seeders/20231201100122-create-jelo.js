'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('jelo',
    [
        {id:1, naziv:"Vegetarijanska", opis:"Priroda i drustvo", cena: 1200, kategorija_id:22},
        {id:2, naziv:"Capricciosa", opis:"Uvek za", cena: 300, kategorija_id:11},
        {id:3, naziv:"Margherita", opis:"La Originala", cena: 300, kategorija_id:11},
        {id:4, naziv:"BBQ Piletina", opis:"Pi le ti na", cena: 300, kategorija_id:44},
        {id:5, naziv:"Tonno", opis:"Iz mora u more", cena: 300, kategorija_id:33},
        {id:6, naziv:"Mali Šef", opis:"Za nasu decu", cena: 300, kategorija_id:55}
    ]);
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jelo', null, {});
  }
};
