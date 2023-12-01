'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Narudzbina extends Model {
    static associate(models) {
      this.hasMany(models.StavkaNarudzbine, {foreignKey: narudzbina_id , as:"narudzbina"});
    }
  }
  Narudzbina.init({
    naziv: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    },
    zakazano_vreme: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    },
    cena: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    adresa: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Narudzbina',
  });
  return Narudzbina;
};