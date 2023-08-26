import React from 'react';

interface CenteredLayoutProps {
  children?: React.ReactNode;
  headerTitle: string;
}

const CenteredLayout: React.FC<CenteredLayoutProps> = ({
  children,
  headerTitle,
}) => {
  return (
    <div className="ml-72 flex w-[600px] h-full min-h-screen flex-col border-l border-r border-gray-300">
      <h1 className="text-2xl pt-3 pl-4 font-bold">{headerTitle}</h1>
      {children}
    </div>
  );
};

export default CenteredLayout;
