const router = require('express').Router();
const { Team } = require('../../models');
const withAuth = require('../../utils/auth');

//getting syntax error when I try to create a new team in insomia
// says that team name and user_id is null?

// GET ROUTES

// Find all teams

router.get('/', async (req, res) => {
  try {
    const teamData = await Team.findAll();
    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find a single team

router.get('/:id', async (req, res) => {
  try {
    const teamData = await Team.findByPk(req.params.id);

    if (!teamData) {
      res.status(404).json({ message: 'No team found with this id!' });
      return;
    }

    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST ROUTES

// Create a team

router.post('/', withAuth, async (req, res) => {
  try {
    const newTeam = await Team.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTeam);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE ROUTES

// Delete a Team

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const teamData = await Team.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!teamData) {
      res.status(404).json({ message: 'No team found with this id!' });
      return;
    }

    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
