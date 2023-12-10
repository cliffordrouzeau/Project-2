const router = require('express').Router();
const Questions = require('../models/questions');
const localUser = require('../models/localUser');
const googleUser = require('../models/googleUser');
const loginAuth = require('../utils/auth')
const blogpost = require('../models/BlogPost')

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

      router.get('/Agreeableness', async (req, res) => {
        if (!req.session.logged_in) {
          res.redirect('/');
          return;
        }
        if (req.session.logged_in) try {
          const bData = await blogpost.findAll({
            where: {
              position: "Agreeableness"
            }
          })
          const post = bData.map((blog) =>
          blog.get({ plain: true})
          )
          res.render('Agreeableness', {
            logged_in: req.session.logged_in, auth: req.session.auth, post
          })
        } catch (error) {
          console.error(error);
        }
        });

        router.get('/Extroversion', async (req, res) => {
          if (!req.session.logged_in) {
            res.redirect('/');
            return;
          }
          if (req.session.logged_in) try {
            const bData = await blogpost.findAll({
              where: {
                position: "Extroversion"
              }
            })
            const post = bData.map((blog) =>
            blog.get({ plain: true})
            )
            res.render('Extroversion', {
              logged_in: req.session.logged_in, auth: req.session.auth, post
            })
          } catch (error) {
            console.error(error);
          }
          });

          router.get('/Neuroticism', async (req, res) => {
            if (!req.session.logged_in) {
              res.redirect('/');
              return;
            }
            if (req.session.logged_in) try {
              const bData = await blogpost.findAll({
                where: {
                  position: "Neuroticism"
                }
              })
              const post = bData.map((blog) =>
              blog.get({ plain: true})
              )
              res.render('Neuroticism', {
                logged_in: req.session.logged_in, auth: req.session.auth, post
              })
            } catch (error) {
              console.error(error);
            }
            });

            router.get('/Openness', async (req, res) => {
              if (!req.session.logged_in) {
                res.redirect('/');
                return;
              }
              if (req.session.logged_in) try {
                const bData = await blogpost.findAll({
                  where: {
                    position: "Openness"
                  }
                })
                const post = bData.map((blog) =>
                blog.get({ plain: true})
                )
                res.render('Openness', {
                  logged_in: req.session.logged_in, auth: req.session.auth, post
                })
              } catch (error) {
                console.error(error);
              }
              });

              router.get('/Conscientiousness', async (req, res) => {
                if (!req.session.logged_in) {
                  res.redirect('/');
                  return;
                }
                if (req.session.logged_in) try {
                  const bData = await blogpost.findAll({
                    where: {
                      position: "Conscientiousness"
                    }
                  })
                  const post = bData.map((blog) =>
                  blog.get({ plain: true})
                  )
                  res.render('Conscientiousness', {
                    logged_in: req.session.logged_in, auth: req.session.auth, post
                  })
                } catch (error) {
                  console.error(error);
                }
                });
     
  module.exports = router;
  