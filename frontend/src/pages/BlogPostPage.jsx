import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHeart,
  FaShare,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaLink,
  FaEye,
  FaCalendar,
  FaTag,
  FaArrowLeft,
  FaBookmark,
  FaLightbulb,
  FaRocket,
  FaBrain,
  FaChartLine
} from 'react-icons/fa';
import { useBlog } from '../context/BlogContext';
import { useTheme } from '../context/ThemeContext';
import CommentSection from '../components/CommentSection';
import api from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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

const BlogPostPage = () => {
  const { slug } = useParams();
  const { currentPost, comments, fetchPost, loading, error } = useBlog();
  const { colors } = useTheme();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  useEffect(() => {
    if (currentPost) {
      setLikesCount(currentPost.likes || 0);
    }
  }, [currentPost]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLike = async () => {
    if (!currentPost) return;

    try {
      if (isLiked) {
        await api.patch(`/blog/posts/${currentPost._id}/unlike`);
        setLikesCount(prev => Math.max(0, prev - 1));
      } else {
        await api.patch(`/blog/posts/${currentPost._id}/like`);
        setLikesCount(prev => prev + 1);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = currentPost?.title || 'HR Insights';
    const text = currentPost?.excerpt || 'Check out this HR insight!';

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setShowShareMenu(false);
        return;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
    setShowShareMenu(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className={`min-h-screen ${colors.bgPrimary} flex items-center justify-center`}>
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-[#123456] border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className={`${colors.textSecondary}`}>Loading insight...</p>
        </div>
      </div>
    );
  }

  if (error || !currentPost) {
    return (
      <div className={`min-h-screen ${colors.bgPrimary} flex items-center justify-center`}>
        <div className="text-center">
          <h1 className={`text-2xl font-bold ${colors.textPrimary} mb-2`}>Insight Not Found</h1>
          <p className={`${colors.textSecondary}`}>The insight you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#123456] to-[#DC203B] z-50"
        style={{ width: `${readingProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${readingProgress}%` }}
        transition={{ duration: 0.3 }}
      />



      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`min-h-screen ${colors.bgPrimary}`}
      >
        {/* Enhanced Hero Section */}
        <div className={`${colors.bgSecondary} relative overflow-hidden`}>
          <div className="mx-auto py-20 max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Category Badge */}
              {currentPost.category && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-[#123456] to-[#DC203B] text-white text-base font-bold rounded-full mb-8 font-palo"
                >
                  {currentPost.category.name}
                </motion.span>
              )}

              {/* Title */}
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${colors.textPrimary} mb-10 leading-tight font-palo`}>
                {currentPost.title}
              </h1>

              {/* Meta Information */}
              <div className={`flex flex-wrap items-center gap-8 ${colors.textSecondary} mb-10`}>
                <div className="flex items-center gap-3">
                  <FaCalendar className="w-5 h-5 text-[#123456]" />
                  <span className="text-lg font-vastago">{formatDate(currentPost.publishedAt || currentPost.createdAt)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEye className="w-5 h-5 text-[#123456]" />
                  <span className="text-lg font-vastago">{currentPost.views || 0} views</span>
                </div>
                {currentPost.tags && currentPost.tags.length > 0 && (
                  <div className="flex items-center gap-3">
                    <FaTag className="w-5 h-5 text-[#123456]" />
                    <span className="text-lg font-vastago">{currentPost.tags.join(', ')}</span>
                  </div>
                )}
              </div>

              {/* Excerpt */}
              {currentPost.excerpt && (
                <p className={`text-2xl ${colors.textSecondary} leading-relaxed mb-10 max-w-4xl font-vastago`}>
                  {currentPost.excerpt}
                </p>
              )}

              {/* Featured Image */}
              {currentPost.featuredImage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-10"
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-lg">
                    <img
                      src={currentPost.featuredImage}
                      alt={currentPost.title}
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="max-w-7xl mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              {/* Enhanced Content */}
              <div className={`${colors.cardBg} ${colors.borderPrimary} border-2 rounded-3xl shadow-lg p-10 mb-10 backdrop-blur-xl`}>
                <div
                  className={`prose prose-lg max-w-none ${colors.textPrimary} font-vastago`}
                  style={{
                    '--tw-prose-body': colors.textPrimary,
                    '--tw-prose-headings': colors.textPrimary,
                    '--tw-prose-links': '#3B82F6',
                    '--tw-prose-bold': colors.textPrimary,
                    '--tw-prose-counters': colors.textSecondary,
                    '--tw-prose-bullets': colors.textSecondary,
                    '--tw-prose-hr': colors.borderPrimary,
                    '--tw-prose-quotes': colors.textSecondary,
                    '--tw-prose-quote-borders': colors.borderPrimary,
                    '--tw-prose-captions': colors.textSecondary,
                    '--tw-prose-code': colors.textPrimary,
                    '--tw-prose-pre-code': colors.textPrimary,
                    '--tw-prose-pre-bg': colors.bgSecondary,
                    '--tw-prose-th-borders': colors.borderPrimary,
                    '--tw-prose-td-borders': colors.borderPrimary,
                  }}
                  dangerouslySetInnerHTML={{ __html: currentPost.content }}
                />
                <div className="flex items-center justify-between flex-wrap gap-6 mt-10">
                  <div className="flex items-center gap-6">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleLike}
                      className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 font-palo text-lg ${isLiked
                          ? 'bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/20 dark:text-red-400'
                          : `${colors.bgSecondary} ${colors.textPrimary} hover:${colors.hoverBg}`
                        }`}
                    >
                      <FaHeart className={`w-5 h-5 ${isLiked ? 'text-red-500' : ''}`} />
                      <span>{likesCount} likes</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleBookmark}
                      className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${colors.bgSecondary} ${colors.textPrimary} hover:${colors.hoverBg} font-palo text-lg`}
                    >
                      <FaBookmark className={`w-5 h-5 ${isBookmarked ? 'text-[#123456]' : ''}`} />
                      <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                    </motion.button>

                    <div className="relative">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowShareMenu(!showShareMenu)}
                        className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${colors.bgSecondary} ${colors.textPrimary} hover:${colors.hoverBg} font-palo text-lg`}
                      >
                        <FaShare className="w-5 h-5" />
                        <span>Share</span>
                      </motion.button>

                      {/* Enhanced Share Menu */}
                      <AnimatePresence>
                        {showShareMenu && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className={`absolute top-full left-0 mt-3 ${colors.cardBg} rounded-2xl shadow-lg border-2 ${colors.borderPrimary} p-4 z-10 backdrop-blur-xl`}
                          >
                            <div className="flex gap-3">
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleShare('facebook')}
                                className="p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                                title="Share on Facebook"
                              >
                                <FaFacebook className="w-5 h-5" />
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleShare('twitter')}
                                className="p-4 bg-blue-400 text-white rounded-xl hover:bg-blue-500 transition-colors"
                                title="Share on Twitter"
                              >
                                <FaTwitter className="w-5 h-5" />
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleShare('linkedin')}
                                className="p-4 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors"
                                title="Share on LinkedIn"
                              >
                                <FaLinkedin className="w-5 h-5" />
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleShare('copy')}
                                className={`p-4 ${colors.bgSecondary} ${colors.textPrimary} rounded-xl hover:${colors.hoverBg} transition-colors`}
                                title="Copy Link"
                              >
                                <FaLink className="w-5 h-5" />
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                              {/* Comments Section */}
              <CommentSection
                postId={currentPost._id}
                comments={comments}
                onCommentAdded={() => fetchPost(slug)}
              />

                
              </div>




            </motion.div>

            {/* Enhanced Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-8 space-y-8">
                {/* Enhanced Post Details Card */}
                <div className={`${colors.cardBg} ${colors.borderPrimary} border-2 rounded-3xl shadow-md p-8 backdrop-blur-xl`}>
                  <h3 className={`text-xl font-bold ${colors.textPrimary} mb-6 flex items-center gap-3 font-palo`}>
                    <FaLightbulb className="text-[#123456] text-2xl" />
                    Insight Details
                  </h3>
                  <div className={`space-y-4 text-base ${colors.textSecondary} font-vastago`}>
                    <div className="flex items-center gap-3">
                      <FaEye className="w-5 h-5 text-[#123456]" />
                      <span>{currentPost.views || 0} views</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaHeart className="w-5 h-5 text-[#123456]" />
                      <span>{likesCount} likes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCalendar className="w-5 h-5 text-[#123456]" />
                      <span>{formatDate(currentPost.publishedAt || currentPost.createdAt)}</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Related Topics Card */}
                <div className={`${colors.cardBg} ${colors.borderPrimary} border-2 rounded-3xl shadow-md p-8 backdrop-blur-xl`}>
                  <h3 className={`text-xl font-bold ${colors.textPrimary} mb-6 flex items-center gap-3 font-palo`}>
                    <FaRocket className="text-[#DC203B] text-2xl" />
                    Related Topics
                  </h3>
                  <div className="space-y-3">
                    {['HR Strategy', 'Employee Engagement', 'Leadership', 'Innovation'].map((topic, index) => (
                      <motion.div
                        key={topic}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className={`px-4 py-3 rounded-2xl ${colors.bgSecondary} ${colors.textSecondary} text-base cursor-pointer transition-colors duration-300 font-vastago`}
                      >
                        {topic}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Quick Actions Card */}
                <div className={`${colors.cardBg} ${colors.borderPrimary} border-2 rounded-3xl shadow-md p-8 backdrop-blur-xl`}>
                  <h3 className={`text-xl font-bold ${colors.textPrimary} mb-6 flex items-center gap-3 font-palo`}>
                    <FaBrain className="text-[#414042] text-2xl" />
                    Quick Actions
                  </h3>
                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full px-6 py-4 rounded-2xl ${colors.bgSecondary} ${colors.textPrimary} hover:${colors.hoverBg} transition-all duration-300 text-base font-palo`}
                    >
                      Download PDF
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full px-6 py-4 rounded-2xl ${colors.bgSecondary} ${colors.textPrimary} hover:${colors.hoverBg} transition-all duration-300 text-base font-palo`}
                    >
                      Print Article
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full px-6 py-4 rounded-2xl ${colors.bgSecondary} ${colors.textPrimary} hover:${colors.hoverBg} transition-all duration-300 text-base font-palo`}
                    >
                      Send to Email
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default BlogPostPage; 