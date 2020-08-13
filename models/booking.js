'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.User, {foreignKey: 'userId'})
      Booking.belongsTo(models.Room, {foreignKey: 'roomId'})
    }
  };
  Booking.init({
    checkin: DataTypes.BIGINT,
    checkout: DataTypes.BIGINT,
    total: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};