'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StavkaNarudzbine extends Model {
    static associate({Jelo,Narudzbina}) {
      this.belongsTo(Jelo, {foreignKey: "jelo_id", as:"jelo"});
      this.belongsTo(Narudzbina, {foreignKey: "narudzbina_id", as:"narudzbina"});
    }
  }
  StavkaNarudzbine.init({
    naziv: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    },
    jelo_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    narudzbina_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'StavkaNarudzbine',
    timestamps: false
  });
  return StavkaNarudzbine;
};