const express = require("express");
const router = express.Router();
const { registerUser, googleAuth } = require('../controllers/authController');

router.post('/signup', registerUser);
router.post('/google', googleAuth);

module.exports = router;