const getPlayerData = async () => {
  const players = await fetch(`/api/player`, {
    method: 'GET',
  });
  userPlayerChoices(players);
};

const userPlayerChoices = function (possiblePlayers) {
  var playerArray = [];

  for (let i = 0; i < 13; i++) {
    var randomNum = [Math.floor(Math.random() * possibleChars.length)];
    const selectedPlayer = possiblePlayers[randomNum];
    playerArray.push(selectedPlayer);
  }

  return playerArray;
};
