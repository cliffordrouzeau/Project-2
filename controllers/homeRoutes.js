const router = require('express').Router();
const Questions = require('../models/Questions');
const localUser = require('../models/localUser');

router.get('/', async (req, res) => {
  try {
    res.render('homepage')
  } catch (error) {
    console.error(error);
  }
  });

  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

  router.post('/logout', function(req, res, next) {
    req.logout((err)=> {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });

  router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  });

  router.get('/questions', async (req, res) => {
    try {
        const qData = await Questions.findAll()
        const questions = qData.map((question) =>
        question.get({ plain: true})
        )
        res.render('questions', {questions})
      } catch (error) {
        console.error(error);
      }
      });

      router.get('/:position', async (req, res) => {
        try{

          localUser.update({
            position: req.params.position
          },{
            where:{id: req.session.passport.user.id}
          })
          res.render(`${req.params.position}`)
        } catch(err) {
          console.log(err)

        }
      })
          
  module.exports = router;
  