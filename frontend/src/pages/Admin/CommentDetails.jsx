import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaTimes, FaExclamationTriangle , FaEye, FaEyeSlash, FaTrash, FaCalendar, FaUser, FaGlobe } from 'react-icons/fa';
import api from '../../services/api';

const CommentDetails = () => {
  const { id } = useParams();
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchComment();
  }, [id]);

  const fetchComment = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/blog/comments/${id}`);
      setComment(response.data.data.comment);
    } catch (err) {
      setError('Failed to fetch comment details');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (status) => {
    try {
      await api.patch(`/blog/comments/${id}/status`, { status });
      fetchComment();
    } catch (err) {
      setError('Failed to update comment status');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      try {
        await api.delete(`/blog/comments/${id}`);
        // Redirect back to comments list
        window.history.back();
      } catch (err) {
        setError('Failed to delete comment');
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'spam':
        return 'bg-red-100 text-red-800';
      case 'hidden':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !comment) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 text-lg mb-4">
          {error || 'Comment not found'}
        </div>
        <Link
          to="/admin/comments"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Comments
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/admin/comments"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft className="mr-2" />
            Back to Comments
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Comment Details</h1>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(comment.status)}`}>
            {comment.status}
          </span>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Comment Content */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Comment Content</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
            </div>
          </div>

          {/* Post Information */}
          {comment.post && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Post</h2>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">{comment.post.title}</h3>
                <p className="text-gray-600 text-sm">{comment.post.excerpt}</p>
                <Link
                  to={`/blog/${comment.post.slug}`}
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
                >
                  View Post →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Author Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Author Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {comment.author.name.charAt(0).toUpperCase()}
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900">{comment.author.name}</div>
                  <div className="text-sm text-gray-500">{comment.author.email}</div>
                </div>
              </div>
              {comment.author.website && (
                <div className="flex items-center text-sm">
                  <FaGlobe className="mr-2 text-gray-400" />
                  <a
                    href={comment.author.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {comment.author.website}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Comment Details */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Comment Details</h2>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <FaCalendar className="mr-2 text-gray-400" />
                <span className="text-gray-600">Created: {formatDate(comment.createdAt)}</span>
              </div>
              <div className="flex items-center text-sm">
                <FaCalendar className="mr-2 text-gray-400" />
                <span className="text-gray-600">Updated: {formatDate(comment.updatedAt)}</span>
              </div>
              <div className="flex items-center text-sm">
                <FaUser className="mr-2 text-gray-400" />
                <span className="text-gray-600">Likes: {comment.likes || 0}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Actions</h2>
            <div className="space-y-3">
              {comment.status !== 'approved' && (
                <button
                  onClick={() => handleStatusChange('approved')}
                  className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <FaCheck className="mr-2" />
                  Approve Comment
                </button>
              )}
              {comment.status !== 'spam' && (
                <button
                  onClick={() => handleStatusChange('spam')}
                  className="w-full flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <FaExclamationTriangle  className="mr-2" />
                  Mark as Spam
                </button>
              )}
              {comment.status !== 'hidden' && (
                <button
                  onClick={() => handleStatusChange('hidden')}
                  className="w-full flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FaEyeSlash className="mr-2" />
                  Hide Comment
                </button>
              )}
              <button
                onClick={handleDelete}
                className="w-full flex items-center justify-center px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-900 transition-colors"
              >
                <FaTrash className="mr-2" />
                Delete Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetails; 