'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KategorijaSastojka extends Model {
    static associate({Sastojak}) {
      this.hasMany(Sastojak, {foreignKey: "kategorijasastojka_id" ,as:"kategorijasastojka"});
    }
  }
  KategorijaSastojka.init({
    naziv: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    },
    tip: {
        type: DataTypes.STRING
    }
  },{
    sequelize,
    modelName: 'KategorijaSastojka',
    timestamps: false
  });
  return KategorijaSastojka;
};