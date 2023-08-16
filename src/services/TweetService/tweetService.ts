import { merge } from 'rxjs';
import { createTweetSource } from './utils';

const tweetObservable = merge(
  createTweetSource(
    5000,
    'AwardsDarwin',
    'Facepalm',
    'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg',
  ),
  createTweetSource(
    3000,
    'iamdevloper',
    'Expert',
    'https://pbs.twimg.com/profile_images/1677090954350583811/Xy93qVY4_400x400.jpg',
  ),
  createTweetSource(
    5000,
    'CommitStrip',
    'Funny',
    'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
  ),
);

export const tweetService = {
  getTweets: () => tweetObservable,
};
