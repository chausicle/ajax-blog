const model = require("../models/posts")

const createPost = (req, res, next) => {
  const result = model.createPost(req.body);

  if (result.errors) {
    return next({
      status: result.status,
      message: result.message,
      errors: reuslt.errors
    });
  }

  res.status(201).json({ result });
}

const getAllPosts = (req, res, next) => {

}

const getPostById = (req, res, next) => {

}

const updatePost = (req, res, next) => {

}

const deletePost = (req, res, next) => {

}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
};
