const { User, Profile } = require("../models");
const generateToken = require("../utils/generateToken");
const ApiResponse = require("../utils/ApiResponse");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return ApiResponse.error(res, "Email and password are required.", 400);
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return ApiResponse.error(res, "Invalid email or password.", 401);
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return ApiResponse.error(res, "Invalid email or password.", 401);
    }

    const token = generateToken(user.id);

    return ApiResponse.success(res, { user, token }, "Login successful");
  } catch (error) {
    next(error);
  }
};

const getMe = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id, {
      include: [{ model: Profile, as: "profile" }],
    });

    return ApiResponse.success(res, { user });
  } catch (error) {
    next(error);
  }
};

const updatePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return ApiResponse.error(res, "Current password and new password are required.", 400);
    }

    if (newPassword.length < 6) {
      return ApiResponse.error(res, "New password must be at least 6 characters.", 400);
    }

    const user = await User.findByPk(req.user.id);
    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return ApiResponse.error(res, "Current password is incorrect.", 401);
    }

    user.password = newPassword;
    await user.save();

    const token = generateToken(user.id);

    return ApiResponse.success(res, { token }, "Password updated successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = { login, getMe, updatePassword };
