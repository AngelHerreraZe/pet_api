'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pets.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    genre: DataTypes.ENUM,
    specie: DataTypes.STRING,
    race: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    user_id: DataTypes.INTEGER,
    petimgUrl: DataTypes.STRING,
    status: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};