'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sastojak extends Model {
    static associate({JeloSastojak, KategorijaSastojka}) {
      this.hasMany(JeloSastojak, {foreignKey: "sastojak_id" ,as:"sastojak"});
      this.belongsTo(KategorijaSastojka, {foreignKey: "kategorijasastojka_id" ,as:"kategorijasastojka"});
    }
  }
  Sastojak.init({
    naziv: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    },
    kolicina: {
      type: DataTypes.INTEGER,
    },
    kategorijasastojka_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Sastojak',
    timestamps: false
  });
  return Sastojak;
};