const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BlogPost',
      required: [true, 'Comment must belong to a post'],
    },
    author: {
      name: {
        type: String,
        required: [true, 'Please add your name'],
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters'],
      },
    },
    content: {
      type: String,
      required: [true, 'Comment content is required'],
      maxlength: [1000, 'Comment cannot exceed 1000 characters'],
    },
    status: {
      type: String,
      enum: ['visible', 'hidden'],
      default: 'visible',
    },
    parentComment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
      default: null,
    },
    replies: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    }],
    likes: {
      type: Number,
      default: 0,
    },
    ipAddress: {
      type: String,
    },
    userAgent: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Increment post's comment count when comment is created
commentSchema.post('save', async function(doc) {
  const BlogPost = mongoose.model('BlogPost');
  await BlogPost.findByIdAndUpdate(doc.post, { 
    $inc: { comments: 1 } 
  });
});

// Decrement post's comment count when comment is removed
commentSchema.pre('remove', async function(next) {
  const BlogPost = mongoose.model('BlogPost');
  await BlogPost.findByIdAndUpdate(this.post, { 
    $inc: { comments: -1 } 
  });
  next();
});

module.exports = mongoose.model('Comment', commentSchema); 