const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./config/errorHandler');
const { requireAdmin } = require('./middlewares/auth');
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blogRoutes');
const BlogPost = require('./models/BlogPost');
const Comment = require('./models/Comment');

// Load env vars
dotenv.config();

// console.log("here")
// Connect to database
connectDB();

// Route files
const applicants = require('./routes/applicantRoutes');
const jobs = require('./routes/jobRoutes');

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());



// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}



// Auth
app.use('/api/auth', authRoutes);

// Blog routes
app.use('/api/blog', blogRoutes);
















app.get('/api/admin/stats', requireAdmin, async (req, res) => {
  try {
    const publishedPosts = await BlogPost.countDocuments({ status: 'published' });
    const totalComments = await Comment.countDocuments();
    const approvedComments = await Comment.countDocuments({
      status: 'approved',
    });
    const pendingComments = await Comment.countDocuments({
      status: 'pending',
    });
    res.json({
      publishedPosts,
      postsChange: `+${publishedPosts}%`,
      totalComments,
      commentsChange: `+${totalComments}%`,
      approvedComments,
      approvedChange: `${approvedComments} approved`,
      pendingComments,
      pendingChange: `${pendingComments} pending`,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/admin/blog-posts', requireAdmin, async (req, res) => {
  try {
    // last 6 months
    const now = new Date();
    const labels = [];
    const data = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      labels.push(d.toLocaleString('default', { month: 'short' }));
      const next = new Date(d.getFullYear(), d.getMonth() + 1, 1);
      const count = await BlogPost.countDocuments({
        createdAt: { $gte: d, $lt: next },
      });
      data.push(count);
    }
    res.json({ labels, data });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/admin/comments', requireAdmin, async (req, res) => {
  try {
    // last 6 months
    const now = new Date();
    const labels = [];
    const data = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      labels.push(d.toLocaleString('default', { month: 'short' }));
      const next = new Date(d.getFullYear(), d.getMonth() + 1, 1);
      const count = await Comment.countDocuments({
        createdAt: { $gte: d, $lt: next },
      });
      data.push(count);
    }
    res.json({ labels, data });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/admin/activities', requireAdmin, async (req, res) => {
  try {
    // recent 5 comment and post actions
    const comments = await Comment.find().sort({ createdAt: -1 }).limit(5).lean();
    const posts = await BlogPost.find().sort({ createdAt: -1 }).limit(5).lean();
    const activities = [];
    comments.forEach((c) =>
      activities.push({
        id: c._id,
        action: 'New comment received',
        author: c.author.name,
        post: c.post.toString(),
        time: c.createdAt.toISOString(),
      })
    );

    posts.forEach((p) =>
      activities.push({
        id: p._id,
        action: 'New blog post created',
        title: p.title,
        time: p.createdAt.toISOString(),
      })
    );
    // sort by time desc and take top 5
    activities.sort((a, b) => new Date(b.time) - new Date(a.time));
    res.json({ activities: activities.slice(0, 5) });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

























// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
