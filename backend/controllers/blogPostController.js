const BlogPost = require('../models/BlogPost');
const Comment = require('../models/Comment');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// Get all blog posts with filtering and pagination
exports.getAllPosts = catchAsync(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  // Build filter object - show all posts for admin, only published for public
  const filter = req.headers.authorization ? {} : { status: 'published' };
  
  if (req.query.category) {
    filter.category = req.query.category;
  }
  
  if (req.query.search) {
    filter.$text = { $search: req.query.search };
  }
  
  if (req.query.tag) {
    filter.tags = req.query.tag;
  }

  // Build sort object
  let sort = { publishedAt: -1 };
  if (req.query.sort === 'views') {
    sort = { views: -1 };
  } else if (req.query.sort === 'comments') {
    sort = { comments: -1 };
  } else if (req.query.sort === 'likes') {
    sort = { likes: -1 };
  }

  const posts = await BlogPost.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .populate('category', 'name color');

  const total = await BlogPost.countDocuments(filter);
  // console.log("TOTAL POSTS",posts);

  res.status(200).json({
    status: 'success',
    results: posts.length,
    pagination: {
      current: page,
      total: Math.ceil(total / limit),
      hasNext: page * limit < total,
      hasPrev: page > 1,
    },
    data: {
      posts,
    },
  });
});

// Get single blog post by slug or ID
exports.getPost = catchAsync(async (req, res, next) => {
  let post;
  
  console.log('Looking for post with slug:', req.params.slug);
  
  if (req.params.slug) {
    // Temporarily allow both draft and published posts for debugging
    post = await BlogPost.findOne({ slug: req.params.slug })
      .populate('category', 'name color');
  } else {
    post = await BlogPost.findById(req.params.id)
      .populate('category', 'name color');
  }

  console.log('Found post:', post ? post.title : 'No post found');

  if (!post) {
    return next(new AppError('No post found with that ID', 404));
  }

  // Increment views
  post.views += 1;
  await post.save();

  // Get comments for this post
  const comments = await Comment.find({ 
    post: post._id, 
    status: 'visible',
    parentComment: null 
  }).populate('replies');

  res.status(200).json({
    status: 'success',
    data: {
      post,
      comments,
    },
  });
});

// Create new blog post (admin only)
exports.createPost = catchAsync(async (req, res, next) => {
  // Generate slug manually
  const slug = req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  const newPost = new BlogPost({
    ...req.body,
    slug: slug
  });
  await newPost.save();

  res.status(201).json({
    status: 'success',
    data: {
      post: newPost,
    },
  });
});

// Update blog post (admin only)
exports.updatePost = catchAsync(async (req, res, next) => {
  // If title is being updated, generate new slug
  if (req.body.title) {
    const slug = req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    req.body.slug = slug;
  }

  const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!post) {
    return next(new AppError('No post found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      post,
    },
  });
});

// Delete blog post (admin only)
exports.deletePost = catchAsync(async (req, res, next) => {
  const post = await BlogPost.findByIdAndDelete(req.params.id);

  if (!post) {
    return next(new AppError('No post found with that ID', 404));
  }

  // Delete associated comments
  await Comment.deleteMany({ post: req.params.id });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

// Get blog statistics (admin only)
exports.getBlogStats = catchAsync(async (req, res, next) => {
  const stats = await BlogPost.aggregate([
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 },
        totalViews: { $sum: '$views' },
        totalLikes: { $sum: '$likes' },
        totalComments: { $sum: '$comments' },
      },
    },
    {
      $addFields: {
        status: '$_id',
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
  ]);

  const totalPosts = await BlogPost.countDocuments();
  const publishedPosts = await BlogPost.countDocuments({ status: 'published' });
  const totalComments = await Comment.countDocuments();
  const pendingComments = await Comment.countDocuments({ status: 'pending' });

  // Get category statistics
  const categoryStats = await BlogPost.aggregate([
    { $match: { status: 'published' } },
    {
      $group: {
        _id: '$category',
        count: { $sum: 1 },
        totalViews: { $sum: '$views' },
      },
    },
    { $sort: { count: -1 } },
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      stats,
      totalPosts,
      publishedPosts,
      totalComments,
      pendingComments,
      categoryStats,
    },
  });
});

// Get recent posts
exports.getRecentPosts = catchAsync(async (req, res, next) => {
  const limit = parseInt(req.query.limit) || 5;
  
  const posts = await BlogPost.find({ status: 'published' })
    .sort({ publishedAt: -1 })
    .limit(limit)
    .select('title slug excerpt featuredImage publishedAt category')
    .populate('category', 'name color');

  res.status(200).json({
    status: 'success',
    results: posts.length,
    data: {
      posts,
    },
  });
});

// Get categories
exports.getCategories = catchAsync(async (req, res, next) => {
  const categories = await BlogPost.aggregate([
    { $match: { status: 'published' } },
    {
      $group: {
        _id: '$category',
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
  ]);

  res.status(200).json({
    status: 'success',
    results: categories.length,
    data: {
      categories,
    },
  });
});

// Get popular posts
exports.getPopularPosts = catchAsync(async (req, res, next) => {
  const limit = parseInt(req.query.limit) || 5;
  
  const posts = await BlogPost.find({ status: 'published' })
    .sort({ views: -1, likes: -1 })
    .limit(limit)
    .select('title slug excerpt featuredImage publishedAt category views likes')
    .populate('category', 'name color');

  res.status(200).json({
    status: 'success',
    results: posts.length,
    data: {
      posts,
    },
  });
});

// Like a blog post
exports.likePost = catchAsync(async (req, res, next) => {
  const post = await BlogPost.findById(req.params.id);

  if (!post) {
    return next(new AppError('No post found with that ID', 404));
  }

  post.likes += 1;
  await post.save();

  res.status(200).json({
    status: 'success',
    data: {
      likes: post.likes,
    },
  });
});

// Unlike a blog post
exports.unlikePost = catchAsync(async (req, res, next) => {
  const post = await BlogPost.findById(req.params.id);

  if (!post) {
    return next(new AppError('No post found with that ID', 404));
  }

  if (post.likes > 0) {
    post.likes -= 1;
    await post.save();
  }

  res.status(200).json({
    status: 'success',
    data: {
      likes: post.likes,
    },
  });
}); 

// Upload image for blog post (admin only)
exports.uploadImage = catchAsync(async (req, res, next) => {
  console.log('Upload image request received:', {
    hasFile: !!req.file,
    fileInfo: req.file ? {
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
      path: req.file.path
    } : null,
    headers: req.headers,
    body: req.body
  });

  if (!req.file) {
    console.error('No file uploaded');
    return next(new AppError('No image file uploaded', 400));
  }

  // The image has been uploaded to Cloudinary via multer-storage-cloudinary
  // The URL is available in req.file.path
  const imageUrl = req.file.path;

  console.log('Image uploaded successfully:', {
    imageUrl,
    filename: req.file.originalname,
    size: req.file.size
  });

  res.status(200).json({
    status: 'success',
    data: {
      imageUrl,
      filename: req.file.originalname,
      size: req.file.size,
    },
  });
}); 