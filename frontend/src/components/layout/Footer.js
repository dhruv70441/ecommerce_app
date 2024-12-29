import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-6">
      <div className="container mx-auto px-4 text-center">
        <h4 className="text-lg font-semibold">All Rights Reserved &copy; TechBuy</h4>
        <div className="mt-4 flex justify-center space-x-8 md:space-x-6 sm:space-x-4 flex-wrap">
          <Link
            to="/about"
            className="hover:text-yellow-300 transition-colors duration-300 text-sm sm:text-base"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-300 transition-colors duration-300 text-sm sm:text-base"
          >
            Contact
          </Link>
          <Link
            to="/policy"
            className="hover:text-yellow-300 transition-colors duration-300 text-sm sm:text-base"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
