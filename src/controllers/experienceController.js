const { Experience } = require("../models");
const ApiResponse = require("../utils/ApiResponse");

const getAllExperiences = async (req, res, next) => {
  try {
    const experiences = await Experience.findAll({ order: [["order", "ASC"], ["startDate", "DESC"]] });
    return ApiResponse.success(res, { experiences });
  } catch (error) {
    next(error);
  }
};

const getExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByPk(req.params.id);
    if (!experience) {
      return ApiResponse.error(res, "Experience not found.", 404);
    }
    return ApiResponse.success(res, { experience });
  } catch (error) {
    next(error);
  }
};

const createExperience = async (req, res, next) => {
  try {
    const experience = await Experience.create({ ...req.body, userId: req.user.id });
    return ApiResponse.created(res, { experience }, "Experience added successfully");
  } catch (error) {
    next(error);
  }
};

const updateExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByPk(req.params.id);
    if (!experience) {
      return ApiResponse.error(res, "Experience not found.", 404);
    }

    await experience.update(req.body);
    return ApiResponse.success(res, { experience }, "Experience updated successfully");
  } catch (error) {
    next(error);
  }
};

const deleteExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByPk(req.params.id);
    if (!experience) {
      return ApiResponse.error(res, "Experience not found.", 404);
    }

    await experience.destroy();
    return ApiResponse.success(res, null, "Experience deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllExperiences, getExperience, createExperience, updateExperience, deleteExperience };
