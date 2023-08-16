import { useState, useEffect } from 'react';
import { tweetService } from '../services/TweetService';
import { Tweet as TweetType } from '../types/Tweet';

export const useTweets = () => {
  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [showLiked, setShowLiked] = useState(false); // Toggle between all tweets and liked tweets

  useEffect(() => {
    const subscription = tweetService.getTweets().subscribe(
      (tweet) => {
        const timestampedTweet = {
          ...tweet,
          receivedAt: Date.now(),
          liked: false,
          id: crypto.randomUUID(),
        };
        setTweets((prevTweets: TweetType[]) => [
          timestampedTweet,
          ...prevTweets,
        ]);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      },
    );

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTweets((currentTweets) =>
        currentTweets.filter((tweet) => Date.now() - tweet.receivedAt < 30000),
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleLike = (tweetId: string) => {
    setTweets((currentTweets) =>
      currentTweets.map((tweet) =>
        tweet.id === tweetId ? { ...tweet, liked: !tweet.liked } : tweet,
      ),
    );
  };

  const clearTweets = () => {
    setTweets([]);
  };

  const toggleShowLiked = () => {
    setShowLiked(!showLiked);
  };

  const displayedTweets = showLiked
    ? tweets.filter((tweet) => tweet.liked)
    : tweets;

  return {
    showLiked,
    tweets: displayedTweets,
    loading,
    error,
    toggleLike,
    clearTweets,
    toggleShowLiked,
  };
};
