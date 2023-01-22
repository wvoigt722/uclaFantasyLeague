//we want a function that will grab the team data from the db and render it on the page

const getTeamData = async () => {
  const teams = await fetch(`/api/teams`, {
    method: 'GET',
  });

  for (let i = 0; i < teams.length; i++) {}
};
