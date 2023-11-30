'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JeloSastojak extends Model {
   
    
    static associate(models) {
        
    }
  }
  JeloSastojak.init({
  }, {
    sequelize,
    modelName: 'JeloSastojak',
  });
  return JeloSastojak;
};