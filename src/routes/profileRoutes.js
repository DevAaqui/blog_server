const express = require("express");
const router = express.Router();
const { getProfile, updateProfile } = require("../controllers/profileController");
const { authenticate, requireAdmin } = require("../middleware/auth");

router.get("/", getProfile);
router.put("/", authenticate, requireAdmin, updateProfile);

module.exports = router;
