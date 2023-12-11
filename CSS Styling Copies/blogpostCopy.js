const passport = require('passport');
const router = require('express').Router();
const blogpost = require('../../models/BlogPost')
router.post('/', async (req, res) => {
    const { name, subject, description, position } = req.body;
    try {
      let redirectPath = `/${position}`;
        if(req.session.userid){
            const post = await blogpost.create({
              user_id: req.session.id,
                name: name,
                subject: subject,
                description: description,
                position: position,
              });
              res.redirect(redirectPath)
        } else {
            const post = await blogpost.create({
              user_id: req.session.google,
                name: name,
                subject: subject,
                description: description,
                position: position,
              });
              res.redirect(redirectPath);
        }
        // res.redirect('/');
    } catch (error) {
      console.error(error);
    }
  });
module.exports =  router;