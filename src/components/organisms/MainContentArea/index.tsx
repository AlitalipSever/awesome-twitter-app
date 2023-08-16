import React from 'react';
import TweetComposer from '../../../containers/TweetComposer';
import Tweet from '../Tweet';

const MainContentArea: React.FC = () => {
  return (
    <div className="ml-72 flex w-[600px] h-full min-h-screen flex-col border-l border-r border-gray-300">
      <h1 className="text-2xl pt-3 pl-4 font-bold">Home</h1>
      <TweetComposer />
      <Tweet
        username="John Doe"
        handle="johndoe"
        content="This is a sample tweet created using React, TypeScript, TailwindCSS, and react-icons!"
        timestamp="2h ago"
        avatarUrl="https://via.placeholder.com/150"
      />
    </div>
  );
};

export default MainContentArea;
