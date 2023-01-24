const User = require('./User');
const Team = require('./Team');
const Player = require('./Player');

User.belongsTo(Team, {
  foreignKey: 'user_id'
});

Team.belongsTo(User, {
  foreignKey: 'team_id'
});

Team.hasMany(Player, {
  foreignKey: 'team_id'
});

Player.belongsTo(Team);

module.exports = { User, Team, Player };
