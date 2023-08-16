import React from 'react';
import Tweet, { TweetProps } from '../../components/organisms/Tweet';
import { useTweets } from '../../hooks/useTweets';
import Loading from '../../components/atoms/Loading';
import Error from '../../components/atoms/Error';
import NoTweets from '../../components/atoms/NoTweets';

interface TweetStreamProps {}
const TweetStream: React.FC<TweetStreamProps> = () => {
  const { tweets, loading, error } = useTweets();

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;
  if (tweets.length === 0) return <NoTweets />;

  return (
    <div>
      {tweets.map((tweet: TweetProps) => (
        <Tweet key={`${tweet.username}-${tweet.timestamp}`} {...tweet} />
      ))}
    </div>
  );
};

export default TweetStream;
