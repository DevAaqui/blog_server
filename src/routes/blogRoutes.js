const express = require("express");
const router = express.Router();
const {
  getPublishedBlogs,
  getBlogBySlug,
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const { authenticate, requireAdmin } = require("../middleware/auth");

// Public routes
router.get("/published", getPublishedBlogs);
router.get("/published/:slug", getBlogBySlug);

// Admin routes
router.get("/", authenticate, requireAdmin, getAllBlogs);
router.get("/:id", authenticate, requireAdmin, getBlog);
router.post("/", authenticate, requireAdmin, createBlog);
router.put("/:id", authenticate, requireAdmin, updateBlog);
router.delete("/:id", authenticate, requireAdmin, deleteBlog);

module.exports = router;
