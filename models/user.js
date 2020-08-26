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
      User.hasMany(models.Review, {foreignKey: 'userId', as:'parent'})
      // User.hasMany(models.CommentReply, {foreignKey: 'parrentid'})
      User.hasMany(models.CommentReply, {foreignKey: 'userid',as:'child'})
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    phone: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.BIGINT,
    avatarpath: DataTypes.TEXT,
    type: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};