const { Profile, User } = require("../models");
const ApiResponse = require("../utils/ApiResponse");

const getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({
      include: [{ model: User, as: "user", attributes: ["id", "name", "email", "avatar"] }],
    });

    if (!profile) {
      return ApiResponse.error(res, "Profile not found.", 404);
    }

    return ApiResponse.success(res, { profile });
  } catch (error) {
    next(error);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    const { name, avatar, ...profileData } = req.body;

    let profile = await Profile.findOne({ where: { userId: req.user.id } });

    if (!profile) {
      profile = await Profile.create({ userId: req.user.id, ...profileData });
    } else {
      await profile.update(profileData);
    }

    if (name || avatar) {
      const user = await User.findByPk(req.user.id);
      if (name) user.name = name;
      if (avatar) user.avatar = avatar;
      await user.save();
    }

    const updated = await Profile.findOne({
      where: { userId: req.user.id },
      include: [{ model: User, as: "user", attributes: ["id", "name", "email", "avatar"] }],
    });

    return ApiResponse.success(res, { profile: updated }, "Profile updated successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = { getProfile, updateProfile };
