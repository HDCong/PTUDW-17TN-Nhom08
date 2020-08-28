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
      Booking.belongsTo(models.Booking, {foreignKey: 'roomId'})
    }
  };
  Booking.init({
    userId:DataTypes.INTEGER,
    roomId:DataTypes.INTEGER,
    checkin: DataTypes.BIGINT,
    checkout: DataTypes.BIGINT,
    total: DataTypes.DOUBLE,
    cusname:DataTypes.TEXT,
    cusphone:DataTypes.INTEGER,
    cusmail:DataTypes.TEXT,
    cusstate:DataTypes.TEXT,
    custime:DataTypes.TEXT,
    services:DataTypes.TEXT,
    request:DataTypes.TEXT,
    reservationid:DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};