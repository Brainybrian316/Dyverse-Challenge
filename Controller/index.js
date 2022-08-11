// modules
const router = require('express').Router();
const rootRoutes = require('./root-routes.js');
// const animalRoutes = require('./animal-routes.js');

router.use('/', rootRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
