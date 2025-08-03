const Comment = require('../models/Comment');
const BlogPost = require('../models/BlogPost');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// Get all comments (admin only)
exports.getAllComments = catchAsync(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;

  const filter = {};
  
  if (req.query.status) {
    filter.status = req.query.status;
  }
  
  if (req.query.post) {
    filter.post = req.query.post;
  }

  const comments = await Comment.find(filter)
    .populate('post', 'title slug')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const total = await Comment.countDocuments(filter);

  res.status(200).json({
    status: 'success',
    results: comments.length,
    pagination: {
      current: page,
      total: Math.ceil(total / limit),
      hasNext: page * limit < total,
      hasPrev: page > 1,
    },
    data: {
      comments,
    },
  });
});

// Get comments for a specific post
exports.getPostComments = catchAsync(async (req, res, next) => {
  const comments = await Comment.find({ 
    post: req.params.postId, 
    status: 'visible',
    parentComment: null 
  })
    .populate('replies')
    .sort({ createdAt: -1 });

  res.status(200).json({
    status: 'success',
    results: comments.length,
    data: {
      comments,
    },
  });
});

// Create new comment
exports.createComment = catchAsync(async (req, res, next) => {
  // Add IP address and user agent
  req.body.ipAddress = req.ip;
  req.body.userAgent = req.get('User-Agent');

  const newComment = await Comment.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      comment: newComment,
    },
  });
});

// Update comment status (admin only)
exports.updateCommentStatus = catchAsync(async (req, res, next) => {
  const comment = await Comment.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!comment) {
    return next(new AppError('No comment found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      comment,
    },
  });
});

// Delete comment (admin only)
exports.deleteComment = catchAsync(async (req, res, next) => {
  const comment = await Comment.findByIdAndDelete(req.params.id);

  if (!comment) {
    return next(new AppError('No comment found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

// Get comment statistics (admin only)
exports.getCommentStats = catchAsync(async (req, res, next) => {
  const stats = await Comment.aggregate([
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 },
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

  const totalComments = await Comment.countDocuments();
  const visibleComments = await Comment.countDocuments({ status: 'visible' });
  const hiddenComments = await Comment.countDocuments({ status: 'hidden' });

  res.status(200).json({
    status: 'success',
    data: {
      stats,
      totalComments,
      visibleComments,
      hiddenComments,
    },
  });
});

// Bulk update comment status (admin only)
exports.bulkUpdateCommentStatus = catchAsync(async (req, res, next) => {
  const { commentIds, status } = req.body;

  if (!commentIds || !Array.isArray(commentIds) || commentIds.length === 0) {
    return next(new AppError('Please provide comment IDs', 400));
  }

  if (!['visible', 'hidden'].includes(status)) {
    return next(new AppError('Invalid status', 400));
  }

  const result = await Comment.updateMany(
    { _id: { $in: commentIds } },
    { status }
  );

  res.status(200).json({
    status: 'success',
    data: {
      updatedCount: result.modifiedCount,
    },
  });
});

// Like a comment
exports.likeComment = catchAsync(async (req, res, next) => {
  const comment = await Comment.findByIdAndUpdate(
    req.params.id,
    { $inc: { likes: 1 } },
    { new: true }
  );

  if (!comment) {
    return next(new AppError('No comment found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      comment,
    },
  });
}); 