const router = require('express').Router();
const { Player, Team, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/createteam', async (req, res) => {
  try {
    res.render('createteam', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/buildteam', async (req, res) => {
  try {
    const playerData = await Player.findAll();
    const players = playerData.map((player) => player.get({ plain: true }));

    var playerArray = [];

    for (let i = 0; i < 12; i++) {
      var randomNum = [Math.floor(Math.random() * players.length)];
      const removePlayer = players.splice(randomNum, 1);
      playerArray.push(removePlayer[0]);
    }
    console.log(playerArray);

    res.render('buildTeam', {
      logged_in: req.session.logged_in,
      playerArray,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// we want to find and render the team that matches the user_id

router.get('/dashboard', async (req, res) => {
  try {
    res.render('dashboard', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/results', async (req, res) => {
  try {
    const teamData = await Team.findAll({
      include: [
        { model: Player, as: 'player_one_info' },
        { model: Player, as: 'player_two_info' },
        { model: Player, as: 'player_three_info' },
      ],
    });
    const teams = teamData.map((team) => team.get({ plain: true }));
    console.log(teams);
    res.render('results', {
      logged_in: req.session.logged_in,
      teams,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
