// modules
const router = require('express').Router();
const rootRoutes = require('./api.js');

router.use('/api', rootRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
