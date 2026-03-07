const express = require("express");
const router = express.Router();
const {
  getAllEducations,
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} = require("../controllers/educationController");
const { authenticate, requireAdmin } = require("../middleware/auth");

router.get("/", getAllEducations);
router.get("/:id", getEducation);
router.post("/", authenticate, requireAdmin, createEducation);
router.put("/:id", authenticate, requireAdmin, updateEducation);
router.delete("/:id", authenticate, requireAdmin, deleteEducation);

module.exports = router;
