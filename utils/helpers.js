function getHighestPercentageTrait(personalityData) {
    let highestPercentage = 0;
    let highestTrait = '';

    for (const trait in personalityData) {
        if (trait !== 'report_id') {
            const percentage = personalityData[trait].percentage;
            if (percentage > highestPercentage) {
                highestPercentage = percentage;
                highestTrait = trait;
            }
        }
    }

    return highestTrait;
};

const isLoggedInOrAuthenticated = (req, res, next) => {
    if (req.session.logged_in || req.isAuthenticated()) {
        // If either condition is met, proceed
        next();
      } else {
        // If neither condition is met, redirect to the login page
        res.redirect('/login');
      }
    };

module.exports = { getHighestPercentageTrait, isLoggedInOrAuthenticated };