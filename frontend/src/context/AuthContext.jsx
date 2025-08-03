import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  useEffect(() => {
    if (token) localStorage.setItem('token', token);
    else localStorage.removeItem('token');
  }, [token]);
  const login = async (email, pwd) => {
    const { data } = await api.post('/auth/login', { email, password: pwd });
    setToken(data.token);
  };
  const logout = () => setToken(null);
  return (
    <AuthContext.Provider value={{ token, login, logout, isLoggedIn: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
