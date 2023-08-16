import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="bg-blue-50 p-4 rounded-md text-blue-600 font-semibold flex items-center justify-center h-16">
      <span className="animate-spin mr-2">🔄</span>
      Loading...
    </div>
  );
};

export default Loading;
