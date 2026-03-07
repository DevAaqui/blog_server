const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Skill = sequelize.define(
  "Skill",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM("frontend", "backend", "database", "devops", "mobile", "other"),
      defaultValue: "other",
    },
    proficiency: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: { min: 1, max: 100 },
      comment: "Skill proficiency percentage 1-100",
    },
    order: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: "skills",
    timestamps: true,
  }
);

module.exports = Skill;
