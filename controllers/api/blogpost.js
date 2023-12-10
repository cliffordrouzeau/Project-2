const passport = require('passport');
const router = require('express').Router();
const blogpost = require('../../models/BlogPost')



router.post('/', async (req, res) => {
    const { name, subject, description, position } = req.body;
    try {
        if(req.session.google){
            const post = await blogpost.create({
              user_id: req.session.id,
                name: name,
                subject: subject,
                description: description,
                position: position,
              });
        } else {
            const post = await blogpost.create({
              user_id: req.session.google,
                name: name,
                subject: subject,
                description: description,
                position: position,
              });
        }
      
    } catch (error) {
      console.error(error);
    }
  });

module.exports =  router;