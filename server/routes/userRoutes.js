const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { getUserDetails, getApplicantDetails } = require('../controllers/userController');

// GET api/user/me
router.get('/me', authMiddleware, getUserDetails);

module.exports = router;