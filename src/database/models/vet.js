'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vet.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    specialty: DataTypes.STRING,
    status: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Vet',
  });
  return Vet;
};