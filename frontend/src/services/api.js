import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const registerRecruiter = async (formData) => {
    console.log('Form Data2jhjhfajh:', formData);
  try {
    // Convert form data to FormData for file upload
    const data = new FormData();

    // Append all fields to FormData
    Object.keys(formData).forEach((key) => {
      if (key === 'cv' && formData[key]) {
        // For file, append it directly
        data.append(key, formData[key]);
      } else {
        // For other fields, convert to string if needed
        data.append(
          key,
          typeof formData[key] === 'boolean'
            ? formData[key].toString()
            : formData[key]
        );
      }
    });
    console.log(data);

    const response = await axios.post(`${API_URL}/api/recruiters/register`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    throw new Error(
      error.response?.data?.error || 'Registration failed. Please try again.'
    );
  }
};

export default api;
