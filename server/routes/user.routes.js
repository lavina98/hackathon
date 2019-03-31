const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controllers');

router.post('/',userController.getDetails);
router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/getdetails',userController.userLikedNews);
module.exports = router;