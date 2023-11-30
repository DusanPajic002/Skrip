'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jelo extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Jelo.init({
    naziv: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    }, 
    opis: {
        type: DataTypes.TEXT,
        allowNull: true
    }, 
    cena: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    kategorija_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Jelo',
  });
  return Jelo;
};