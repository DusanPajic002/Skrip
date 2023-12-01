'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('jelos',
    [
        {id:"1", naziv:"Vegetarijanska", opis:"Priroda i drustvo", cena: 1200, kategorija_id:2},
        {id:"2", naziv:"Capricciosa", opis:"Uvek za", cena: 300, kategorija_id:1},
        {id:"3", naziv:"Margherita", opis:"La Originala", cena: 300, kategorija_id:1},
        {id:"4", naziv:"BBQ Piletina", opis:"Pi le ti na", cena: 300, kategorija_id:4},
        {id:"5", naziv:"Tonno", opis:"Iz mora u more", cena: 300, kategorija_id:3},
        {id:"6", naziv:"Mali Šef", opis:"Za nasu decu", cena: 300, kategorija_id:5}
    ]);
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jelos', null, {});
  }
};
