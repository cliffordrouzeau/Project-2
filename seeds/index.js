const sequelize = require('../config/connection');
const seedQuestions = require('./questionsData');
const seedBlog = require('./blogpostdata');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedQuestions()
  await seedBlog()

  process.exit(0);
};

seedDatabase();
