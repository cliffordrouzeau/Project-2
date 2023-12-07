const googleRoute = require('./googleRoute');
const localRoute = require('./localRoute');
const quizRoutes = require('./quizRoutes');
const router = require('express').Router();

router.use('/', googleRoute);
router.use('/', localRoute);
router.use('/', quizRoutes);

module.exports = router;