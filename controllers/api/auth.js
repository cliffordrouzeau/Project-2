const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oidc');
const db = require('./db');
require('dotenv').config();

const router = express.Router();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/oauth2/redirect/google',
  scope: ['profile']
}, async function verify(issuer, profile, cb) {
  try {
    let row = await db.get('SELECT * FROM federated_credentials WHERE provider = ? AND subject = ?', [
      issuer,
      profile.id
    ]);

    if (!row) {
      let result = await db.run('INSERT INTO users (name) VALUES (?)', [profile.displayName]);
      let id = result.lastID;

      await db.run('INSERT INTO federated_credentials (user_id, provider, subject) VALUES (?, ?, ?)', [
        id,
        issuer,
        profile.id
      ]);

      const user = {
        id,
        name: profile.displayName
      };
      return cb(null, user);
    } else {
      row = await db.get('SELECT * FROM users WHERE id = ?', [row.user_id]);

      if (!row) {
        return cb(null, false);
      }
      return cb(null, row);
    }
  } catch (err) {
    return cb(err);
  }
}));

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/login/federated/google', passport.authenticate('google'));

router.get('/oauth2/redirect/google', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => {
    return cb(null, user);
  });
});

module.exports = router;