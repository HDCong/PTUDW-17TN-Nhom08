'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, {foreignKey: 'userId',as:'parent'})
      Review.belongsTo(models.Room, {foreignKey: 'roomId'})
      Review.hasMany(models.CommentReply,{foreignKey:'reviewid'})
    }
  };
  Review.init({
    userId: DataTypes.INTEGER,
    roomId:DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    time: DataTypes.BIGINT,
    numberoflikes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};