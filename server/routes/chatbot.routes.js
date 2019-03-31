const express = require("express");
const router = express.Router();

const chatbotController = require('../controllers/chatbot.controllers');

router.post('/answer', chatbotController.getAnswer);

module.exports = router;

