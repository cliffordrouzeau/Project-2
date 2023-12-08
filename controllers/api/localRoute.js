const passport = require('../../config/localPassport');
const {localUser} = require('../../models');
const router = require('express').Router();

router.post('/login/password',
  passport.authenticate('local'), (req, res) => {
    res.redirect('/')
  }

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
        password: password,
      });
      req.session.save(()=>{
        req.session.userID = newUser.id
        res.redirect('/questions');
      })
    } catch (error) {
      console.error(error);
      res.redirect('/signup');
    }
  });

module.exports = router;