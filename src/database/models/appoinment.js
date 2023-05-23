'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appoinment extends Model {
    static associate(models) {
      Appoinment.belongsTo(models.Pets, {foreignKey: 'pet_id'});
      Appoinment.belongsTo(models.Vet, {foreignKey: 'vet_id'});
    }
  }
  Appoinment.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING,
      allowNull:false
    },
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Appoinment',
    tableName: 'appoinments'
  });
  return Appoinment;
};