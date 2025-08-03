const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Post title is required'],
      trim: true,
      maxlength: [200, 'Post title cannot exceed 200 characters'],
    },
    content: {
      type: String,
      required: [true, 'Post content is required'],
    },
    excerpt: {
      type: String,
      maxlength: [300, 'Excerpt cannot exceed 300 characters'],
    },
    // Author field removed - only admin can create posts
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Category is required'],
    },
    tags: {
      type: [String],
      default: [],
    },
    featuredImage: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['published', 'draft', 'archived'],
      default: 'draft',
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    metaTitle: {
      type: String,
      maxlength: [60, 'Meta title cannot exceed 60 characters'],
    },
    metaDescription: {
      type: String,
      maxlength: [160, 'Meta description cannot exceed 160 characters'],
    },
    publishedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Generate slug from title before saving
blogPostSchema.pre('save', function (next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

// Index for search functionality
blogPostSchema.index({ title: 'text', content: 'text', tags: 'text' });

module.exports = mongoose.model('BlogPost', blogPostSchema); 