const Category = require('../models/Category');
const BlogPost = require('../models/BlogPost');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// Get all categories
exports.getAllCategories = catchAsync(async (req, res, next) => {
  const categories = await Category.find({ isActive: true }).sort({ name: 1 });

  res.status(200).json({
    status: 'success',
    results: categories.length,
    data: {
      categories,
    },
  });
});

// Get categories with post counts
exports.getCategoriesWithCounts = catchAsync(async (req, res, next) => {
  const categories = await Category.aggregate([
    { $match: { isActive: true } },
    {
      $lookup: {
        from: 'blogposts',
        localField: '_id',
        foreignField: 'category',
        as: 'posts',
      },
    },
    {
      $addFields: {
        postCount: { $size: '$posts' },
      },
    },
    {
      $project: {
        posts: 0,
      },
    },
    { $sort: { name: 1 } },
  ]);

  res.status(200).json({
    status: 'success',
    results: categories.length,
    data: {
      categories,
    },
  });
});

// Create new category (admin only)
exports.createCategory = catchAsync(async (req, res, next) => {
  // Generate slug manually
  const slug = req.body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  const newCategory = new Category({
    ...req.body,
    slug: slug
  });
  await newCategory.save();

  res.status(201).json({
    status: 'success',
    data: {
      category: newCategory,
    },
  });
});

// Update category (admin only)
exports.updateCategory = catchAsync(async (req, res, next) => {
  // If name is being updated, generate new slug
  if (req.body.name) {
    const slug = req.body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    req.body.slug = slug;
  }

  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!category) {
    return next(new AppError('No category found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      category,
    },
  });
});

// Delete category (admin only)
exports.deleteCategory = catchAsync(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(new AppError('No category found with that ID', 404));
  }

  // Check if category has posts
  const postCount = await BlogPost.countDocuments({ category: req.params.id });
  if (postCount > 0) {
    return next(new AppError('Cannot delete category with existing posts', 400));
  }

  await Category.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

// Get single category
exports.getCategory = catchAsync(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(new AppError('No category found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      category,
    },
  });
}); 