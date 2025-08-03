import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBlog } from '../context/BlogContext';
import { FaCalendar, FaEye, FaHeart, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const BlogSidebar = () => {
  const { categories, recentPosts, popularPosts } = useBlog();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-8">
      {/* Categories */}
      <motion.div
        className="relative bg-gradient-to-br from-hr-dark to-hr-mid rounded-[25px] border border-hr-gradient-to/20 p-6"
        variants={fadeInUp}
        custom={0}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/5 to-hr-gradient-to/5 rounded-[25px]"></div>
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-hr-light mb-4">Categories</h3>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <motion.div
                key={category._id}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  to={`/blog?category=${encodeURIComponent(category._id)}`}
                  className="flex items-center justify-between p-3 rounded-[15px] hover:bg-hr-primary/30 transition-all duration-300 group"
                >
                  <span className="text-hr-light/80 group-hover:text-hr-light transition-colors">{category.name}</span>
                  <span className="bg-gradient-to-r from-hr-gradient-from to-hr-gradient-to text-hr-primary text-xs px-3 py-1 rounded-full font-medium">
                    {category.postCount}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Recent Posts */}
      <motion.div
        className="relative bg-gradient-to-br from-hr-dark to-hr-mid rounded-[25px] border border-hr-gradient-to/20 p-6"
        variants={fadeInUp}
        custom={1}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/5 to-hr-gradient-to/5 rounded-[25px]"></div>
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-hr-light mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post._id}
                className="flex gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {post.featuredImage && (
                  <div className="relative w-16 h-16 rounded-[15px] overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hr-primary/50 to-transparent"></div>
                  </div>
                )}
                <div className="flex-1">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm font-medium text-hr-light hover:text-hr-gradient-to line-clamp-2 transition-colors"
                  >
                    {post.title}
                  </Link>
                  <div className="flex items-center text-xs text-hr-light/60 mt-1">
                    <FaCalendar className="mr-1 text-hr-gradient-to" />
                    <span>{formatDate(post.publishedAt || post.createdAt)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Popular Posts */}
      <motion.div
        className="relative bg-gradient-to-br from-hr-dark to-hr-mid rounded-[25px] border border-hr-gradient-to/20 p-6"
        variants={fadeInUp}
        custom={2}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/5 to-hr-gradient-to/5 rounded-[25px]"></div>
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-hr-light mb-4">Popular Posts</h3>
          <div className="space-y-4">
            {popularPosts.map((post, index) => (
              <motion.div
                key={post._id}
                className="flex gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {post.featuredImage && (
                  <div className="relative w-16 h-16 rounded-[15px] overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hr-primary/50 to-transparent"></div>
                  </div>
                )}
                <div className="flex-1">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm font-medium text-hr-light hover:text-hr-gradient-to line-clamp-2 transition-colors"
                  >
                    {post.title}
                  </Link>
                  <div className="flex items-center text-xs text-hr-light/60 mt-1 space-x-3">
                    <div className="flex items-center">
                      <FaEye className="mr-1 text-hr-gradient-to" />
                      <span>{post.views || 0}</span>
                    </div>
                    <div className="flex items-center">
                      <FaHeart className="mr-1 text-hr-gradient-to" />
                      <span>{post.likes || 0}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        className="relative bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-[25px] p-6"
        variants={fadeInUp}
        custom={3}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/10 to-hr-gradient-to/10 rounded-[25px]"></div>
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-hr-primary mb-2">Stay Updated</h3>
          <p className="text-hr-primary/80 text-sm mb-4">
            Get the latest posts and insights delivered to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-[15px] text-hr-primary text-sm focus:outline-none focus:ring-2 focus:ring-hr-primary/50 bg-hr-primary/20 border border-hr-primary/30 placeholder-hr-primary/60"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-hr-primary text-hr-gradient-from px-4 py-2 rounded-[15px] text-sm font-medium hover:bg-hr-primary/90 transition-all duration-300 flex items-center gap-2"
            >
              Subscribe
              <FaArrowRight className="text-xs" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogSidebar; 