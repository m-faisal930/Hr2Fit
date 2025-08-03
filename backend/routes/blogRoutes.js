const express = require('express');
const blogPostController = require('../controllers/blogPostController');
const commentController = require('../controllers/commentController');
const categoryController = require('../controllers/categoryController');
const { requireAdmin  } = require('../middlewares/auth');
const { uploadImage } = require('../middlewares/imageUploadMiddleware');

const router = express.Router();

// Public routes
router.get('/posts', blogPostController.getAllPosts);
router.get('/posts/recent', blogPostController.getRecentPosts);
router.get('/posts/popular', blogPostController.getPopularPosts);
router.get('/categories', categoryController.getCategoriesWithCounts);
router.get('/posts/:slug', blogPostController.getPost);
router.get('/posts/:postId/comments', commentController.getPostComments);

// Public interaction routes
router.post('/comments', commentController.createComment);
router.patch('/comments/:id/like', commentController.likeComment);
router.patch('/posts/:id/like', blogPostController.likePost);
router.patch('/posts/:id/unlike', blogPostController.unlikePost);

// Protected routes (admin only)
router.use(requireAdmin);

// Image upload route
router.post('/upload-image', uploadImage, blogPostController.uploadImage);

// Blog post management
router.post('/posts', blogPostController.createPost);
router.patch('/posts/:id', blogPostController.updatePost);
router.delete('/posts/:id', blogPostController.deletePost);
router.get('/posts/stats', blogPostController.getBlogStats);

// Category management
router.get('/categories/all', categoryController.getAllCategories);
router.post('/categories', categoryController.createCategory);
router.patch('/categories/:id', categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);
router.get('/categories/:id', categoryController.getCategory);

// Comment management
router.get('/comments', commentController.getAllComments);
router.patch('/comments/:id/status', commentController.updateCommentStatus);
router.delete('/comments/:id', commentController.deleteComment);
router.get('/comments/stats', commentController.getCommentStats);
router.patch('/comments/bulk-status', commentController.bulkUpdateCommentStatus);

module.exports = router; 