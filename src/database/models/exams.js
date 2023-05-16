'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exams extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Exams.init({
    exam: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    result: DataTypes.STRING,
    clinicHistoryId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Exams',
  });
  return Exams;
};