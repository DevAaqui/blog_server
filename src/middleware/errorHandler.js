const errorHandler = (err, req, res, _next) => {
  console.error("Error:", err.message);

  if (err.name === "SequelizeValidationError") {
    const errors = err.errors.map((e) => ({ field: e.path, message: e.message }));
    return res.status(400).json({ success: false, message: "Validation error", errors });
  }

  if (err.name === "SequelizeUniqueConstraintError") {
    const field = err.errors?.[0]?.path || "field";
    return res.status(409).json({ success: false, message: `${field} already exists.` });
  }

  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({ success: false, message: "File too large. Maximum size is 5MB." });
  }

  if (err.message && err.message.includes("Only image files")) {
    return res.status(400).json({ success: false, message: err.message });
  }

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal server error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

module.exports = errorHandler;
