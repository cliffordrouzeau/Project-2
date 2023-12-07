const express = require('express');
const googleRoute = require('./api');
const localRoute = require('./api');
const homeRoutes = require('./homeRoutes');
const router = express.Router();

router.use('/', homeRoutes)
router.use('/', googleRoute);
router.use('/', localRoute)

module.exports = router