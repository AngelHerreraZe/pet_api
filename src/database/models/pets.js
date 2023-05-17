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
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    genre: {
      type: DataTypes.ENUM("MALE","FEMALE")
    },
    specie: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    race: {
      type: DataTypes.STRING(20)
    },
    weight: {
      type: DataTypes.FLOAT
    },
    height: {
      type: DataTypes.FLOAT
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    petimgUrl: {
      type: DataTypes.STRING,
      field: 'petimg_url'
    },
    status: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Pets',
    tableName: 'pets'
  });
  return Pets;
};