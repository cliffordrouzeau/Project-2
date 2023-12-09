const { DataTypes, Model } = require("sequelize");
const sequelize = require('../config/connection');
const User = require('./user');

class PersonalityTrait extends Model {
  static async getHighestPercentageTrait(userId) {
    try {
      const traits = await PersonalityTrait.findAll({
        where: { UserId: userId },
        order: [["percentage", "DESC"]],
        limit: 1,
      });

      if (traits.length > 0) {
        return traits[0].type;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching highest percentage trait:", error);
      throw new Error("Error fetching highest percentage trait");
    }
  }
}

PersonalityTrait.init(
  {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    percentage: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    your_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "PersonalityTrait",
  }
);

PersonalityTrait.belongsTo(User);
User.hasMany(PersonalityTrait);

module.exports = PersonalityTrait;
