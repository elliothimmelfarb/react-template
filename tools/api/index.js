const router = require('express').Router();
<<<<<<< HEAD
const tales = require('./tales');
const chapters = require('./chapters');
const users = require('./users');
=======
const things = require('./things');
>>>>>>> 1c2a642183f4e96f1bd1976e7823ccdc327e1a2d

router.use('/tales', tales);
router.use('/chapters', chapters);
router.use('/users', users);

module.exports = router;
