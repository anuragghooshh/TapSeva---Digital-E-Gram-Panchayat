const express = require("express"); 
const router = express.Router();
const { getServices, getServicesStats, createService } = require("../controllers/serviceController");

router.get('/', getServices); 
router.get('/stats', getServicesStats);
router.post('/new', createService);

module.exports = router;