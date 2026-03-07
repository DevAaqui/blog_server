const { Skill } = require("../models");
const ApiResponse = require("../utils/ApiResponse");

const getAllSkills = async (req, res, next) => {
  try {
    const { category } = req.query;
    const where = {};
    if (category) where.category = category;

    const skills = await Skill.findAll({ where, order: [["category", "ASC"], ["order", "ASC"]] });
    return ApiResponse.success(res, { skills });
  } catch (error) {
    next(error);
  }
};

const createSkill = async (req, res, next) => {
  try {
    const skill = await Skill.create({ ...req.body, userId: req.user.id });
    return ApiResponse.created(res, { skill }, "Skill added successfully");
  } catch (error) {
    next(error);
  }
};

const updateSkill = async (req, res, next) => {
  try {
    const skill = await Skill.findByPk(req.params.id);
    if (!skill) {
      return ApiResponse.error(res, "Skill not found.", 404);
    }

    await skill.update(req.body);
    return ApiResponse.success(res, { skill }, "Skill updated successfully");
  } catch (error) {
    next(error);
  }
};

const deleteSkill = async (req, res, next) => {
  try {
    const skill = await Skill.findByPk(req.params.id);
    if (!skill) {
      return ApiResponse.error(res, "Skill not found.", 404);
    }

    await skill.destroy();
    return ApiResponse.success(res, null, "Skill deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllSkills, createSkill, updateSkill, deleteSkill };
