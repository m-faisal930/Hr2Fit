import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEye, FaComment, FaHeart, FaCalendar, FaUser, FaTag, FaArrowRight } from 'react-icons/fa';

const BlogCard = ({ post }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-hr-dark to-hr-mid rounded-[25px] border border-hr-gradient-to/20 overflow-hidden hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/5 to-hr-gradient-to/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Featured Image */}
      {post.featuredImage && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hr-primary/50 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <span 
              className="text-hr-primary px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-hr-gradient-from to-hr-gradient-to shadow-lg"
            >
              {post.category?.name || 'Uncategorized'}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Meta Information */}
        <div className="flex items-center text-sm text-hr-light/60 mb-4">
          <div className="flex items-center">
            <FaCalendar className="mr-2 text-hr-gradient-to" />
            <span>{formatDate(post.publishedAt || post.createdAt)}</span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-hr-light mb-3 group-hover:text-hr-gradient-to transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-hr-light/70 mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="flex items-center text-xs bg-hr-primary/20 text-hr-light/80 px-2 py-1 rounded-full border border-hr-gradient-to/20"
              >
                <FaTag className="mr-1 text-hr-gradient-to" />
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-hr-light/50">+{post.tags.length - 3} more</span>
            )}
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-hr-gradient-to/20">
          <div className="flex items-center space-x-4 text-sm text-hr-light/60">
            <div className="flex items-center">
              <FaEye className="mr-1 text-hr-gradient-to" />
              <span>{post.views || 0}</span>
            </div>
            <div className="flex items-center">
              <FaComment className="mr-1 text-hr-gradient-to" />
              <span>{post.comments || 0}</span>
            </div>
            <div className="flex items-center">
              <FaHeart className="mr-1 text-hr-gradient-to" />
              <span>{post.likes || 0}</span>
            </div>
          </div>
          
          <Link
            to={`/blog/${post.slug}`}
            className="text-hr-gradient-to hover:text-hr-gradient-from font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
          >
            Read More
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard; 