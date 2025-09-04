import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBlog } from '../context/BlogContext';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import BlogSidebar from '../components/BlogSidebar';
import BlogSearchFilters from '../components/BlogSearchFilters';
import { 
  FaSearch, 
  FaFilter, 
  FaArrowRight, 
  FaCalendar, 
  FaEye,
  FaLightbulb,
  FaRocket,
  FaBrain,
  FaChartLine
} from 'react-icons/fa';
import PageHero from '../components/PageHero';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const BlogPage = () => {
  const { 
    posts, 
    loading, 
    error, 
    pagination, 
    filters,
    fetchPosts, 
    updateFilters 
  } = useBlog();
  
  const { colors } = useTheme();
  const [showFilters, setShowFilters] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    fetchPosts(filters);
  }, [filters]);

  const handleSearch = (searchTerm) => {
    updateFilters({ search: searchTerm, page: 1 });
  };

  const handleCategoryChange = (category) => {
    updateFilters({ category, page: 1 });
  };

  const handleSortChange = (sort) => {
    updateFilters({ sort, page: 1 });
  };

  const handlePageChange = (page) => {
    updateFilters({ page });
  };

  if (loading && posts.length === 0) {
    return (
      <div className={`min-h-screen ${colors.bgPrimary}`}>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-[#123456] border-t-transparent rounded-full"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${colors.bgPrimary} relative overflow-hidden`}>
      <Navbar />


      
      {/* Enhanced Hero Section */}
      <motion.section
        className={`py-24 relative overflow-hidden ${colors.bgSecondary}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-60 h-60 bg-[#123456] rounded-full filter blur-3xl opacity-15"
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-80 h-80 bg-[#DC203B] rounded-full filter blur-3xl opacity-10"
            animate={{
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#414042] rounded-full filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Floating Geometric Shapes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 border-2 border-[#123456]/30 rounded-lg bg-[#123456]/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
            custom={0}
          >
            <motion.div
              className="flex justify-center items-center gap-6 mb-8"
              variants={floatingAnimation}
            >
              <motion.div
                className="p-4 rounded-2xl bg-[#123456]/20 backdrop-blur-xl border border-[#123456]/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaLightbulb className="text-5xl text-[#123456]" />
              </motion.div>
              <motion.div
                className="p-4 rounded-2xl bg-[#DC203B]/20 backdrop-blur-xl border border-[#DC203B]/30"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <FaRocket className="text-5xl text-[#DC203B]" />
              </motion.div>
              <motion.div
                className="p-4 rounded-2xl bg-[#123456]/20 backdrop-blur-xl border border-[#123456]/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaBrain className="text-5xl text-[#123456]" />
              </motion.div>
              <motion.div
                className="p-4 rounded-2xl bg-[#DC203B]/20 backdrop-blur-xl border border-[#DC203B]/30"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <FaChartLine className="text-5xl text-[#DC203B]" />
              </motion.div>
            </motion.div>
            
            <motion.span
              className={`inline-block text-sm uppercase font-bold ${colors.iconPrimary} border-b-2 border-[#123456] pb-2 mb-6 font-palo`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              HR Insights & Expertise
            </motion.span>
            
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${colors.textPrimary} mb-8 leading-tight font-palo`}>
              Discover <span className={`bg-gradient-to-r from-[#123456] via-[#DC203B] to-[#414042] bg-clip-text text-transparent animate-gradient`}>Future-Ready</span> HR Solutions
            </h1>
            
            <p className={`text-2xl ${colors.textSecondary} max-w-4xl mx-auto mb-10 leading-relaxed font-vastago`}>
              Explore cutting-edge insights, innovative strategies, and transformative stories from our team of HR visionaries. 
              Stay ahead with the latest trends and breakthrough practices in human resources.
            </p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-6 mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div 
                className={`px-8 py-4 rounded-2xl ${colors.cardBg} ${colors.borderPrimary} border-2 backdrop-blur-xl shadow-lg`}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className={`text-base font-medium ${colors.textSecondary} font-vastago`}>📈 Growth Strategies</span>
              </motion.div>
              <motion.div 
                className={`px-8 py-4 rounded-2xl ${colors.cardBg} ${colors.borderPrimary} border-2 backdrop-blur-xl shadow-lg`}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className={`text-base font-medium ${colors.textSecondary} font-vastago`}>🚀 Innovation</span>
              </motion.div>
              <motion.div 
                className={`px-8 py-4 rounded-2xl ${colors.cardBg} ${colors.borderPrimary} border-2 backdrop-blur-xl shadow-lg`}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className={`text-base font-medium ${colors.textSecondary} font-vastago`}>💡 Best Practices</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Enhanced Search and Filters */}
            <motion.div
              className="mb-12"
              variants={fadeInUp}
              custom={1}
            >
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <div className="flex-1">
                  <motion.div 
                    className={`relative ${searchFocused ? 'scale-105' : 'scale-100'} transition-transform duration-300`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <FaSearch className={`absolute left-6 top-1/2 transform -translate-y-1/2 ${colors.textMuted} transition-colors duration-300 text-xl`} />
                    <input
                      type="text"
                      placeholder="Search for insights, strategies, trends..."
                      className={`w-full pl-16 pr-6 py-6 ${colors.inputBg} ${colors.inputBorder} border-2 rounded-3xl focus:ring-2 focus:ring-[#123456] focus:border-transparent ${colors.inputText} placeholder-gray-400 backdrop-blur-xl transition-all duration-300 shadow-2xl text-lg font-vastago`}
                      value={filters.search}
                      onChange={(e) => handleSearch(e.target.value)}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                    />
                  </motion.div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-4 px-8 py-6 ${colors.cardBg} ${colors.borderPrimary} border-2 rounded-3xl hover:shadow-2xl transition-all duration-300 ${colors.textPrimary} backdrop-blur-xl shadow-lg font-palo text-lg`}
                >
                  <FaFilter className="text-[#123456] text-xl" />
                  <span className="font-bold">Filters</span>
                </motion.button>
              </div>

              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`${colors.cardBg} ${colors.borderPrimary} border-2 rounded-3xl p-8 shadow-2xl backdrop-blur-xl`}
                  >
                    <BlogSearchFilters
                      filters={filters}
                      onCategoryChange={handleCategoryChange}
                      onSortChange={handleSortChange}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Enhanced Posts Grid */}
            {error && (
              <motion.div
                className="bg-red-500/10 border-2 border-red-500/30 text-red-400 px-8 py-6 rounded-3xl mb-8 backdrop-blur-xl"
                variants={fadeInUp}
                custom={2}
              >
                <div className="text-lg font-vastago">{error}</div>
              </motion.div>
            )}

            {posts.length === 0 && !loading ? (
              <motion.div
                className="text-center py-20"
                variants={fadeInUp}
                custom={2}
              >
                <div className={`${colors.textSecondary} text-2xl mb-8 font-vastago`}>
                  No insights found matching your criteria
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => updateFilters({ search: '', category: '', sort: 'latest', page: 1 })}
                  className={`${colors.iconPrimary} hover:text-[#DC203B] underline font-bold transition-colors duration-300 font-palo text-lg`}
                >
                  Clear filters and explore all insights
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                className="grid gap-10 md:grid-cols-2"
                variants={staggerContainer}
              >
                {posts.map((post, index) => (
                  <motion.div
                    key={post._id}
                    variants={fadeInUp}
                    custom={index + 3}
                    whileHover={{ y: -12, scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="group"
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Enhanced Pagination */}
            {pagination.total > 1 && (
              <motion.div
                className="flex justify-center mt-20"
                variants={fadeInUp}
                custom={posts.length + 3}
              >
                <div className="flex gap-4">
                  {pagination.hasPrev && (
                    <motion.button
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handlePageChange(pagination.current - 1)}
                      className={`px-8 py-4 ${colors.borderPrimary} border-2 rounded-3xl hover:shadow-2xl transition-all duration-300 ${colors.textPrimary} backdrop-blur-xl shadow-lg font-palo text-lg`}
                    >
                      Previous
                    </motion.button>
                  )}
                  
                  {Array.from({ length: pagination.total }, (_, i) => i + 1).map((page) => (
                    <motion.button
                      key={page}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handlePageChange(page)}
                      className={`px-8 py-4 border-2 rounded-3xl transition-all duration-300 shadow-lg font-palo text-lg ${
                        page === pagination.current
                          ? `bg-gradient-to-r from-[#123456] to-[#DC203B] text-white border-transparent shadow-2xl`
                          : `${colors.borderPrimary} border hover:shadow-2xl ${colors.textPrimary} backdrop-blur-xl`
                      }`}
                    >
                      {page}
                    </motion.button>
                  ))}
                  
                  {pagination.hasNext && (
                    <motion.button
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handlePageChange(pagination.current + 1)}
                      className={`px-8 py-4 ${colors.borderPrimary} border-2 rounded-3xl hover:shadow-2xl transition-all duration-300 ${colors.textPrimary} backdrop-blur-xl shadow-lg font-palo text-lg`}
                    >
                      Next
                    </motion.button>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Enhanced Sidebar */}
          <div className="lg:w-1/3">
            <motion.div
              variants={fadeInUp}
              custom={2}
              className="sticky top-8"
            >
              <div className={`${colors.cardBg} ${colors.borderPrimary} border-2 rounded-3xl p-8 shadow-2xl backdrop-blur-xl`}>
                <BlogSidebar />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage; 