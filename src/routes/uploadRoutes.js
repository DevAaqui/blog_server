const express = require("express");
const router = express.Router();
const { uploadFile } = require("../controllers/uploadController");
const { authenticate, requireAdmin } = require("../middleware/auth");
const upload = require("../middleware/upload");

router.post("/", authenticate, requireAdmin, upload.single("file"), uploadFile);

module.exports = router;
