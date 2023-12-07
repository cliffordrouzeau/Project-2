const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize, 
    modelName: "User",
  }
);

module.exports = User;
