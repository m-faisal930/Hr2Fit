import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash, FaTrash, FaCheck, FaTimes, FaExclamationTriangle , FaCalendar, FaUser } from 'react-icons/fa';
import api from '../../services/api';
import { useTheme } from '../../context/ThemeContext';


const CommentsManagement = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedComments, setSelectedComments] = useState([]);
  const [filter, setFilter] = useState('all');
  const { colors } = useTheme();

  useEffect(() => {
    fetchComments();
  }, [filter]);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const params = filter !== 'all' ? `?status=${filter}` : '';
      const response = await api.get(`/blog/comments${params}`);
      setComments(response.data.data.comments);
    } catch (err) {
      setError('Failed to fetch comments');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (commentId, status) => {
    try {
      await api.patch(`/blog/comments/${commentId}/status`, { status });
      fetchComments();
    } catch (err) {
      setError('Failed to update comment status');
    }
  };

  const handleDelete = async (commentId) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      try {
        await api.delete(`/blog/comments/${commentId}`);
        fetchComments();
      } catch (err) {
        setError('Failed to delete comment');
      }
    }
  };

  const handleBulkAction = async (action) => {
    if (selectedComments.length === 0) {
      setError('Please select comments to perform bulk action');
      return;
    }

    try {
      if (action === 'delete') {
        if (window.confirm(`Are you sure you want to delete ${selectedComments.length} comments?`)) {
          await Promise.all(selectedComments.map(id => api.delete(`/blog/comments/${id}`)));
        }
      } else {
        await api.patch('/blog/comments/bulk-status', {
          commentIds: selectedComments,
          status: action
        });
      }
      setSelectedComments([]);
      fetchComments();
    } catch (err) {
      setError('Failed to perform bulk action');
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedComments(comments.map(comment => comment._id));
    } else {
      setSelectedComments([]);
    }
  };

  const handleSelectComment = (commentId, checked) => {
    if (checked) {
      setSelectedComments([...selectedComments, commentId]);
    } else {
      setSelectedComments(selectedComments.filter(id => id !== commentId));
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'visible':
        return 'bg-green-100 text-green-800';
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Comments Management</h1>
        <div className="flex items-center space-x-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={`px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${colors.bgSecondary} ${colors.textPrimary}`}
          >
            <option value="all">All Comments</option>
            <option value="visible">Visible</option>
            <option value="hidden">Hidden</option>
          </select>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Bulk Actions */}
      {selectedComments.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-blue-800">
              {selectedComments.length} comment(s) selected
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => handleBulkAction('visible')}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 flex items-center gap-1"
              >
                <FaCheck />
                Show
              </button>
              <button
                onClick={() => handleBulkAction('hidden')}
                className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 flex items-center gap-1"
              >
                <FaEyeSlash />
                Hide
              </button>
              <button
                onClick={() => handleBulkAction('delete')}
                className="bg-red-800 text-white px-3 py-1 rounded text-sm hover:bg-red-900 flex items-center gap-1"
              >
                <FaTrash />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Comments Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    checked={selectedComments.length === comments.length && comments.length > 0}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Comment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Post
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {comments.map((comment) => (
                <tr key={comment._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedComments.includes(comment._id)}
                      onChange={(e) => handleSelectComment(comment._id, e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-md">
                      <div className="text-sm text-gray-900 line-clamp-3">
                        {comment.content}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {comment.author.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          {comment.author.name}
                        </div>
                                              <div className="text-sm text-gray-500">
                        Commenter
                      </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {comment.post?.title || 'Unknown Post'}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(comment.status)}`}>
                      {comment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {formatDate(comment.createdAt)}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      {comment.status !== 'visible' && (
                        <button
                          onClick={() => handleStatusChange(comment._id, 'visible')}
                          className="text-green-600 hover:text-green-900"
                          title="Show"
                        >
                          <FaCheck />
                        </button>
                      )}
                      {comment.status !== 'hidden' && (
                        <button
                          onClick={() => handleStatusChange(comment._id, 'hidden')}
                          className="text-gray-600 hover:text-gray-900"
                          title="Hide"
                        >
                          <FaEyeSlash />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(comment._id)}
                        className="text-red-800 hover:text-red-900"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {comments.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">
            No comments found matching the current filter.
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentsManagement; 