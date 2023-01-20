const { Model, DataTypes } = require('sequelize');
//const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Player extends Model {
  //checkPassword(loginPw) {
  //return bcrypt.compareSync(loginPw, this.password);
  //}
}

Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    point_total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rebounds: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    assists: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    steals: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    points_total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      autoIncrement: true,
      references: {
        model: 'team',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'player',
  }
);

module.exports = Player;
