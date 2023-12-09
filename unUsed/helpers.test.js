const { getHighestPercentageTrait } = require('./helpers');

test('Identify trait with the highest percentage', () => {
  const data1 = {
    "Openness": {
      "total_points": 40,
      "points": 32,
      "percentage": 80,
    },
    "report_id": 763
  };
  expect(getHighestPercentageTrait(data1)).toBe('Openness');

  const data2 = {
    "Openness": {
      "total_points": 40,
      "points": 32,
      "percentage": 50,
    },
    "Conscientiousness": {
      "total_points": 40,
      "points": 38,
      "percentage": 75,
    },
    "report_id": 763
  };
  expect(getHighestPercentageTrait(data2)).toBe('Conscientiousness');

  const data3 = {
    "Openness": {
      "total_points": 40,
      "points": 32,
      "percentage": 80,
      "your_type": "High Openness",
      "description": "Openness to Experience (O) is the personality trait of seeking new experiences and intellectual pursuits. High scores may daydream a lot (enjoy thinking about new and different things). Low scorers tend to be very down to earth (more of a ‘hear and now’ thinker). Consequently, it is thought that people with higher scores might be more creative, flexible, curious, and adventurous, whereas people with lower scores might tend to enjoy routines, predictability, and structure."
    },
    "Conscientiousness": {
      "total_points": 40,
      "points": 38,
      "percentage": 95,
      "your_type": "High Conscientiousness",
      "description": "Conscientiousness (C) is the personality trait of being honest and hardworking. High scorers tend to follow rules and prefer clean homes. Low scorers may be messy and cheat others."
    },
    "Extroversion": {
      "total_points": 40,
      "points": 10,
      "percentage": 25,
      "your_type": "Low Extroversion",
      "description": "Extroversion (E) is the personality trait of seeking fulfillment from sources outside the self or in community. High scorers tend to be very social while low scorers prefer to work on their projects alone."
    },
    "Agreeableness": {
      "total_points": 40,
      "points": 32,
      "percentage": 80,
      "your_type": "High Agreeableness",
      "description": "Agreeableness (A) reflects how much individuals adjust their behavior to suit others. High scorers are typically polite and like people. Low scorers tend to 'tell it like it is'."
    },
    "Neuroticism": {
      "total_points": 40,
      "points": 19,
      "percentage": 100,
      "your_type": "Semi Neuroticism",
      "description": "Neuroticism (N) is the personality trait of being emotional. High scorers tend to have high emotional reactions to stress. They may perceive situations as threatening and be more likely to feel moody, depressed, angry, anxious, and experience mood swings. Low scorers tend to be more emotionally stable and less reactive to stress."
    }
  };
  expect(getHighestPercentageTrait(data3)).toBe('Neuroticism');
});