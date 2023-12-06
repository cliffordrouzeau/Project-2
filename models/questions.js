const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Questions extends Model {}

Questions.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true
        },
        question: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'questions',
      }
)

module.exports = Questions;