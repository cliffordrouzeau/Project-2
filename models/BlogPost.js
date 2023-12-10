// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Blogpost extends Model {}

// Blogpost.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Subject: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     date_created: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: DataTypes.NOW,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'localUsers',
//         key: 'id',
//       },
//     },
//     position: {
//       type: DataTypes.STRING,
//       references: {
//         model: 'localUsers',
//         key: 'position',
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'blogpost',
//   }
// );

// module.exports = Blogpost;