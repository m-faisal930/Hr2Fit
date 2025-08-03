import React, { createContext, useContext, useReducer, useEffect } from 'react';
import api from '../services/api';

const BlogContext = createContext();

const initialState = {
  posts: [],
  currentPost: null,
  comments: [],
  categories: [],
  recentPosts: [],
  popularPosts: [],
  loading: false,
  error: null,
  pagination: {
    current: 1,
    total: 1,
    hasNext: false,
    hasPrev: false,
  },
  filters: {
    search: '',
    category: '',
    tag: '',
    sort: 'latest',
  },
};

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_POSTS':
      return { ...state, posts: action.payload, loading: false };
    case 'SET_CURRENT_POST':
      return { ...state, currentPost: action.payload, loading: false };
    case 'SET_COMMENTS':
      return { ...state, comments: action.payload };
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'SET_RECENT_POSTS':
      return { ...state, recentPosts: action.payload };
    case 'SET_POPULAR_POSTS':
      return { ...state, popularPosts: action.payload };
    case 'SET_PAGINATION':
      return { ...state, pagination: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case 'ADD_COMMENT':
      return { 
        ...state, 
        comments: [action.payload, ...state.comments],
        currentPost: state.currentPost ? {
          ...state.currentPost,
          comments: state.currentPost.comments + 1
        } : null
      };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  // Fetch all posts
  const fetchPosts = async (filters = {}) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const params = new URLSearchParams();
      
      if (filters.search) params.append('search', filters.search);
      if (filters.category) params.append('category', filters.category);
      if (filters.tag) params.append('tag', filters.tag);
      if (filters.sort) params.append('sort', filters.sort);
      if (filters.page) params.append('page', filters.page);
      
      const response = await api.get(`/blog/posts?${params}`);
      dispatch({ type: 'SET_POSTS', payload: response.data.data.posts });
      dispatch({ type: 'SET_PAGINATION', payload: response.data.pagination });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.response?.data?.message || 'Failed to fetch posts' });
    }
  };

  // Fetch single post
  const fetchPost = async (slug) => {
    try {
      console.log('Fetching post with slug:', slug);
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await api.get(`/blog/posts/${slug}`);
      console.log('Post response:', response.data);
      dispatch({ type: 'SET_CURRENT_POST', payload: response.data.data.post });
      dispatch({ type: 'SET_COMMENTS', payload: response.data.data.comments });
    } catch (error) {
      console.error('Error fetching post:', error);
      dispatch({ type: 'SET_ERROR', payload: error.response?.data?.message || 'Failed to fetch post' });
    }
  };

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await api.get('/blog/categories');
      dispatch({ type: 'SET_CATEGORIES', payload: response.data.data.categories });
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  // Fetch recent posts
  const fetchRecentPosts = async () => {
    try {
      const response = await api.get('/blog/posts/recent');
      dispatch({ type: 'SET_RECENT_POSTS', payload: response.data.data.posts });
    } catch (error) {
      console.error('Failed to fetch recent posts:', error);
    }
  };

  // Fetch popular posts
  const fetchPopularPosts = async () => {
    try {
      const response = await api.get('/blog/posts/popular');
      dispatch({ type: 'SET_POPULAR_POSTS', payload: response.data.data.posts });
    } catch (error) {
      console.error('Failed to fetch popular posts:', error);
    }
  };

  // Add comment
  const addComment = async (commentData) => {
    try {
      const response = await api.post('/blog/comments', commentData);
      dispatch({ type: 'ADD_COMMENT', payload: response.data.data.comment });
      return response.data.data.comment;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to add comment');
    }
  };

  // Update filters
  const updateFilters = (filters) => {
    dispatch({ type: 'SET_FILTERS', payload: filters });
  };

  // Clear error
  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  // Initialize data
  useEffect(() => {
    fetchCategories();
    fetchRecentPosts();
    fetchPopularPosts();
  }, []);

  const value = {
    ...state,
    fetchPosts,
    fetchPost,
    fetchCategories,
    fetchRecentPosts,
    fetchPopularPosts,
    addComment,
    updateFilters,
    clearError,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
}; 