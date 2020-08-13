'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Room.hasMany(models.Review, {foreignKey: 'roomId'})
      Room.belongsToMany(models.Service, {through: 'UsingService'})
      Room.hasMany(models.Booking, {foreignKey: 'roomId'})
    }
  };
  Room.init({
    price: DataTypes.DOUBLE,
    imagepath: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    name: DataTypes.STRING,
    isbooking: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    capacity: DataTypes.INTEGER,
    area: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};