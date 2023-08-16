import { useState, useEffect } from 'react';
import { TweetProps } from '../components/organisms/Tweet';
import { tweetService } from '../services/TweetService';

export const useTweets = () => {
  const [tweets, setTweets] = useState<TweetProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const subscription = tweetService.getTweets().subscribe(
      (tweet) => {
        const timestampedTweet = { ...tweet, receivedAt: Date.now() };
        setTweets((prevTweets: TweetProps[]) => [
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

  return { tweets, loading, error };
};
