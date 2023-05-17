'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appoinment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      typé: DataTypes.STRING,
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