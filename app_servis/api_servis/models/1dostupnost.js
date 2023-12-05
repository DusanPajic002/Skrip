'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dostupnost extends Model {
    static associate({Kategorija}) {
      this.hasMany(Kategorija, {foreignKey: "dostupnost_id" ,as:"dostupnost"});
    }
  }
  Dostupnost.init({
    naziv: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    },
  },{
    sequelize,
    modelName: 'Dostupnost',
    timestamps: false
  });
  return Dostupnost;
};