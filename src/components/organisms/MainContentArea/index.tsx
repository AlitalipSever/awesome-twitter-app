import React from 'react';
import TweetComposer from '../../../containers/TweetComposer';
import TweetStream from '../../../containers/TweetStream';

const MainContentArea: React.FC = () => {
  return (
    <div>
      <TweetComposer />
      <TweetStream />
    </div>
  );
};

export default MainContentArea;
