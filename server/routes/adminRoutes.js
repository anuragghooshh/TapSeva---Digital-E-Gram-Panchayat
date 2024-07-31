// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const { getUsers, deleteUser, getUserCounts } = require('../controllers/adminController');

router.get('/users', getUsers);
router.delete('/users/:id', deleteUser);
router.get('/user-counts', getUserCounts);

module.exports = router;