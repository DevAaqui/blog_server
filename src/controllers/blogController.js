const { Op } = require("sequelize");
const { Blog, User } = require("../models");
const ApiResponse = require("../utils/ApiResponse");

const getPublishedBlogs = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const { tag, search, category } = req.query;

    const where = { status: "published" };

    if (category) {
      where.category = category;
    }

    if (search) {
      where[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { excerpt: { [Op.like]: `%${search}%` } },
      ];
    }

    const { count, rows: blogs } = await Blog.findAndCountAll({
      where,
      include: [
        { model: User, as: "author", attributes: ["id", "name", "avatar"] },
      ],
      order: [["publishedAt", "DESC"]],
      limit,
      offset,
    });

    let filtered = blogs;
    if (tag) {
      filtered = blogs.filter((blog) => blog.tags && blog.tags.includes(tag));
    }

    const pagination = {
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      totalItems: count,
      itemsPerPage: limit,
    };

    return ApiResponse.paginated(res, { blogs: filtered }, pagination);
  } catch (error) {
    next(error);
  }
};

const getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({
      where: { slug: req.params.slug, status: "published" },
      include: [
        { model: User, as: "author", attributes: ["id", "name", "avatar"] },
      ],
    });

    if (!blog) {
      return ApiResponse.error(res, "Blog post not found.", 404);
    }

    return ApiResponse.success(res, { blog });
  } catch (error) {
    next(error);
  }
};

// Admin: get all blogs including drafts
const getAllBlogs = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const { status, category } = req.query;

    const where = {};
    if (status) where.status = status;
    if (category) where.category = category;

    const { count, rows: blogs } = await Blog.findAndCountAll({
      where,
      include: [
        { model: User, as: "author", attributes: ["id", "name", "avatar"] },
      ],
      order: [["createdAt", "DESC"]],
      limit,
      offset,
    });

    const pagination = {
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      totalItems: count,
      itemsPerPage: limit,
    };

    return ApiResponse.paginated(res, { blogs }, pagination);
  } catch (error) {
    next(error);
  }
};

const getBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByPk(req.params.id, {
      include: [
        { model: User, as: "author", attributes: ["id", "name", "avatar"] },
      ],
    });

    if (!blog) {
      return ApiResponse.error(res, "Blog post not found.", 404);
    }

    return ApiResponse.success(res, { blog });
  } catch (error) {
    next(error);
  }
};

const createBlog = async (req, res, next) => {
  try {
    const blog = await Blog.create({ ...req.body, userId: req.user.id });

    const created = await Blog.findByPk(blog.id, {
      include: [
        { model: User, as: "author", attributes: ["id", "name", "avatar"] },
      ],
    });

    return ApiResponse.created(
      res,
      { blog: created },
      "Blog post created successfully",
    );
  } catch (error) {
    next(error);
  }
};

const updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      return ApiResponse.error(res, "Blog post not found.", 404);
    }

    await blog.update(req.body);

    const updated = await Blog.findByPk(blog.id, {
      include: [
        { model: User, as: "author", attributes: ["id", "name", "avatar"] },
      ],
    });

    return ApiResponse.success(
      res,
      { blog: updated },
      "Blog post updated successfully",
    );
  } catch (error) {
    next(error);
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      return ApiResponse.error(res, "Blog post not found.", 404);
    }

    await blog.destroy();
    return ApiResponse.success(res, null, "Blog post deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPublishedBlogs,
  getBlogBySlug,
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
