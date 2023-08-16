import React from 'react';
import Tweet from '../../components/organisms/Tweet';
import { useTweets } from '../../hooks/useTweets';
import Loading from '../../components/atoms/Loading';
import Error from '../../components/atoms/Error';
import NoTweets from '../../components/atoms/NoTweets';
import { Tweet as TweetType } from '../../types/Tweet';

interface TweetStreamProps {}
const TweetStream: React.FC<TweetStreamProps> = () => {
  const {
    tweets,
    toggleLike,
    clearTweets,
    loading,
    error,
    toggleShowLiked,
    showLiked,
  } = useTweets();

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;
  if (tweets.length === 0) return <NoTweets />;

  return (
    <div>
      <div>
        {' '}
        <button onClick={toggleShowLiked}>
          {showLiked ? 'Show All Tweets' : 'Show Liked Tweets'}
        </button>
        <button onClick={clearTweets}>Clear Tweets</button>
      </div>
      <div>
        {tweets.map((tweet: TweetType) => (
          <Tweet
            onLikeToggle={toggleLike}
            key={`${tweet.username}-${tweet.timestamp}`}
            {...tweet}
          />
        ))}
      </div>
    </div>
  );
};

export default TweetStream;
