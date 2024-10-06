import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for logging in the user goes here (API call)
    console.log('Logging in with:', { email, password });
  };

  return (
    <Layout>
    <div className='login-styles'>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6">
          <h2 className="text-2xl font-bold text-center text-green-600">لاگ ان کریں</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                ای میل
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                پاس ورڈ
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
              >
                لاگ ان
              </button>
            </div>
          </form>

          {/* Register and Forgot Password Links */}
          <p className="text-center text-sm text-gray-500">
            کیا آپ کا اکاؤنٹ نہیں ہے؟{' '}
            <Link to="/register" className="text-green-600 hover:text-green-700">
              یہاں رجسٹر کریں
            </Link>
          </p>
          <p className="text-center text-sm text-gray-500">
            <Link to="/forgot-password" className="text-green-600 hover:text-green-700">
              پاس ورڈ بھول گئے؟
            </Link>
          </p>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Login;
