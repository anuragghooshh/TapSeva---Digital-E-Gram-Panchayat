// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const { getUsers, updateUser, deleteUser, getUserCounts } = require('../controllers/adminController');

router.get('/users', getUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.get('/user-counts', getUserCounts);

module.exports = router;