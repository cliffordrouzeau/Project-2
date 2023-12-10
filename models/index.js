const googleUser = require('./googleUser');
const localUser = require('./localUser');
const questions = require('./questions');
const BlogPost = require('./BlogPost');

localUser.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  BlogPost.belongsTo(localUser, {
    foreignKey: 'user_id'
  });

module.exports = {localUser, googleUser, questions, BlogPost};