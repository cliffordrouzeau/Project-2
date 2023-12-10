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

      router.get('/Agreeableness', (req, res) => {
        if (!req.session.logged_in) {
          res.redirect('/');
          return;
        }
        res.render('Agreeableness', {
          logged_in: req.session.logged_in, auth: req.session.auth
        });
      });

      router.get('/Conscientiousness', (req, res) => {
        if (!req.session.logged_in) {
          res.redirect('/');
          return;
        }
        res.render('Conscientiousness', {
          logged_in: req.session.logged_in, auth: req.session.auth
        });
      });

      router.get('/Extroversion', (req, res) => {
        if (!req.session.logged_in) {
          res.redirect('/');
          return;
        }
        res.render('Extroversion', {
          logged_in: req.session.logged_in, auth: req.session.auth
        });
      });

      router.get('/Neuroticism', (req, res) => {
        if (!req.session.logged_in) {
          res.redirect('/');
          return;
        }
        res.render('Neuroticism', {
          logged_in: req.session.logged_in, auth: req.session.auth
        });
      });

      router.get('/Openness', (req, res) => {
        if (!req.session.logged_in) {
          res.redirect('/');
          return;
        }
        res.render('Openness', {
          logged_in: req.session.logged_in, auth: req.session.auth
        });
      });
     
  module.exports = router;
  