const express = require("express");
const router = express.Router();
const {
  getAllExperiences,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/experienceController");
const { authenticate, requireAdmin } = require("../middleware/auth");

router.get("/", getAllExperiences);
router.get("/:id", getExperience);
router.post("/", authenticate, requireAdmin, createExperience);
router.put("/:id", authenticate, requireAdmin, updateExperience);
router.delete("/:id", authenticate, requireAdmin, deleteExperience);

module.exports = router;
