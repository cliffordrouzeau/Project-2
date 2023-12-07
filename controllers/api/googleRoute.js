const passport = require('passport');
const router = require('express').Router();

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/'); //redirect after completed login
});

module.exports =  router;