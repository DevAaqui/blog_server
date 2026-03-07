const sequelize = require("../config/database");
const User = require("./User");
const Profile = require("./Profile");
const Experience = require("./Experience");
const Education = require("./Education");
const Skill = require("./Skill");
const Project = require("./Project");
const Blog = require("./Blog");

// Associations
User.hasOne(Profile, { foreignKey: "userId", as: "profile" });
Profile.belongsTo(User, { foreignKey: "userId", as: "user" });

User.hasMany(Experience, { foreignKey: "userId", as: "experiences" });
Experience.belongsTo(User, { foreignKey: "userId", as: "user" });

User.hasMany(Education, { foreignKey: "userId", as: "educations" });
Education.belongsTo(User, { foreignKey: "userId", as: "user" });

User.hasMany(Skill, { foreignKey: "userId", as: "skills" });
Skill.belongsTo(User, { foreignKey: "userId", as: "user" });

User.hasMany(Project, { foreignKey: "userId", as: "projects" });
Project.belongsTo(User, { foreignKey: "userId", as: "user" });

User.hasMany(Blog, { foreignKey: "userId", as: "blogs" });
Blog.belongsTo(User, { foreignKey: "userId", as: "author" });

module.exports = {
  sequelize,
  User,
  Profile,
  Experience,
  Education,
  Skill,
  Project,
  Blog,
};
