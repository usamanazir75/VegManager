import React, { useState } from 'react';
import Layout from '../components/Layout';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <Layout>
      <div className='register-styles mt-6'>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6 text-right">
            <h2 className="text-2xl font-bold text-center text-green-600">اکاؤنٹ بنائیں</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  صارف نام
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  ای میل
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  پاس ورڈ
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  پاس ورڈ کی تصدیق کریں
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
                >
                  رجسٹر کریں
                </button>
              </div>
            </form>

            <p className="text-center text-sm text-gray-500">
              کیا آپ کا پہلے سے اکاؤنٹ ہے؟{' '}
              <a href="/login" className="text-green-600 hover:text-green-700">
                یہاں لاگ ان کریں
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
