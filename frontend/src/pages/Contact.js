import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
        <div className='contact-styles mt-6'>
      <div className="flex justify-center items-center py-16 bg-white">
        <div className="max-w-4xl w-full bg-green-200 shadow-lg rounded-lg overflow-hidden"> {/* Light green background */}
          <div className="p-8 md:p-16">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-center mb-10 text-green-900">رابطہ کریں</h1> {/* Darker green for heading text */}

            {/* Form Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-semibold text-green-900 mb-6">ہم سے رابطہ کریں</h2> {/* Darker green */}
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-green-900">نام:</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-green-100 text-green-900" 
                      placeholder="اپنا نام درج کریں"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-green-900">ای میل:</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-green-100 text-green-900"
                      placeholder="اپنی ای میل درج کریں"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-lg font-medium text-green-900">پیغام:</label>
                    <textarea
                      id="message"
                      rows="4"
                      className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-green-100 text-green-900"
                      placeholder="اپنا پیغام درج کریں"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
                  >
                    بھیجیں
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="bg-green-300 p-6 rounded-lg shadow-inner">  {/* Lighter green background for contact info */}
                <h2 className="text-2xl font-semibold text-green-900 mb-6">ہماری معلومات</h2>  {/* Darker green */}
                <p className="text-green-800 mb-4">
                  Gujranwala : شہر<br />
                  فون:03177265576<br />
                  ای میل: usamanazeer75@gmail.com
                </p>
                <p className="text-green-800">
                  آپ ہم سے براہ راست ای میل یا فون کے ذریعے رابطہ کر سکتے ہیں۔
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Contact;
