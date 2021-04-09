"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comment.belongsTo(models.creation);
    }
  }
  comment.init(
    {
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      commentText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      creationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
