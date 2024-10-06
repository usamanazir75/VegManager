import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Assuming you're using React Router

const Header = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-green-600 text-white p-4 shadow-lg fixed top-0 w-full z-50 header-styles">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Wrap the header title with a Link component */}
        <Link to="/" className="text-2xl font-bold">
          ویج مینیجر
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleMenu} className="md:hidden flex flex-col justify-center items-center space-y-1">
          <div className={`w-8 h-1 bg-white transition-all duration-300 rounded ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-8 h-1 bg-white transition-all duration-300 rounded ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 h-1 bg-white transition-all duration-300 rounded ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Navbar Links */}
        <ul className={`flex-col md:flex-row flex md:flex space-x-0 md:space-x-6 text-lg md:items-center ${isOpen ? 'flex' : 'hidden'} md:visible transition-all duration-300`}>
          {/* Conditionally Render Links based on whether user is logged in */}
          {!isLoggedIn ? (
            <>
              <li><Link to="/login" className="hover:text-yellow-300 py-2 px-3">لاگ ان کریں</Link></li>
              <li><Link to="/info" className="hover:text-yellow-300 py-2 px-3">مزید معلومات</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-300 py-2 px-3">رابطہ کریں</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/" className="hover:text-yellow-300 py-2 px-3">ہوم</Link></li>
              <li><Link to="/ledger" className="hover:text-yellow-300 py-2 px-3">لیجر</Link></li>
              <li><Link to="/sales" className="hover:text-yellow-300 py-2 px-3">سیلز</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-300 py-2 px-3">رابطہ کریں</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
