const { Education } = require("../models");
const ApiResponse = require("../utils/ApiResponse");

const getAllEducations = async (req, res, next) => {
  try {
    const educations = await Education.findAll({ order: [["order", "ASC"], ["startDate", "DESC"]] });
    return ApiResponse.success(res, { educations });
  } catch (error) {
    next(error);
  }
};

const getEducation = async (req, res, next) => {
  try {
    const education = await Education.findByPk(req.params.id);
    if (!education) {
      return ApiResponse.error(res, "Education not found.", 404);
    }
    return ApiResponse.success(res, { education });
  } catch (error) {
    next(error);
  }
};

const createEducation = async (req, res, next) => {
  try {
    const education = await Education.create({ ...req.body, userId: req.user.id });
    return ApiResponse.created(res, { education }, "Education added successfully");
  } catch (error) {
    next(error);
  }
};

const updateEducation = async (req, res, next) => {
  try {
    const education = await Education.findByPk(req.params.id);
    if (!education) {
      return ApiResponse.error(res, "Education not found.", 404);
    }

    await education.update(req.body);
    return ApiResponse.success(res, { education }, "Education updated successfully");
  } catch (error) {
    next(error);
  }
};

const deleteEducation = async (req, res, next) => {
  try {
    const education = await Education.findByPk(req.params.id);
    if (!education) {
      return ApiResponse.error(res, "Education not found.", 404);
    }

    await education.destroy();
    return ApiResponse.success(res, null, "Education deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllEducations, getEducation, createEducation, updateEducation, deleteEducation };
