import React from 'react';
import TweetComposer from '../../../containers/TweetComposer';
import TweetStream from '../../../containers/TweetStream';

const MainContentArea: React.FC = () => {
  return (
    <div className="ml-72 flex w-[600px] h-full min-h-screen flex-col border-l border-r border-gray-300">
      <h1 className="text-2xl pt-3 pl-4 font-bold">Home</h1>
      <TweetComposer />
      <TweetStream />
    </div>
  );
};

export default MainContentArea;
