const express = require('express');
const googleRoute = require('./api');
const localRoute = require('./api');
const quizRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const router = express.Router();

router.use('/', homeRoutes);
router.use('/', googleRoute);
router.use('/', localRoute);
router.use('/', quizRoutes);

module.exports = router