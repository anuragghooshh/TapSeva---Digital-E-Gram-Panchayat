const express = require('express');
const { createApplication, getAllApplications, getUserApplications, updateApplication, getApplicationStats } = require('../controllers/applicationController')
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/apply', authMiddleware, createApplication);
router.get('/user', authMiddleware, getUserApplications);
router.get('/all', getAllApplications);
router.put('/update-status', updateApplication);
router.get('/stats', getApplicationStats);

module.exports = router;