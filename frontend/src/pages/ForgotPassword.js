import React, { useState } from 'react';
import Layout from '../components/Layout';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your backend API to send password reset email
    console.log('Password reset link sent to: ', email);
  };

  return (
    <Layout>
    <div className='forgotpassword-styles'>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6">
          <h2 className="text-2xl font-bold text-center text-green-600">پاس ورڈ بھول گئے</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                اپنا ای میل درج کریں
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

            <div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
              >
                پاس ورڈ ری سیٹ لنک بھیجیں
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
