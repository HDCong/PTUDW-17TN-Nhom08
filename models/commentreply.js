'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentReply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // CommentReply.belongsTo(models.User, {foreignKey: 'parrentid'})
      CommentReply.belongsTo(models.User, {foreignKey: 'userid',as:'child'})
      CommentReply.belongsTo(models.Review,{foreignKey: 'reviewid'})
    }
  };
  CommentReply.init({
    userid:DataTypes.INTEGER,
    reviewid:DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CommentReply',
  });
  return CommentReply;
};