const router = require("express").Router();
const axios = require("axios");
const User = require("../../models/user");
const PersonalityTrait = require("../../models/personalityTraits");
const {getHighestPercentageTrait, isLoggedInOrAuthenticated} = require("../../utils/helpers");

const getUserWithTraits = async (userId) => {
  return await User.findByPk(userId, { include: PersonalityTrait });
};

//Redirect the user when they submit their quiz
router.post("/submit-quiz", async (req, res) => {
  try {
    //May need to change endpoint
    const response = await axios.post(
      "https://big-five-personality-test.p.rapidapi.com/submit",
      req.body,
      {
        headers: {
          "x-rapidapi-key":
            "3461afa91dmshf456caae38d72a6p172e74jsnd0fd7f4fc816",
          "x-rapidapi-host": "big-five-personality-test.p.rapidapi.com",
        },
      }
    );

    const personalityData = response.data;

    const highestTrait = getHighestPercentageTrait(personalityData);

    switch (highestTrait) {
      case "Openness":
        res.redirect("/openness");
        break;
      case "Conscientiousness":
        res.redirect("/conscientiousness");
        break;
      case "Extroversion":
        res.redirect("/extroversion");
        break;
      case "Agreeableness":
        res.redirect("/agreeableness");
        break;
      case "Neuroticism":
        res.redirect("/neuroticism");
        break;
      default:
        res.redirect("/quiz");
        break;
    }
  } catch (error) {
    console.error(
      "Error submitting quiz or fetching data from the API:",
      error.message
    );
    res.status(500).send("Error submitting quiz");
  }
});

router.get("/fetch-and-process", async (req, res) => {
    //When quiz is submitted
  try {
    // Fetch data from the API
    const response = await axios.get(
      "https://big-five-personality-test.p.rapidapi.com/get"
    );

    const personalityData = response.data;

    // Create a new user
    const { username } = req.query;
    const user = await User.create({ username });

    // Create PersonalityTrait instances for each trait in the API response and associate with the user
    for (const trait in personalityData) {
      if (trait !== "report_id") {
        const { total_points, points, percentage, your_type, description } =
          personalityData[trait];
        await PersonalityTrait.create({
          type: trait,
          total_points,
          points,
          percentage,
          your_type,
          description,
          UserId: user.id, // Associate the trait with the created user
        });
      }
    }

    // Fetch user's personality traits
    const userTraits = await PersonalityTrait.findAll({
      where: { UserId: user.id },
    });

    // Find the highest trait among user's traits
    const highestTrait = getHighestPercentageTrait(userTraits);

    // Redirect based on the highest percentage trait
    switch (highestTrait) {
      case "Openness":
        res.redirect("/openness");
        break;
      case "Conscientiousness":
        res.redirect("/conscientiousness");
        break;
      case "Extroversion":
        res.redirect("/extroversion");
        break;
      case "Agreeableness":
        res.redirect("/agreeableness");
        break;
      case "Neuroticism":
        res.redirect("/neuroticism");
        break;
      default:
        res.redirect("/");
        break;
    }
  } catch (error) {
    console.error("Error fetching data or processing:", error.message);
    res.status(500).send("Error");
  }
});

// Route to handle redirection after sign-in based on stored traits
router.get("/dashboard", isLoggedInOrAuthenticated, async (req, res) => {
  try {
    // Retrieve the user's traits from the database
    const user = await getUserWithTraits(req.user.id); // Grabs the user's stored ID

    if (user && user.PersonalityTraits) {
      //Check's the user's supplied quiz data to check for the highest percentile scored.
      const highestTrait = getHighestPercentageTrait(user.PersonalityTraits);

      // Redirect users based on their stored highest percentage trait
      switch (highestTrait) {
        case "Openness":
          res.redirect("/openness");
          break;
        case "Conscientiousness":
          res.redirect("/conscientiousness");
          break;
        case "Extroversion":
          res.redirect("/extroversion");
          break;
        case "Agreeableness":
          res.redirect("/agreeableness");
          break;
        case "Neuroticism":
          res.redirect("/neuroticism");
          break;
        default:
          res.redirect("/");
          break;
      }
    } else {
      res.redirect("/quiz"); // Redirect to quiz if no traits are found
    }
  } catch (error) {
    console.error("Error fetching user traits:", error.message);
    res.status(500).send("Error");
  }
});

module.exports = router;
