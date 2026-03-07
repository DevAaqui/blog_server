const express = require("express");
const router = express.Router();
const {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const { authenticate, requireAdmin } = require("../middleware/auth");

router.get("/", getAllProjects);
router.get("/:id", getProject);
router.post("/", authenticate, requireAdmin, createProject);
router.put("/:id", authenticate, requireAdmin, updateProject);
router.delete("/:id", authenticate, requireAdmin, deleteProject);

module.exports = router;
