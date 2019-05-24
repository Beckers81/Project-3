const express = require('express');
const router = express.Router();

const postsController = require('../../controllers/posts');

router.route('/')
  // .get(postsController.getAll)
  .post(postsController.create);

router.route('/:id')
  // .get(postsController.getById)
  // .put(postsController.update)
  // .delete(postController.destroy);

module.exports = router;