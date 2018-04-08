const express = require("express");
      router = express.Router();
      ctrl = require("../controllers/posts")

router.post("/", ctrl.createPost);
router.get("/", ctrl.getAllPosts);
router.get("/:id", ctrl.getPostById);
router.put("/:id", ctrl.updatePost);
router.delete("/:id", ctrl.deletePost);

module.exports = router;
