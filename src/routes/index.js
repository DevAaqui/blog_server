const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const profileRoutes = require("./profileRoutes");
const experienceRoutes = require("./experienceRoutes");
const educationRoutes = require("./educationRoutes");
const skillRoutes = require("./skillRoutes");
const projectRoutes = require("./projectRoutes");
const blogRoutes = require("./blogRoutes");
const uploadRoutes = require("./uploadRoutes");

router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);
router.use("/experiences", experienceRoutes);
router.use("/educations", educationRoutes);
router.use("/skills", skillRoutes);
router.use("/projects", projectRoutes);
router.use("/blogs", blogRoutes);
router.use("/upload", uploadRoutes);

module.exports = router;
