const passport = require('passport');
const router = require('express').Router();

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
    if(req.isAuthenticated){
      const googleUser = req.user[0].dataValues.id;
      const googleUserAuth = req.user[0].dataValues.position;
      console.log(googleUser);
      console.log(googleUserAuth);
        req.session.save(() => {
          req.session.google = googleUser
          req.session.logged_in = true;
          if(googleUserAuth == "Openness" || "Agreeableness" || "Extroversion" || "Neuroticism" || "Conscientiousness")
          req.session.auth = googleUserAuth
          if(googleUserAuth == null){
            res.redirect('/questions')
          }else {
            res.redirect(`/${req.user.position}`)
          }
          console.log(req.session.logged_in)
          console.log(req.session.auth)
          console.log(req.session.google)
        });
      } 
});

module.exports =  router;