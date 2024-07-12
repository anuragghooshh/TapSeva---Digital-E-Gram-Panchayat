const express = require('express');
const { createApplication, getAllApplications, getUserApplications, updateApplication } = require('../controllers/applicationController')
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/apply', authMiddleware, createApplication);
router.get('/user', authMiddleware, getUserApplications);
router.get('/all',authMiddleware, getAllApplications);
router.put('/update-status', authMiddleware, updateApplication);

module.exports = router;