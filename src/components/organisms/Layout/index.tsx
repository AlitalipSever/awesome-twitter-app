import React from 'react';
import LeftSideBar from '../LeftSideBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSideBar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
