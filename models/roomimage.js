'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  };
  RoomImage.init({
    roomid: DataTypes.INTEGER,
    imagepath: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'RoomImage',
  });
  return RoomImage;
};