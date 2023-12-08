const router = require('express').Router();
const User = require('../../models/user');

router.post('/', async (req, res) => {
  const { name, username, email, password} = req.body
  try {
    const newUser = await User.create({
      where: {
      name: name,
      username: username,
      email: email,
      password: password,
      }
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (!user) {
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      const validP = await user.checkPassword(req.body.password);
      if (!validP) {
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      req.session.save(() => {
        req.session.logged_in = true;
        res.json({ user: user, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(200).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;