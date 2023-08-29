import React, { useState } from 'react';
import TweetComposeArea from '../../components/organisms/TweetComposeArea';
import { AVATAR_URL, USERNAME } from '../../utils';

const TweetComposer: React.FC = () => {
  const [tweetText, setTweetText] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      avatarUrl={AVATAR_URL}
      username={USERNAME}
    />
  );
};

export default TweetComposer;
