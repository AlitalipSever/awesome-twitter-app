import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-yellow-500">
      <div className="text-center">
        <div className="text-6xl font-bold text-red-500 animate-pulse">404</div>
        <p className="text-xl mt-4 mb-8">Page Not Found</p>
        <Link
          to={'/'}
          className="text-blue-500 hover:underline hover:text-blue-700 transition duration-300"
          aria-label={'Go back to Home'}
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
