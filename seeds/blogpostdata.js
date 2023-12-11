const blogpost  = require('../models/BlogPost');

const blogdata = [
  {
    id: 1,
    name: 'jedd',
    subject: 'tom',
    description: 'tomy',
    position: 'Neuroticism',
  },
];

const seedBlog = () => blogpost.bulkCreate(blogdata);

module.exports = seedBlog;