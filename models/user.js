'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Review, {foreignKey: 'userId'})
      User.hasMany(models.Booking, {foreignKey: 'userId'})
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    phone: DataTypes.STRING,
    names: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.BIGINT,
    type: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};