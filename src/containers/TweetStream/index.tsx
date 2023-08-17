import React from 'react';
import Tweet from '../../components/organisms/Tweet';
import { useTweets } from '../../hooks/useTweets';
import Loading from '../../components/atoms/Loading';
import Error from '../../components/atoms/Error';
import NoTweets from '../../components/atoms/NoTweets';
import { Tweet as TweetType } from '../../types/Tweet';
import Button from '../../components/molecules/Button';

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
    likedTweetCount,
  } = useTweets();

  const getContent = () => {
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <Error message={'error'} />;
    }
    if (tweets.length === 0) {
      return <NoTweets />;
    }
  };

  return (
    <div>
      <div className="bg-gray-100 p-4 rounded-md shadow-md space-y-2 space-x-6">
        <span className="text-lg font-bold">
          Liked tweet count: {likedTweetCount}
        </span>
        <Button
          label={showLiked ? 'Show All Tweets' : 'Show Liked Tweets'}
          size={'small'}
          onClick={toggleShowLiked}
        />
        <Button
          label={'Clear Tweets'}
          size={'small'}
          onClick={clearTweets}
          className="bg-red-500"
        />
      </div>
      <div>{getContent()}</div>
      <div>
        {tweets.map((tweet: TweetType) => (
          <Tweet onLikeToggle={toggleLike} key={tweet.id} {...tweet} />
        ))}
      </div>
    </div>
  );
};

export default TweetStream;
