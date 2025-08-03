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
      staggerChildren: 0.1,
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
              className="w-12 h-12 border-4 border-[#8176AF] border-t-transparent rounded-full"
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

      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'HR Insights', href: '/blog' },
        ]}
      />
      
      {/* Hero Section */}
      <motion.section
        className={`py-20 relative overflow-hidden ${colors.bgSecondary}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full filter blur-3xl opacity-20"
            animate={{
              x: [0, 20, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] rounded-full filter blur-3xl opacity-15"
            animate={{
              x: [0, -20, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full filter blur-3xl opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            custom={0}
          >
            <motion.div
              className="flex justify-center items-center gap-4 mb-6"
              variants={floatingAnimation}
            >
              <FaLightbulb className="text-4xl text-[#C0B7E8]" />
              <FaRocket className="text-4xl text-[#8176AF]" />
              <FaBrain className="text-4xl text-[#C0B7E8]" />
              <FaChartLine className="text-4xl text-[#8176AF]" />
            </motion.div>
            
            <motion.span
              className="inline-block text-xs uppercase font-bold bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] bg-clip-text text-transparent border-b-2 border-[#8176AF] pb-1 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              HR Insights & Expertise
            </motion.span>
            
            <h1 className={`text-4xl md:text-6xl font-bold ${colors.textPrimary} mb-6 leading-tight`}>
              Discover <span className="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] bg-clip-text text-transparent">Future-Ready</span> HR Solutions
            </h1>
            
            <p className={`text-xl ${colors.textSecondary} max-w-4xl mx-auto mb-8 leading-relaxed`}>
              Explore cutting-edge insights, innovative strategies, and transformative stories from our team of HR visionaries. 
              Stay ahead with the latest trends and breakthrough practices in human resources.
            </p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className={`px-6 py-3 rounded-full ${colors.cardBg} ${colors.borderPrimary} border backdrop-blur-sm`}>
                <span className={`text-sm font-medium ${colors.textSecondary}`}>📈 Growth Strategies</span>
              </div>
              <div className={`px-6 py-3 rounded-full ${colors.cardBg} ${colors.borderPrimary} border backdrop-blur-sm`}>
                <span className={`text-sm font-medium ${colors.textSecondary}`}>🚀 Innovation</span>
              </div>
              <div className={`px-6 py-3 rounded-full ${colors.cardBg} ${colors.borderPrimary} border backdrop-blur-sm`}>
                <span className={`text-sm font-medium ${colors.textSecondary}`}>💡 Best Practices</span>
              </div>
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
              className="mb-8"
              variants={fadeInUp}
              custom={1}
            >
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <motion.div 
                    className={`relative ${searchFocused ? 'scale-105' : 'scale-100'} transition-transform duration-300`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <FaSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${colors.textMuted} transition-colors duration-300`} />
                    <input
                      type="text"
                      placeholder="Search for insights, strategies, trends..."
                      className={`w-full pl-12 pr-4 py-4 ${colors.inputBg} ${colors.inputBorder} border rounded-2xl focus:ring-2 focus:ring-[#8176AF] focus:border-transparent ${colors.inputText} placeholder-gray-400 backdrop-blur-sm transition-all duration-300 shadow-lg`}
                      value={filters.search}
                      onChange={(e) => handleSearch(e.target.value)}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                    />
                  </motion.div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-3 px-6 py-4 ${colors.cardBg} ${colors.borderPrimary} border rounded-2xl hover:shadow-lg transition-all duration-300 ${colors.textPrimary} backdrop-blur-sm shadow-md`}
                >
                  <FaFilter className="text-[#8176AF]" />
                  <span className="font-medium">Filters</span>
                </motion.button>
              </div>

              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`${colors.cardBg} ${colors.borderPrimary} border rounded-2xl p-6 shadow-xl backdrop-blur-sm`}
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
                className="bg-red-500/10 border border-red-500/30 text-red-400 px-6 py-4 rounded-2xl mb-6 backdrop-blur-sm"
                variants={fadeInUp}
                custom={2}
              >
                {error}
              </motion.div>
            )}

            {posts.length === 0 && !loading ? (
              <motion.div
                className="text-center py-16"
                variants={fadeInUp}
                custom={2}
              >
                <div className={`${colors.textSecondary} text-xl mb-6`}>
                  No insights found matching your criteria
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => updateFilters({ search: '', category: '', sort: 'latest', page: 1 })}
                  className="text-[#8176AF] hover:text-[#C0B7E8] underline font-medium transition-colors duration-300"
                >
                  Clear filters and explore all insights
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                className="grid gap-8 md:grid-cols-2"
                variants={staggerContainer}
              >
                {posts.map((post, index) => (
                  <motion.div
                    key={post._id}
                    variants={fadeInUp}
                    custom={index + 3}
                    whileHover={{ y: -8, scale: 1.02 }}
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
                className="flex justify-center mt-16"
                variants={fadeInUp}
                custom={posts.length + 3}
              >
                <div className="flex gap-3">
                  {pagination.hasPrev && (
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handlePageChange(pagination.current - 1)}
                      className={`px-6 py-3 ${colors.borderPrimary} border rounded-2xl hover:shadow-lg transition-all duration-300 ${colors.textPrimary} backdrop-blur-sm shadow-md`}
                    >
                      Previous
                    </motion.button>
                  )}
                  
                  {Array.from({ length: pagination.total }, (_, i) => i + 1).map((page) => (
                    <motion.button
                      key={page}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handlePageChange(page)}
                      className={`px-6 py-3 border rounded-2xl transition-all duration-300 shadow-md ${
                        page === pagination.current
                          ? 'bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-white border-transparent shadow-lg'
                          : `${colors.borderPrimary} border hover:shadow-lg ${colors.textPrimary} backdrop-blur-sm`
                      }`}
                    >
                      {page}
                    </motion.button>
                  ))}
                  
                  {pagination.hasNext && (
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handlePageChange(pagination.current + 1)}
                      className={`px-6 py-3 ${colors.borderPrimary} border rounded-2xl hover:shadow-lg transition-all duration-300 ${colors.textPrimary} backdrop-blur-sm shadow-md`}
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
              <BlogSidebar />
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage; 