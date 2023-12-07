const passport = require('passport');
const {localUser} = require('../../models');
const router = require('express').Router();
const bcrypt = require('bcrypt')

router.post('/login/password',
  passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: '/signup',
   })
);

  router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const existingUser = await localUser.findOne({
        where: {
          username: username,
          email: email
        },
      });
      if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists' });
      }
      const newUser = await localUser.create({
        username: username,
        email: email,
        password: await bcrypt.hash(password, 10),
      });
      res.redirect('/questions');
    } catch (error) {
      console.error(error);
      res.redirect('/signup');
    }
  });

module.exports = router;