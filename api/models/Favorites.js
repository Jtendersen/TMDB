const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Favorite extends Model {}

Favorite.init(
  {
    movieTitle: {
      type: DataTypes.STRING,
    },
    tmdbId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "favorite",
  }
);

module.exports = Favorite;
