
const router = require('express').Router();
const optionsRoute = require('./options.route');

router.use('/options', optionsRoute);

module.exports = router;
