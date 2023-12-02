'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sastojak extends Model {
    static associate({JeloSastojak}) {
      this.hasMany(JeloSastojak, {foreignKey: "sastojak_id" ,as:"sastojak"});
    }
  }
  Sastojak.init({
    naziv: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Sastojak',
    timestamps: false
  });
  return Sastojak;
};