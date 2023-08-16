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
        setTweets((prevTweets: TweetProps[]) => [tweet, ...prevTweets]);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      },
    );

    return () => subscription.unsubscribe();
  }, []);

  return { tweets, loading, error };
};
