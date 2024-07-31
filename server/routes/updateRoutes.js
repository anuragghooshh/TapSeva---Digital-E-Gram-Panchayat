const express = require("express");
const router = express.Router();
const { postNewUpdate, getUpdates, deleteUpdate } = require("../controllers/updateController");

router.post("/new", postNewUpdate);
router.get("/", getUpdates);
router.delete("/:id", deleteUpdate);


module.exports = router;