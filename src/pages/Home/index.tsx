import React from 'react';
import LeftSideBar from '../../components/organisms/LeftSideBar';
import TweetComposer from '../../containers/TweetComposer';

const Home: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSideBar />
        <div className="ml-72 flex w-[600px] h-full min-h-screen flex-col border-l border-r border-gray-300">
          <h1 className="text-2xl pt-3 pl-4 font-bold">Home</h1>
          <TweetComposer />
        </div>
      </div>
    </div>
  );
};

export default Home;
