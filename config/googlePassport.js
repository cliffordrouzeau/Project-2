const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const {googleUser} = require('../models')
require('dotenv').config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/auth/gauth/redirect'
}, (accessToken, refreshToken, profile, cb) => {
    // console.log('profile:', profile);
    googleUser.findOrCreate({
        where: {
            displayName: profile.displayName,
            profilePic: profile._json.picture
        }
    }) .then((user) => {
        if (user) {
            return cb(null, user)
        } else {
            googleUser.save().then((newUser) => {
                cb(null, newUser)
            })
        }
    })
}));

passport.serializeUser((user, cb) => {
    cb(null, user)
});

passport.deserializeUser((user, cb) => {
    cb(null, user)
});