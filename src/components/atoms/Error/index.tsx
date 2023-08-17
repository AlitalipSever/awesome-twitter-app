import React from 'react';

interface ErrorProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="bg-red-50 p-4 rounded-md text-red-600 font-semibold flex items-center justify-center h-16">
      <span className="mr-2">❌</span>
      Error loading tweets: {message}
    </div>
  );
};

export default ErrorComponent;
