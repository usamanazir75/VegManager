// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white p-6 mt-8">
      <div className='footer-styles'>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-lg text-center md:text-left">© 2024 ویج مینیجر - سب حقوق محفوظ ہیں۔</p>
        <ul className="flex flex-col md:flex-row mt-4 md:mt-0 space-x-0 md:space-x-4">
          <li><a href="/privacy" className="hover:text-yellow-300">پرائیویسی پالیسی</a></li>
          <li><a href="/terms" className="hover:text-yellow-300">شرائط و ضوابط</a></li>
        </ul>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
