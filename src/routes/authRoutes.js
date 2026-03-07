const express = require("express");
const router = express.Router();
const { login, getMe, updatePassword } = require("../controllers/authController");
const { authenticate, requireAdmin } = require("../middleware/auth");

router.post("/login", login);
router.get("/me", authenticate, requireAdmin, getMe);
router.put("/password", authenticate, requireAdmin, updatePassword);

module.exports = router;
