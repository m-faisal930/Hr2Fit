import React from 'react';
import { motion } from 'framer-motion';
import { useBlog } from '../context/BlogContext';

const BlogSearchFilters = ({ filters, onCategoryChange, onSortChange }) => {
  const { categories } = useBlog();

  const sortOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'views', label: 'Most Viewed' },
    { value: 'comments', label: 'Most Commented' },
    { value: 'likes', label: 'Most Liked' },
  ];

  return (
    <motion.div
      className="relative bg-gradient-to-br from-hr-dark to-hr-mid border border-hr-gradient-to/20 rounded-[20px] p-6 backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/5 to-hr-gradient-to/5 rounded-[20px]"></div>
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-hr-light mb-3">
              Category
            </label>
            <select
              value={filters.category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full px-4 py-3 bg-hr-primary/20 border border-hr-gradient-to/20 rounded-[15px] focus:ring-2 focus:ring-hr-gradient-to focus:border-transparent text-hr-light placeholder-hr-light/50 backdrop-blur-sm"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name} ({category.postCount})
                </option>
              ))}
            </select>
          </div>

          {/* Sort Filter */}
          <div>
            <label className="block text-sm font-medium text-hr-light mb-3">
              Sort By
            </label>
            <select
              value={filters.sort}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full px-4 py-3 bg-hr-primary/20 border border-hr-gradient-to/20 rounded-[15px] focus:ring-2 focus:ring-hr-gradient-to focus:border-transparent text-hr-light placeholder-hr-light/50 backdrop-blur-sm"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogSearchFilters; 