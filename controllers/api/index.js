const googleRoute = require('./googleRoute');
const localRoute = require('./localRoute');
const blogpost = require('./blogpost');
const router = require('express').Router();

router.use('/', googleRoute);
router.use('/local', localRoute);
router.use('/blogpost', blogpost);


module.exports = router;