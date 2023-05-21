'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treatment extends Model {
    static associate(models) {
      Treatment.belongsTo(models.ClinicHistory, {as: 'clinichistory', foreignKey: 'clinicHistoryId'});
    }
  }
  Treatment.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    initDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'init_date'
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'end_date'
    },
    clinicHistoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'clinic_history_id'
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Treatment',
    tableName: 'treatments'
  });
  return Treatment;
};