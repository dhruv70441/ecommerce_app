import React from 'react';
import Layout from '../components/layout/Layout.js';
import { Link } from 'react-router-dom';

function PageNotFoundPage() {
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-6xl font-bold text-red-600">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Oops! Page Not Found</h2>
          <p className="text-lg text-gray-500 mb-6">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default PageNotFoundPage;
