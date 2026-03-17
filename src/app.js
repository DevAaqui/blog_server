require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");
const { sequelize } = require("./models");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// API Routes
app.use("/api", routes);

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Blog Server API is running",
    version: "1.0.0",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// Global error handler
app.use(errorHandler);

// Start server
const startServer = async () => {
  try {
    // Log DB config presence (no values) to debug Railway env issues
    const dbVars = ["DB_HOST", "DB_PORT", "DB_NAME", "DB_USER", "DB_PASSWORD", "MYSQLHOST", "MYSQLPORT", "MYSQLDATABASE", "MYSQLUSER", "MYSQLPASSWORD"];
    const present = dbVars.filter((k) => process.env[k]);
    const missing = dbVars.filter((k) => !process.env[k]);
    console.log("DB-related env vars set:", present.join(", ") || "(none)");
    if (missing.length === dbVars.length) {
      console.error("No DB env vars found. Add MySQL vars to this service or reference the MySQL service.");
    }

    await sequelize.authenticate();
    console.log("Database connected successfully.");

    await sequelize.sync({ alter: process.env.NODE_ENV === "development" });
    console.log("Database synced.");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
      console.log(`API: http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    console.error("Full error:", error);
    if (error.stack) console.error(error.stack);
    process.exit(1);
  }
};

startServer();
