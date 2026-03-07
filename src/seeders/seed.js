require("dotenv").config();

const { sequelize, User, Profile } = require("../models");

const seedAdmin = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");

    await sequelize.sync({ force: true });
    console.log("Tables created.");

    const admin = await User.create({
      name: process.env.ADMIN_NAME || "Aaquib",
      email: process.env.ADMIN_EMAIL || "admin@example.com",
      password: process.env.ADMIN_PASSWORD || "admin123456",
      role: "admin",
    });

    await Profile.create({
      userId: admin.id,
      title: "Full Stack Developer | Freelancer",
      bio: "Passionate developer building modern web applications.",
      aboutMe:
        "I am a full stack developer with expertise in building scalable web applications. " +
        "I specialize in React, Node.js, and cloud technologies. " +
        "Available for freelance projects — let's build something great together.",
      location: "Available Worldwide",
      availableForHire: true,
    });

    console.log("Admin user created successfully!");
    console.log(`  Email: ${admin.email}`);
    console.log(`  Password: ${process.env.ADMIN_PASSWORD || "admin123456"}`);

    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }
};

seedAdmin();
