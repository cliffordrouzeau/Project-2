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
  module.exports = router;
  