import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn) navigate('/admin/dashboard', { replace: true });
  }, [isLoggedIn, navigate]);

  // Validate form fields
  const validate = () => {
    const errs = {};
    if (!email) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = 'Enter a valid email';

    if (!password) errs.password = 'Password is required';
    else if (password.length < 8)
      errs.password = 'Password must be at least 8 characters';

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    try {
      await login(email, password);
      navigate('/admin/dashboard', { replace: true });
    } catch (err) {
      setErrors({ form: err.response?.data?.message || 'Login failed' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-50 w-auto" src={logo} alt="App Logo" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Admin Portal Login
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          {errors.form && (
            <p className="text-red-500 text-sm mb-4">{errors.form}</p>
          )}
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setErrors(validate())}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400
                  ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setErrors(validate())}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400
                  ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="********"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={
                  !email || !password || errors.email || errors.password
                }
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
