const router = require('express').Router();
const things = require('./Things');

router.use('/things', things);

module.exports = router;
