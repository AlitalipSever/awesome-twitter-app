import { useState, useEffect } from 'react';
import { tweetService } from '../services/TweetService';
import { Tweet as TweetType } from '../types/Tweet';
import * as tweetStore from '../store/TweetStore';

export const useTweets = () => {
  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [likedTweetCount, setLikedTweetCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [showLiked, setShowLiked] = useState(false);

  useEffect(() => {
    const subscription = tweetService.getTweets().subscribe(
      (tweet) => {
        const timestampedTweet: TweetType = {
          ...tweet,
          receivedAt: Date.now(),
        };
        setTweets((prevTweets: TweetType[]) => {
          const newTweets = [timestampedTweet, ...prevTweets];
          tweetStore.setTweets(newTweets);
          return newTweets;
        });
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

  useEffect(() => {
    const likedCountSubscription = tweetStore
      .getLikedTweetCount()
      .subscribe((count) => setLikedTweetCount(count));

    return () => likedCountSubscription.unsubscribe();
  }, []);

  const toggleLike = (tweetId: string) => {
    setTweets((currentTweets) => {
      const updatedTweets = currentTweets.map((tweet) =>
        tweet.id === tweetId ? { ...tweet, liked: !tweet.liked } : tweet,
      );
      tweetStore.setTweets(updatedTweets);
      return updatedTweets;
    });
  };

  const clearTweets = () => {
    setTweets([]);
    tweetStore.setTweets([]);
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
    likedTweetCount,
    loading,
    error,
    toggleLike,
    clearTweets,
    toggleShowLiked,
  };
};
