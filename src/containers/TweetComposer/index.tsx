import React, { useState } from 'react';
import TweetComposeArea from '../../components/organisms/TweetComposeArea';

const TweetComposer: React.FC = () => {
  const [tweetText, setTweetText] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTweetText(event.target.value);
  };

  const handleSubmit = () => {
    console.log(tweetText);
    setTweetText('');
  };

  return (
    <TweetComposeArea
      tweetText={tweetText}
      onChange={handleTextChange}
      onSubmit={handleSubmit}
    />
  );
};

export default TweetComposer;
