const passport = require('../../config/localPassport');
const {localUser} = require('../../models');
const router = require('express').Router();

router.post('/login/password',
  passport.authenticate('local'), (req, res) => {
    if(req.isAuthenticated){
      req.session.save(() => {
        req.session.logged_in = true;
        if(req.user.position == "Openness" || "Agreeableness" || "Extroversion" || "Neuroticism" || "Conscientiousness")
        req.session.auth = req.user.position
        if(req.user.position == null){
          res.redirect('/questions')
        }else {
          res.redirect(`/${req.user.position}`)
        }
        console.log(req.session.logged_in)
        console.log(req.user.position)
      });
    } 
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
        req.session.logged_in = true;
        req.session.userid = newUser.id
        req.session.auth = ""
        res.redirect('/questions');
      })
    } catch (error) {
      console.error(error);
      res.redirect('/signup');
    }
  });

module.exports = router;