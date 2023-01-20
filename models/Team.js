const { Model, DataTypes } = require('sequelize');
//const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Team extends Model {
  //checkPassword(loginPw) {
    //return bcrypt.compareSync(loginPw, this.password);
  //}
}

Team.init(
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
    expiration_date: {
      type: TIMESTAMP,
      allowNull: false,
      unique: true,
    },
    is_expired: {
        type: Sequelize.BOOLEAN, 
        allowNull: false, 
        defaultValue: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      autoIncrement: true,
      references: {
        model: 'user',
        key: 'id',
    },
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'team',
  }
);

module.exports = Team;