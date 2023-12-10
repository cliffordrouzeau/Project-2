const router = require('express').Router();
const Questions = require('../models/questions');
const localUser = require('../models/localUser');
const googleUser = require('../models/googleUser');
const loginAuth = require('../utils/auth')

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in, auth: req.session.auth
    });
    console.log(req.session.auth)
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

  router.get('/questions',loginAuth, async (req, res) => {
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

      router.get('/:position', loginAuth, async (req, res) => {
        try{
          req.session.save(() => {
                req.session.auth = req.params.position
              })
          if(req.session.userid){
            localUser.update({
              position: req.params.position
            },{
              where:{id: req.session.userid}
            })
        } else {
          googleUser.update({
            position: req.params.position
          },{
            where:{id: req.session.google}
          })
        }
          res.render(`${req.params.position}`, {
            logged_in: req.session.logged_in, auth: req.session.auth
          })
        } catch(err) {
          console.log(err)

        }
      })

      // router.get('/Agreeableness', (req, res) => {
      //   if (!req.session.logged_in) {
      //     res.redirect('/');
      //     return;
      //   }
      //   req.session.save(() => {
      //     req.session.auth = "Agreeableness"
      //   })
      //   res.render('Agreeableness', {
      //     logged_in: req.session.logged_in, auth: req.session.auth
      //   });
      // });

      // router.get('/Conscientiousness', (req, res) => {
      //   if (!req.session.logged_in) {
      //     res.redirect('/');
      //     return;
      //   }
      //   req.session.save(() => {
      //     req.session.auth = "Conscientiousness"
      //   })
      //   res.render('Conscientiousness', {
      //     logged_in: req.session.logged_in, auth: req.session.auth
      //   });
      // });

      // router.get('/Extroversion', (req, res) => {
      //   if (!req.session.logged_in) {
      //     res.redirect('/');
      //     return;
      //   }
      //   req.session.save(() => {
      //     req.session.auth = "Extroversion"
      //   })
      //   res.render('Extroversion', {
      //     logged_in: req.session.logged_in, auth: req.session.auth
      //   });
      // });

      // router.get('/Neurotiscism', (req, res) => {
      //   if (!req.session.logged_in) {
      //     res.redirect('/');
      //     return;
      //   }
      //   req.session.save(() => {
      //     req.session.auth = "Neurotiscism"
      //   })
      //   res.render('Neurotiscism', {
      //     logged_in: req.session.logged_in, auth: req.session.auth
      //   });
      // });

      // router.get('/Openness', (req, res) => {
      //   if (!req.session.logged_in) {
      //     res.redirect('/');
      //     return;
      //   }
      //   req.session.save(() => {
      //     req.session.auth = "Openness"
      //   })
      //   res.render('Openness', {
      //     logged_in: req.session.logged_in, auth: req.session.auth
      //   });
      // });
     
  module.exports = router;
  