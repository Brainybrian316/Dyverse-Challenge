// modules
const router = require('express').Router();
const { Root } = require('../Model');

router.get('/tree', (req, res) => {
  Root.findAll({
    include: [{
      model: Animal,
    }
  ]
  })
    .then(dbRootData => res.json(dbRootData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;