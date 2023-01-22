const router = require('express').Router();
const { Player } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPlayer = await Player.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPlayer);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
