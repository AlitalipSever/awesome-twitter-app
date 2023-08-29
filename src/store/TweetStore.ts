import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tweet as TweetType } from '../types/Tweet';

const tweets$ = new BehaviorSubject<TweetType[]>([]);

export const setTweets = (tweets: TweetType[]) => {
  tweets$.next(tweets);
};

export const getTweets = () => {
  return tweets$.asObservable();
};

export const getLikedTweetCount = () => {
  return tweets$.pipe(
    map((tweets) => tweets.filter((tweet) => tweet.liked).length),
  );
};
