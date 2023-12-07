const googleRoute = require('./googleRoute');
const localRoute = require('./localRoute')
const router = require('express').Router();

router.use('/', googleRoute);
router.use('/', localRoute)

module.exports = router;