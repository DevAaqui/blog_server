const express = require("express");
const router = express.Router();
const { getAllSkills, createSkill, updateSkill, deleteSkill } = require("../controllers/skillController");
const { authenticate, requireAdmin } = require("../middleware/auth");

router.get("/", getAllSkills);
router.post("/", authenticate, requireAdmin, createSkill);
router.put("/:id", authenticate, requireAdmin, updateSkill);
router.delete("/:id", authenticate, requireAdmin, deleteSkill);

module.exports = router;
