'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kategorija extends Model {
    static associate({Jelo, Dostupnost}) {
      this.hasMany(Jelo, {foreignKey: "kategorija_id" ,as:"kategorija"});
      this.belongsTo(Dostupnost, {foreignKey: "dostupnost_id" ,as:"dostupnost"});
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
    },
    dostupnost_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Kategorija',
    timestamps: false
  });
  return Kategorija;
};