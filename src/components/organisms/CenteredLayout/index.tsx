import React from 'react';

interface CenteredLayoutProps {
  children?: React.ReactNode;
  headerTitle: string;
}

const CenteredLayout: React.FC<CenteredLayoutProps> = ({
  children,
  headerTitle,
}) => {
  const env = process.env.REACT_APP_ENV || 'Unknown';
  const displayEnv = env !== 'prod' ? ` -${env}-🛰️` : '';

  return (
    <div className="ml-72 flex w-[600px] h-full min-h-screen flex-col border-l border-r border-gray-300">
      <h1 className="text-2xl pt-3 pl-4 font-bold">
        {headerTitle}
        <span className="text-xl text-gray-500">{displayEnv}</span>
      </h1>
      {children}
    </div>
  );
};

export default CenteredLayout;
