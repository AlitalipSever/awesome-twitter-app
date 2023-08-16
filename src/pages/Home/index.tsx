import React from 'react';
import LeftSideBar from '../../components/organisms/LeftSideBar';
import MainContentArea from '../../components/organisms/MainContentArea';

const Home: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSideBar />
        <MainContentArea />
      </div>
    </div>
  );
};

export default Home;
