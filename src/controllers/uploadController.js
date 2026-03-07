const ApiResponse = require("../utils/ApiResponse");

const uploadFile = (req, res, next) => {
  try {
    if (!req.file) {
      return ApiResponse.error(res, "No file uploaded.", 400);
    }

    const fileUrl = `/uploads/${req.file.filename}`;
    return ApiResponse.success(res, { url: fileUrl, filename: req.file.filename }, "File uploaded successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = { uploadFile };
