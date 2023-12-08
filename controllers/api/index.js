const googleRoute = require('./googleRoute');
const localRoute = require('./localRoute');
const router = require('express').Router();

router.use('/google', googleRoute);
router.use('/local', localRoute);

module.exports = router;