import React from 'react';
import { GiAbstract047 } from 'react-icons/gi';

const Loading: React.FC = () => {
  return (
    <div className="p-4 text-white font-semibold flex items-center justify-center h-16 bg-gradient-to-r from-blue-400 to-purple-400">
      <span className="animate-spin mr-2">
        <GiAbstract047 />
      </span>
      Loading...
    </div>
  );
};

export default Loading;
