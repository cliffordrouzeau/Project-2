const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class GoogleUser extends Model {
}

GoogleUser.init (
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profilePic: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'googleUsers'
    }
);

module.exports = GoogleUser;

