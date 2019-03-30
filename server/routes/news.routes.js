const express = require('express');
const router = express.Router();

const newsController = require('../controllers/news.controllers');
const newsSummaryController = require('../controllers/newsSummary.controllers');

router.get('/topHeadlines', newsController.topHeadlines);
router.get('/business', newsController.business);
router.get('/entertainment', newsController.entertainment);
router.get('/general', newsController.general);
router.get('/health', newsController.health);
router.get('/science', newsController.science);
router.get('/sports', newsController.sports);
router.get('/technology', newsController.technology);
router.get('/politics', newsController.politics);

router.post('/summary', newsSummaryController.summary);

module.exports = router;