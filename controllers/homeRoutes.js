const router = require('express').Router();
const Questions = require('../models/Questions');
const localUser = require('../models/localUser');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in, auth: req.session.auth
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.redirect('/')
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

  router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('signup', {
      logged_in: req.session.logged_in, auth: req.session.auth
    });
  });

  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login', {
      logged_in: req.session.logged_in, auth: req.session.auth
    });
  });

  router.get('/questions', async (req, res) => {
    if (req.session.logged_in) try {
        const qData = await Questions.findAll()
        const questions = qData.map((question) =>
        question.get({ plain: true})
        )
        res.render('questions', {
          logged_in: req.session.logged_in, auth: req.session.auth, questions
        })
      } catch (error) {
        console.error(error);
      }
      });

      router.get('/:position', async (req, res) => {
        try{
          if(req.session.userid){
            localUser.update({
              position: req.params.position
            },{
              where:{id: req.session.userid}
            })
        } else {
          localUser.update({
            position: req.params.position
          },{
            where:{id: req.session.passport.user.id}
          })
        }
          res.render(`${req.params.position}`, {
            logged_in: req.session.logged_in, auth: req.params.position
          })
        } catch(err) {
          console.log(err)

        }
      })
     
  module.exports = router;
  