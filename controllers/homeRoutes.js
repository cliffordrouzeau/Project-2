const router = require('express').Router();
const Questions = require('../models/Questions');

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

      router.get('/Openness', async (req, res) => {
        try {
          res.render('Openness')
        } catch (error) {
          console.error(error);
        }
        });

        router.get('/Conscientiousness', async (req, res) => {
          try {
            res.render('Conscientiousness')
          } catch (error) {
            console.error(error);
          }
          });
          router.get('/Extroversion', async (req, res) => {
            try {
              res.render('Extroversion')
            } catch (error) {
              console.error(error);
            }
            });
            router.get('/Agreeableness', async (req, res) => {
              try {
                res.render('Agreeableness')
              } catch (error) {
                console.error(error);
              }
              });
              router.get('/Neuroticism', async (req, res) => {
                try {
                  res.render('Neuroticism')
                } catch (error) {
                  console.error(error);
                }
                });
          
  module.exports = router;
  