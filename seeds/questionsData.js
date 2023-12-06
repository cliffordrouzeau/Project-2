const { Questions } = require('../models');

const questionsdata = [
  {
    id: 1,
    question: 'Am the life of the party'
  },
  {
    id: 2,
    question: 'Feel little concern for others'
  },
  {
    id: 3,
    question: 'Am always prepared'
  },
  {
    id: 4,
    question: 'Get stressed out easily'
  },
  {
    id: 5,
    question: 'Have a rich vocabulary'
  },
  {
    id: 6,
    question: 'Dont talk a lot'
  },
  {
    id: 7,
    question: 'Am interested in people'
  },
  {
    id: 8,
    question: 'Leave my belongings around'
  },
  {
    id: 9,
    question: 'Am relaxed most of the time'
  },
  {
    id: 10,
    question: 'Have difficulty understanding abstract ideas'
  },
  {
    id: 11,
    question: 'Feel comfortable around people'
  },
  {
    id: 12,
    question: 'Insult people'
  },
  {
    id: 13,
    question: 'Pay attention to details'
  },
  {
    id: 14,
    question: 'Worry about things'
  },
  {
    id: 15,
    question: 'Have a vivid imagination'
  },
  {
    id: 16,
    question: 'Keep in the background'
  },
  {
    id: 17,
    question: 'Sympathize with others feelings'
  },
  {
    id: 18,
    question: 'Make a mess of things'
  },
  {
    id: 19,
    question: 'Seldom feel blue'
  },
  {
    id: 20,
    question: 'Am not interested in abstract ideas'
  },
  {
    id: 21,
    question: 'Start conversations'
  },
  {
    id: 22,
    question: 'Am not interested in other peoples problems'
  },
  {
    id: 23,
    question: 'Get chores done right away'
  },
  {
    id: 24,
    question: 'Am easily disturbed'
  },
  {
    id: 25,
    question: 'Have excellent ideas'
  },
  {
    id: 26,
    question: 'Have little to say'
  },
  {
    id: 27,
    question: 'Have a soft heart'
  },
  {
    id: 28,
    question: 'Often forget to put things back in their proper place'
  },
  {
    id: 29,
    question: 'Get upset easily'
  },
  {
    id: 30,
    question: 'Do not have a good imagination'
  },
  {
    id: 31,
    question: 'Talk to a lot of different people at parties'
  },
  {
    id: 32,
    question: 'Am not really interested in others'
  },
  {
    id: 33,
    question: 'Like order'
  },
  {
    id: 34,
    question: 'Change my mood a lot'
  },
  {
    id: 35,
    question: 'Am quick to understand things'
  },
  {
    id: 36,
    question: 'Dont like to draw attention to myself'
  },
  {
    id: 37,
    question: 'Take time out for others'
  },
  {
    id: 38,
    question: 'Shirk my duties'
  },
  {
    id: 39,
    question: 'Have frequent mood swings'
  },
  {
    id: 40,
    question: 'Use difficult words'
  },
  {
    id: 41,
    question: 'Dont mind being the center of attention'
  },
  {
    id: 42,
    question: 'Feel others emotions'
  },
  {
    id: 43,
    question: 'Follow a schedule'
  },
  {
    id: 44,
    question: 'Get irritated easily'
  },
  {
    id: 45,
    question: 'Spend time reflecting on things'
  },
  {
    id: 46,
    question: 'Am quiet around strangers'
  },
  {
    id: 47,
    question: 'Make people feel at ease'
  },
  {
    id: 48,
    question: 'Am exacting in my work'
  },
  {
    id: 49,
    question: 'Often feel blue'
  },
  {
    id: 50,
    question: 'Am full of ideas'
  },
];

const seedQuestions = () => Questions.bulkCreate(questionsdata);

module.exports = seedQuestions;