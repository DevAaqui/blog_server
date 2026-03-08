const { DataTypes } = require("sequelize");
const slugify = require("slugify");
const sequelize = require("../config/database");

const Blog = sequelize.define(
  "Blog",
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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    content: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    excerpt: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Short summary shown in blog listings",
    },
    coverImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: DataTypes.ENUM("case-study", "scaling-and-performance", "ai-integration"),
      allowNull: true,
    },
    tags: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: 'Array of tags e.g. ["javascript", "react"]',
    },
    status: {
      type: DataTypes.ENUM("draft", "published"),
      defaultValue: "draft",
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    readTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Estimated read time in minutes",
    },
  },
  {
    tableName: "blogs",
    timestamps: true,
    hooks: {
      beforeValidate: (blog) => {
        if (blog.title) {
          blog.slug = slugify(blog.title, { lower: true, strict: true });
        }
        if (blog.content) {
          const wordsPerMinute = 200;
          const wordCount = blog.content.replace(/<[^>]*>/g, "").split(/\s+/).length;
          blog.readTime = Math.ceil(wordCount / wordsPerMinute);
        }
      },
      beforeCreate: async (blog) => {
        const existing = await Blog.findOne({ where: { slug: blog.slug } });
        if (existing) {
          blog.slug = `${blog.slug}-${Date.now()}`;
        }
        if (blog.status === "published" && !blog.publishedAt) {
          blog.publishedAt = new Date();
        }
      },
      beforeUpdate: (blog) => {
        if (blog.changed("status") && blog.status === "published" && !blog.publishedAt) {
          blog.publishedAt = new Date();
        }
      },
    },
  }
);

module.exports = Blog;
