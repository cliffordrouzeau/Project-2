var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const {localUser} = require('../models');
const bcrypt = require('bcrypt')

passport.use(new LocalStrategy(
    (username, password, done) => {
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
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  LocalUser.findById(id, function(err, user) {
    done(err, user);
  });
});