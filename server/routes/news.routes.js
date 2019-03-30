const express = require("express");
const News = require("../models/news1.model");
const router = express.Router();

const newsController = require("../controllers/news.controllers");

// router.get("/topHeadlines", newsController.topHeadlines);
// router.get("/business", newsController.business);
// router.get("/entertainment", newsController.entertainment);
// router.get("/general", newsController.general);
// router.get("/health", newsController.health);
// router.get("/science", newsController.science);
// router.get("/sports", newsController.sports);
// router.get("/technology", newsController.technology);
// router.get("/politics", newsController.politics);
router.get("/userlikednews", function(req, res) {
  News.find({ upvotes: 55 }, (err, document) => {
    console.log(document);
    res.send(document);
  });
});
// router.get("/addNews", newsController.addNews);
module.exports = router;
