var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const {localUser} = require('../models');

passport.use(new LocalStrategy(
    (username, password, done) => {
      console.log('Username', username, 'Password', password);
      localUser.findOne({
        where: {
          username: username
        }
      }).then((newUser) => {
        if(!newUser) {
          return done(null, false, {
            message: 'Incorrect Username or password'
          })
        } else if (!newUser.checkPassword(password)) { 
          return done(null, false);
        }
        return done(null, newUser)
      })
    }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;