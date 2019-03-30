const express = require('express');
const router = express.Router();

const news1Controller = require('../controllers/news1.controllers');

router.post('/addNews',news1Controller.addNews);
router.post('/getuserlikednews',news1Controller.getUserLikedNews)
router.post('/upvote',news1Controller.upvote);
router.post('/downvote',news1Controller.downvote);
router.post('/spam',news1Controller.span);
module.exports = router;