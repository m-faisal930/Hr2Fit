import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaChevronDown, FaChevronUp, FaHeart, FaReply } from 'react-icons/fa';
import api from '../services/api';

const CommentSection = ({ postId, comments: initialComments = [], onCommentAdded }) => {
  const [comments, setComments] = useState(initialComments);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    content: ''
  });
  const [errors, setErrors] = useState({});

  // Update local comments when initialComments prop changes
  useEffect(() => {
    if (initialComments) {
      setComments(initialComments);
    }
  }, [initialComments]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.content.trim()) {
      newErrors.content = 'Comment is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await api.post('/blog/comments', {
        post: postId,
        author: { name: formData.name },
        content: formData.content
      });

      // Add new comment to local state
      setComments(prev => [response.data.data.comment, ...prev]);
      setFormData({ name: '', content: '' });
      setErrors({});
      
      // Notify parent component to refresh post data
      if (onCommentAdded) {
        onCommentAdded();
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLike = async (commentId) => {
    try {
      await api.patch(`/blog/comments/${commentId}/like`);
      setComments(prev => 
        prev.map(comment => 
          comment._id === commentId 
            ? { ...comment, likes: comment.likes + 1 }
            : comment
        )
      );
    } catch (error) {
      console.error('Error liking comment:', error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-8"
    >
      {/* Comments Header */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <FaComments className="text-blue-500" />
          <span className="font-semibold text-gray-800">
            Comments ({comments.length})
          </span>
        </div>
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            {/* Comment Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Share your thoughts
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Comment *
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                    rows={4}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      errors.content ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Share your insights..."
                  />
                  {errors.content && (
                    <p className="text-red-500 text-sm mt-1">{errors.content}</p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isSubmitting ? 'Posting...' : 'Post Comment'}
                </motion.button>
              </div>
            </motion.form>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8 text-gray-500"
                >
                  <FaComments className="mx-auto text-4xl mb-2 text-gray-300" />
                  <p>No comments yet. Be the first to share your thoughts!</p>
                </motion.div>
              ) : (
                comments.map((comment, index) => (
                  <motion.div
                    key={comment._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-gray-800">
                            {comment.author.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {formatDate(comment.createdAt)}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleLike(comment._id)}
                        className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition-colors duration-200"
                      >
                        <FaHeart className="w-3 h-3" />
                        <span>{comment.likes || 0}</span>
                      </motion.button>
                      
                      <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 transition-colors duration-200">
                        <FaReply className="w-3 h-3" />
                        <span>Reply</span>
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CommentSection; 