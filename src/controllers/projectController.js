const { Project } = require("../models");
const ApiResponse = require("../utils/ApiResponse");

const getAllProjects = async (req, res, next) => {
  try {
    const { featured } = req.query;
    const where = {};
    if (featured === "true") where.featured = true;

    const projects = await Project.findAll({ where, order: [["order", "ASC"], ["createdAt", "DESC"]] });
    return ApiResponse.success(res, { projects });
  } catch (error) {
    next(error);
  }
};

const getProject = async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return ApiResponse.error(res, "Project not found.", 404);
    }
    return ApiResponse.success(res, { project });
  } catch (error) {
    next(error);
  }
};

const createProject = async (req, res, next) => {
  try {
    const project = await Project.create({ ...req.body, userId: req.user.id });
    return ApiResponse.created(res, { project }, "Project added successfully");
  } catch (error) {
    next(error);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return ApiResponse.error(res, "Project not found.", 404);
    }

    await project.update(req.body);
    return ApiResponse.success(res, { project }, "Project updated successfully");
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return ApiResponse.error(res, "Project not found.", 404);
    }

    await project.destroy();
    return ApiResponse.success(res, null, "Project deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllProjects, getProject, createProject, updateProject, deleteProject };
