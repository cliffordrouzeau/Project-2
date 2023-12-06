const sequelize = require('../config/connection');
const seedQuestions = require('./questionsData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedQuestions()

  process.exit(0);
};

seedDatabase();
