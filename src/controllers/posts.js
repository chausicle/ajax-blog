const model = require("../models/posts")

const createPost = (req, res, next) => {
  const result = model.createPost(req.body);

  if (result.errors) {
    return next({
      status: result.status,
      message: result.message,
      errors: result.errors
    });
  }

  res.status(201).json({ result });
};

const getAllPosts = (req, res, next) => {
  const result = model.getAllPosts();

  res.status(200).json({ result });
};

const getPostById = (req, res, next) => {
  console.log(req.params.id);
  const result = model.getPostById(req.params.id);

  if (result.error) {
    return next({
      status: result.status,
      message:result.message,
      error: result.error
    });
  }

  res.status(200).json({ result });
};

const updatePost = (req, res, next) => {
  const result = model.updatePost(req.params.id, req.body);

  if (result.errors) {
    return next({
      status: result.status,
      message: result.message,
      errors: result.errors
    });
  }

  res.status(200).json({ result });
};

const deletePost = (req, res, next) => {
  const result = model.deletePost(req.params.id);

  if (result.error) {
    return next({
      status: result.status,
      message: result.message,
      error: result.error
    });
  }

  res.status(204).json();
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
};
