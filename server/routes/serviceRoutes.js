const express = require("express"); 
const router = express.Router();
const { getServices, getServicesStats } = require("../controllers/serviceController");

router.get('/', getServices); 
router.get('/stats', getServicesStats);

module.exports = router;