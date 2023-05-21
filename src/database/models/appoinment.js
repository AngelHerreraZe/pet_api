'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appoinment extends Model {
    static associate(models) {
      Appoinment.belongsTo(models.Pets, {as: 'pet', foreignKey: 'petId'});
      Appoinment.belongsTo(models.Vet, {as: 'vet', foreignKey: 'vetId'});
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
    petId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "pet_id"
    },
    vetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "vet_id"
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