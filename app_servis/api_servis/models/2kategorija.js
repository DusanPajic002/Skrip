'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kategorija extends Model {
    static associate(models) {
      this.hasMany(models.Jelo, {foreignKey: kategorija_id ,as:"kategorija"});
    }
  }
  Kategorija.init({
    naziv: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    },
    opis: {
      type: DataTypes.TEXT,
      allowNull: true
    } 
  }, {
    sequelize,
    modelName: 'Kategorija',
  });
  return Kategorija;
};