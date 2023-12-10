const googleRoute = require('./googleRoute');
const localRoute = require('./localRoute');
const blogpost = require('./blogpost');
const router = require('express').Router();

router.use('/google', googleRoute);
router.use('/local', localRoute);
router.use('/local', blogpost);


module.exports = router;